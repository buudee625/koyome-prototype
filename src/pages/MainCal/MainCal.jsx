import Calendar from '../../components/Calendar/Calendar';

export default function MainCal() {
  return (
    <>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        This is the page user sees first after signing in
      </h1>
      <Calendar />
    </>
  );
}
