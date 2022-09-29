// React
import React, { useEffect, useState } from 'react';
// Semantic
import { Card, Header, Segment } from 'semantic-ui-react';
// Components
import EventCard from '../../components/EventCard/EventCard';
// Functions
import * as eventsAPI from '../../utils/eventAPI';

export default function EventAll() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    try {
      const response = await eventsAPI.getAll();
      console.log(response, '<< data from getEvents(): Events_All');
      setEvents([...response.data]);
      console.log([...response.data]);
    } catch (err) {
      console.log(err.message, '<< err.message from getEvents(): Events_All');
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Card.Group itemsPerRow="3" stackable>
      <Header as="h1" inverted>
        ALL EVENTS
      </Header>
    </Card.Group>
  );
}
