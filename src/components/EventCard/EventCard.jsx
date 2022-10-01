import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

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
    <Card key={event._id} raised>
      <Image src={`${event?.poster}`} wrapped ui={false} />
      <Card.Content textAlign="left">
        <Card.Header>
          <Link to={`/events/${event._id}`}>{event.title}</Link>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Image
          size="large"
          avatar
          src={
            event?.user?.photoUrl
              ? event.user.photoUrl
              : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
          }
        />
        <Link to={`/${event?.user?.username}`}>{event?.user?.username}</Link>
        <Card.Description>{event.start}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}></Card.Content>
    </Card>
  );
}
