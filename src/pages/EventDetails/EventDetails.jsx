import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Header,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react';
import * as eventAPI from '../../utils/eventAPI';

export default function EventDetails({ user, prettifyDate, getAllEvents }) {
  const [oneEvent, setOneEvent] = useState({});
  const [eventUser, setEventUser] = useState('');
  const { id } = useParams();
  const nav = useNavigate();

  // ========== Calls ========== //
  const getOneEvent = useCallback(async () => {
    try {
      const res = await eventAPI.getOne(id);
      setOneEvent(res.data);
    } catch (err) {
      console.log(err, '<<< err from getOneEvent()');
    }
  }, [id]);

  useEffect(() => {
    console.log('useEfx from EventDetails()');
    getOneEvent();
  }, [getOneEvent]);

  const startDate = prettifyDate(oneEvent.start);
  const endDate = prettifyDate(oneEvent.end);

  // ========== Handler ========== //
  async function handleEventDelete(eventID) {
    try {
      const res = await eventAPI.deleteEvent(eventID);
      console.log(res, '<< res from handleEventDelete(): EventCard ');
    } catch (err) {
      console.log(err);
    }
    nav('/events');
    getAllEvents();
  }

  return (
    <Container textAlign="center" style={{ marginTop: '5em' }}>
      <Grid style={{ width: '100vw' }}>
        <Grid.Row>
          <Grid.Column width={7}>
            <Header as="h3" inverted>
              {oneEvent.title}
            </Header>
            <Header as="h3" inverted>
              {startDate}
            </Header>
            <Header as="h3" inverted>
              {endDate}
            </Header>
            <Header as="h3" inverted>
              {oneEvent.description}
            </Header>
            <Header as="h3" inverted>
              {`Hosted by: ${oneEvent.user}`}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={7}>
          <Image src={oneEvent.poster} alt="poster" />
        </Grid.Column>
        <Grid.Row>
          <Button
            style={{ width: '15rem' }}
            animated="vertical"
            onClick={() => handleEventDelete(oneEvent._id)}
          >
            <Button.Content visible>
              <Icon name="delete"></Icon>
            </Button.Content>
            <Button.Content hidden>Delete Event</Button.Content>
          </Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
