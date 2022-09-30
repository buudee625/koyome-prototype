import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import { Grid, Card } from 'semantic-ui-react';

export default function EventAll({ events, getAllEvents }) {
  return (
    <Grid centered>
      <h1 style={{ color: 'white' }}>This page shows all the events</h1>
      <Card.Group itemsPerRow={3} stackable>
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </Card.Group>
    </Grid>
  );
}