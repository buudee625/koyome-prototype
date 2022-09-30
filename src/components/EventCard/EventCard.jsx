import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import * as eventAPI from '../../utils/eventAPI';

export default function EventCard({ event, getAllEvents }) {
  async function handleEventDelete(eventID) {
    try {
      const res = await eventAPI.deleteEvent(eventID);
      console.log(res, '<< res from handleEventDelete(): EventCard ');
    } catch (err) {
      console.log(err);
    }
    getAllEvents();
  }

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

      <Button animated="vertical" onClick={() => handleEventDelete(event._id)}>
        <Button.Content visible>
          <Icon name="delete"></Icon>
        </Button.Content>
        <Button.Content hidden>Delete Event</Button.Content>
      </Button>
    </Card>
  );
}
