"use client";

import { useState } from "react";
import styles from "./Departments.module.css";

const departments = [
  {
    code: "CRM",
    title: "Corporate Relations & Marketing",
    description:
      "Build partnerships, connect with brands and represent 4C beyond campus.",
  },
  {
    code: "DC",
    title: "Digital Creatives",
    description:
      "Design visual identities, campaigns and experiences that define the face of 4C.",
  },
  {
    code: "F&M",
    title: "Film & Media",
    description:
      "Capture stories, create films and preserve every unforgettable moment.",
  },
  {
    code: "IHC",
    title: "In-House Creatives",
    description:
      "Transform ideas into immersive spaces, installations and on-ground experiences.",
  },
  {
    code: "LA",
    title: "Logistics & Administration",
    description:
      "Plan, coordinate and execute every event with precision from start to finish.",
  },
  {
    code: "PR",
    title: "Public Relations",
    description:
      "Build relationships, strengthen communities and grow the 4C network.",
  },
  {
    code: "SMCW",
    title: "Social Media & Content Writing",
    description:
      "Shape the digital voice of 4C through content, storytelling and strategy.",
  },
  {
    code: "T&R",
    title: "Technicals & Research",
    description:
      "Develop the technology, websites and systems powering every initiative.",
  },
];

export default function Departments() {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.heroHeading}>
            YOUR PLACE AT 4C.
          </h2>

          <p className={styles.intro}>
            Find the team where you'll make the biggest impact.
          </p>
        </div>

        <div className={styles.preview}>
          {active ? (
            <>
              <h3
                key={active.code}
                className={styles.selectedTitle}
              >
                {active.title}
              </h3>

              <p
                key={active.code + "-description"}
                className={styles.selectedDescription}
              >
                {active.description}
              </p>
            </>
          ) : (
            <>
              <h3 className={styles.selectedTitle}>
                Select a Department
              </h3>

              <p className={styles.selectedDescription}>
                Hover over or tap any department below to explore its
                responsibilities, opportunities and find where you can make
                the biggest impact at 4C.
              </p>
            </>
          )}
        </div>

        <div className={styles.grid}>
          {departments.map((department) => (
            <button
              key={department.code}
              type="button"
              className={`${styles.card} ${
                active?.code === department.code
                  ? styles.active
                  : ""
              }`}
              onMouseEnter={() => setActive(department)}
              onFocus={() => setActive(department)}
              onClick={() => setActive(department)}
            >
              <span className={styles.code}>
                {department.code}
              </span>

              <span className={styles.departmentName}>
                {department.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}