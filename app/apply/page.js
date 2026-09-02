"use client";

import Hero from "@/components/Recruitment/Hero";
import Departments from "@/components/Recruitment/Departments";
import Eligibility from "@/components/Recruitment/Eligibility";
import Contact from "@/components/Recruitment/Contact";
import CTA from "@/components/Recruitment/CTA";
import styles from "./page.module.css";

export default function ApplyPage() {
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
