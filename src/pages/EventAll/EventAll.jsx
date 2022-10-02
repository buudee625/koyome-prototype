import React from 'react';
import './EventAll.css';
import EventCard from '../../components/EventCard/EventCard';
import Loading from '../../components/Loading/Loading';
import { Grid, Card } from 'semantic-ui-react';

export default function EventAll({ events, prettifyDate, loading }) {
  return (
    <Grid centered>
      <h1>This page shows all the events</h1>
      {loading ? (
        <Loading />
      ) : (
        <Card.Group itemsPerRow={4}>
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              prettifyDate={prettifyDate}
            />
          ))}
        </Card.Group>
      )}
    </Grid>
  );
}
