// React
import React from 'react';
// Semantic
import { Card, Image } from 'semantic-ui-react';

export default function EventCard({ event }) {
  return (
    <Card key="" raised>
      <Card.Content textAlign="left">
        <Card.Header>
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
      <Image src={`${event?.poster}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{event.start}</Card.Description>
        <Card.Description>{event.end}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}></Card.Content>
    </Card>
  );
}
