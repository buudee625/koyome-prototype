import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default function EventCard({ event, getAllEvents }) {
  return (
    <Card key={event._id} raised>
      <Image src={`${event?.poster}`} wrapped ui={false} />
      <Card.Content textAlign="left">
        <Card.Header>
          <Link to={`/events/${event._id}`}>{event.title}</Link>
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
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description></Card.Description>
        <Card.Description>{event.start}</Card.Description>
        <Card.Description>{event.end}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}></Card.Content>
    </Card>
  );
}
