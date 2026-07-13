import RecruitmentLanding from "@/components/RecruitmentLanding/RecruitmentLanding";
import RecruitmentEligibility from "@/components/RecruitmentEligibility/RecruitmentEligibility";
import RecruitmentDepartments from "@/components/RecruitmentDepartments/RecruitmentDepartments";

export const metadata = {
  title: "Executive Recruitment | 4C NMIMS",
  description:
    "Join the Marketing Cell of NMIMS MPSTME through Executive Recruitment 2026–27.",
};

export default function ApplyPage() {
  return (
    <>
      <RecruitmentLanding />

      <RecruitmentEligibility />

      <RecruitmentDepartments />
    </>
  );
}
