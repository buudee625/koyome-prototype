import React from 'react';
import './EventAll.css';
import EventCard from '../../components/EventCard/EventCard';
import { Grid, Card } from 'semantic-ui-react';

export default function EventAll({ events, prettifyDate }) {
  return (
    <Grid centered>
      <h1 style={{ color: 'white' }}>This page shows all the events</h1>
      <Card.Group itemsPerRow={4} stackable>
        {events.map((event) => (
          <EventCard event={event} prettifyDate={prettifyDate} />
        ))}
      </Card.Group>
    </Grid>
  );
}
