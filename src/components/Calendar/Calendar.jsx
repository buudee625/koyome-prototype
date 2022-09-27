// Import: React
import React from 'react';
// Import: Semantics
import { Segment } from 'semantic-ui-react';
// Import: Components
// Import: Packages
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Calendar() {
  return (
    <Segment>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </Segment>
  );
}
