import Events from '@/components/Events';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Events — 4C',
  description:
    "The events 4C has run, is running, and is gearing up for — including our flagship, Contest.",
};

export default function EventsPage() {
  return (
    <>
      <Nav />
      <Events />
    </>
  );
}
