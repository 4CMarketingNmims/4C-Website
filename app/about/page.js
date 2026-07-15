import AboutTimeline from '@/components/AboutTimeline';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'About',
  description:
    'Our Journey: From humble beginnings to becoming a leading marketing collective. Here\'s how 4C has evolved over the years.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutTimeline />
    </>
  );
}