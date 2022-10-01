import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Container } from 'semantic-ui-react';

export default function EventCard({ event }) {
  function prettifyDate(ISOStr) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dateString = new Date(ISOStr);
    return dateString.toISOString().substring(0, 10);
  }
  console.log(prettifyDate(event.start));

  return (
    <Card key={event._id} raised style={{ width: '340px', height: '700px' }}>
      <Container className="container">
        <Image src={`${event?.poster}`} wrapped ui={false} />
        <Container className="overlay">
          <div>
            <Card.Header id="overlay-text">
              <Container className="event-title">{event.title}</Container>
            </Card.Header>
            <Image
              size="large"
              avatar
              src={
                event?.user?.photoUrl
                  ? event.user.photoUrl
                  : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
              }
            />
            <Link to={`/${event?.user?.username}`} className="username">
              {event?.user?.username}
            </Link>

            <Card.Description className="time">
              Starting: {event.start}
            </Card.Description>
            <Link to={`/events/${event._id}`} className="event-title">
              <Button className="more-details">More Details</Button>
            </Link>
          </div>
        </Container>
      </Container>
    </Card>
  );
}
