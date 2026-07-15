import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/**
 * Register GSAP's ScrollTrigger plugin exactly once.
 * Call this at the top of every useEffect that uses scroll-triggered animations.
 */
export function ensureGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Animate elements into view from a starting state when they scroll into the viewport.
 *
 * @param {Element} scope     - The GSAP context scope (usually root.current).
 * @param {string}  selector  - CSS selector for the elements to animate.
 * @param {object}  vars      - gsap.from() vars, including an optional scrollTrigger config.
 */
export function revealFrom(scope, selector, vars) {
  const targets = scope ? scope.querySelectorAll(selector) : document.querySelectorAll(selector);
  if (!targets.length) return;
  gsap.from(targets, vars);
}
