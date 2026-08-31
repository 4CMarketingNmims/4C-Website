import Team from '@/components/Team';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Team — 4C',
  description: "Meet the students behind 4C's leadership and sub-teams.",
};

export default function TeamPage() {
  return (
    <>
      <Nav />
      <Team />
    </>
  );
}
