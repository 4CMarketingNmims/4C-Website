"use client";

import Hero from "./Hero";
import Departments from "./Departments";
import Eligibility from "./Eligibility";
import Contact from "./Contact";
import CTA from "./CTA";

import styles from "./Recruitment.module.css";

export default function Recruitment() {
  return (
    <main className={styles.page}>
      <Hero />
      <Departments />
      <Eligibility />
      <Contact />
      <CTA />
    </main>
  );
}