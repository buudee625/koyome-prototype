import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Segment, Grid, Button, Modal, Icon } from 'semantic-ui-react';
import Calendar from '../../components/Calendar/Calendar';
import EventsList from '../../components/EventsList/EventsList';
import FormEvCreate from '../../components/Form_EvCreate/Form_EvCreate';
import * as eventsAPI from '../../utils/eventAPI';

export default function Profile({ user, getAllEvents }) {
  const [userEvents, setUserEvents] = useState([]);
  const { username } = useParams();

  // ========== Calls ==========
  const getUserEvents = useCallback(async () => {
    try {
      const response = await eventsAPI.getAll();
      const filteredEvents = response.data.filter(
        (event) => event.user?.username === username
      );
      setUserEvents([...filteredEvents]);
    } catch (err) {
      console.log(err.message, '<< err.message < getUserEvents < Profile');
    }
  }, [username]);
  console.log(userEvents, '<< userEvents < getUserEvents < Profile');
  useEffect(() => {
    console.log('useEfx in Profile()');
    getUserEvents();
  }, [getUserEvents]);

  // ========== Modal ==========

  function modalReducer(state, action) {
    switch (action.type) {
      case 'OPEN_MODAL':
        return { open: true, dimmer: action.dimmer };
      case 'CLOSE_MODAL':
        return { open: false };
      default:
        throw new Error();
    }
  }

  const [modal, setModal] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = modal;

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column style={{ padding: '0 15rem 0 15rem' }}>
            <Button
              animated="vertical"
              onClick={() =>
                setModal({ type: 'OPEN_MODAL', dimmer: 'blurring' })
              }
              style={{ width: '10rem' }}
            >
              <Button.Content hidden>Add New Event</Button.Content>
              <Button.Content visible>
                <Icon name="calendar plus outline" />
              </Button.Content>
            </Button>
            <Calendar userEvents={userEvents} />
            <Segment inverted>
              {userEvents.map((event) => (
                <EventsList
                  key={event._id}
                  id={event._id}
                  title={event.title}
                  start={event.start}
                  end={event.end}
                />
              ))}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Modal
        closeIcon
        dimmer={dimmer}
        open={open}
        onClose={() => setModal({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Create New Event</Modal.Header>
        <Modal.Content>
          <FormEvCreate
            user={user}
            setModal={setModal}
            getAllEvents={getAllEvents}
          />
        </Modal.Content>
      </Modal>
    </>
  );
}
