// Minimal parser for the limited SVG path grammar used by mumbai_paths.js and
// the road data: M (moveto), L (lineto), C (cubic bezier), Z (closepath),
// absolute coordinates only. This is intentionally not a general SVG path
// parser — it only needs to understand the shapes this project already ships.
import * as THREE from 'three';

/**
 * Splits a "d" attribute string into command letters and numeric tokens.
 */
function tokenize(d) {
  return d.match(/[MLCZ]|-?\d*\.?\d+/g) || [];
}

/**
 * Parses a "d" attribute string into a flat list of drawing commands.
 * Bare coordinate pairs following an "M" are treated as implicit linetos,
 * matching standard SVG path semantics.
 */
export function parsePath(d) {
  const tokens = tokenize(d);
  const commands = [];
  let i = 0;
  let cmd = null;

  while (i < tokens.length) {
    const t = tokens[i];
    if (t === 'M' || t === 'L' || t === 'C' || t === 'Z') {
      cmd = t;
      i += 1;
    }

    if (cmd === 'M') {
      commands.push({ type: 'M', x: Number(tokens[i]), y: Number(tokens[i + 1]) });
      i += 2;
      cmd = 'L';
    } else if (cmd === 'L') {
      commands.push({ type: 'L', x: Number(tokens[i]), y: Number(tokens[i + 1]) });
      i += 2;
    } else if (cmd === 'C') {
      commands.push({
        type: 'C',
        x1: Number(tokens[i]),
        y1: Number(tokens[i + 1]),
        x2: Number(tokens[i + 2]),
        y2: Number(tokens[i + 3]),
        x: Number(tokens[i + 4]),
        y: Number(tokens[i + 5]),
      });
      i += 6;
    } else if (cmd === 'Z') {
      commands.push({ type: 'Z' });
    } else {
      i += 1;
    }
  }

  return commands;
}

/**
 * Builds a THREE.Shape from a parsed path so it can be fed into
 * ExtrudeGeometry. `project(x, y)` maps raw SVG coordinates into the
 * shape's local 2D space.
 */
export function shapeFromPath(d, project) {
  const shape = new THREE.Shape();
  parsePath(d).forEach((c) => {
    if (c.type === 'M') {
      const [x, y] = project(c.x, c.y);
      shape.moveTo(x, y);
    } else if (c.type === 'L') {
      const [x, y] = project(c.x, c.y);
      shape.lineTo(x, y);
    } else if (c.type === 'C') {
      const [x1, y1] = project(c.x1, c.y1);
      const [x2, y2] = project(c.x2, c.y2);
      const [x, y] = project(c.x, c.y);
      shape.bezierCurveTo(x1, y1, x2, y2, x, y);
    } else if (c.type === 'Z') {
      shape.closePath();
    }
  });
  return shape;
}

/**
 * Flattens a parsed path into a polyline, subdividing curves so the result
 * can be handed straight to THREE.CatmullRomCurve3 / TubeGeometry. Used to
 * turn road centrelines into glowing 3D tubes.
 */
export function pathToPoints(d, project, curveSegments = 14) {
  const commands = parsePath(d);
  const points = [];
  let current = { x: 0, y: 0 };

  commands.forEach((c) => {
    if (c.type === 'M' || c.type === 'L') {
      current = { x: c.x, y: c.y };
      points.push(project(c.x, c.y));
    } else if (c.type === 'C') {
      const p0 = current;
      for (let s = 1; s <= curveSegments; s += 1) {
        const t = s / curveSegments;
        const mt = 1 - t;
        const x = mt ** 3 * p0.x + 3 * mt ** 2 * t * c.x1 + 3 * mt * t ** 2 * c.x2 + t ** 3 * c.x;
        const y = mt ** 3 * p0.y + 3 * mt ** 2 * t * c.y1 + 3 * mt * t ** 2 * c.y2 + t ** 3 * c.y;
        points.push(project(x, y));
      }
      current = { x: c.x, y: c.y };
    }
    // 'Z' is a no-op here — none of the road paths close into a loop.
  });

  return points;
}