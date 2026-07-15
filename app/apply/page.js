import Hero from "@/components/Recruitment/Hero";
import Eligibility from "@/components/Recruitment/Eligibility";
import Departments from "@/components/Recruitment/Departments";
import CTA from "@/components/Recruitment/CTA";
import Contact from "@/components/Recruitment/Contact";

import styles from "./page.module.css";

export const metadata = {
  title: "Recruitment | 4C NMIMS",
  description:
    "Join 4C – The Official Marketing Committee of NMIMS MPSTME.",
};

export default function RecruitmentPage() {
  return (
    <main className={styles.page}>
      <Hero />
      <Eligibility />
      <Departments />
      <CTA />
      <Contact />
    </main>
  );
}
