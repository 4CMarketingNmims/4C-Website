import Recruitment from "@/components/Recruitment/Recruitment";

export const metadata = {
  title: "Executive Recruitment | 4C NMIMS",
  description:
    "Join The Marketing Cell of NMIMS MPSTME through Executive Recruitment 2026–27.",
};

export default function ApplyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050608",
        overflow: "hidden",
      }}
    >
      <Recruitment />
    </main>
  );
}