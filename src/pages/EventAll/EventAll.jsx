import React, { useEffect } from 'react';
import './EventAll.css';
import EventCard from '../../components/EventCard/EventCard';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import {
  Grid,
  Card,
  Image,
  Segment,
  Container,
  Button,
} from 'semantic-ui-react';

export default function EventAll({
  getAllEvents,
  user,
  events,
  prettifyDate,
  loading,
}) {
  useEffect(() => {
    console.log('useEfx from EventAll');
    getAllEvents();
  }, [getAllEvents]);

  return (
    <>
      <Segment id="eventall-hero">
        <Container id="eventall-textcontainer">
          <h1 id="eventall-h1">adventure awaits.</h1>
          <Button id="hero-button" as="a" href={`/${user.username}`}>
            Create an event
          </Button>
        </Container>
        <Image
          src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          id="eventall-gaussian"
        />
      </Segment>
      <Grid centered columns={3}>
        {loading ? (
          <Grid centered columns={1}>
            <Loading />
          </Grid>
        ) : (
          <Card.Group
            itemsPerRow={4}
            stackable
            style={{ justifyContent: 'center' }}
          >
            {events.map((event) => (
              <EventCard event={event} prettifyDate={prettifyDate} />
            ))}
          </Card.Group>
        )}
      </Grid>
      <Footer />
    </>
  );
}
