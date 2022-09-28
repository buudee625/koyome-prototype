// React
import React, { useEffect, useState } from 'react';
// Semantic
import { Header } from 'semantic-ui-react';
// Functions
import * as eventsAPI from '../../utils/eventAPI';

export default function EventAll() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    try {
      const response = await eventsAPI.getAll();
      console.log(response, '<< data from getEvents(): Events_All');
      setEvents([...response.data]);
    } catch (err) {
      console.log(err.message, '<< err.message from getEvents(): Events_All');
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Header as="h1" inverted>
        SEE ALL EVENTS HERE
      </Header>
    </>
  );
}
