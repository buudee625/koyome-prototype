import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Container, Header } from 'semantic-ui-react';

export default function EventCard({ event, prettifyDate }) {
  const startDate = prettifyDate(event.start);

  return (
    <Card
      key={event._id}
      raised
      style={{ width: '340px', height: 'fit-content' }}
    >
      <Container id="container">
        <Image id="card-poster" src={`${event?.poster}`} wrapped ui={false} />
        <Container className="overlay">
          <div>
            <Card.Header id="overlay-text">
              <Container className="event-title">{event.title}</Container>
            </Card.Header>

            <Link to={`/${event?.user?.username}`} className="username">
              <Header as="h4" inverted>
                <Image
                  size="large"
                  avatar
                  src={
                    event?.user?.photoUrl
                      ? event.user.photoUrl
                      : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
                  }
                />
                {event?.user?.username}
              </Header>
            </Link>

            <Card.Description className="time">{startDate}</Card.Description>
            <Button
              className="more-details"
              as="a"
              href={`/events/${event._id}`}
            >
              More Details
            </Button>
          </div>
        </Container>
      </Container>
    </Card>
  );
}
