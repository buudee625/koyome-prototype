import React from 'react';
import { Segment } from 'semantic-ui-react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Calendar({ userEvents }) {
  console.log(userEvents, '<<< userEvents from Cal');
  return (
    <Segment>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={userEvents}
      />
    </Segment>
  );
}
