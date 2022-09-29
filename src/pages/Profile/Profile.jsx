import React, { useState, useEffect } from 'react';
import { Grid, Button, Modal, Icon } from 'semantic-ui-react';
import Calendar from '../../components/Calendar/Calendar';
import UserEventsList from '../../components/UserEventsList/UserEventsList';
import FormEvCreate from '../../components/Form_EvCreate/Form_EvCreate';
import * as eventsAPI from '../../utils/eventAPI';

export default function Profile({ user }) {
  const [events, setEvents] = useState([]);

  // ========== Events Call ==========
  async function getAllEvents() {
    try {
      const response = await eventsAPI.getAll();
      console.log(response, '<< data from getEvents(): Events_All');
      setEvents([...response.data]);
    } catch (err) {
      console.log(err.message, '<< err.message from getEvents(): Events_All');
    }
  }

  useEffect(() => {
    getAllEvents();
  }, []);

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
            <Calendar />
            <UserEventsList />
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
          <FormEvCreate user={user} setModal={setModal} />
        </Modal.Content>
      </Modal>
    </>
  );
}
