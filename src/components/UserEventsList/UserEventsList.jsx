// React
import React, { useEffect, useState } from 'react';
// Semantic
import { Card, Header } from 'semantic-ui-react';
// Components
import EventCard from '../EventCard/EventCard';
// Functions
import * as eventsAPI from '../../utils/eventAPI';
import userService from '../../utils/userService';

export default function UserEventsList({ loggedUser }) {
  const [userEvents, setUserEvents] = useState([]);
  const [user, setUser] = useState(userService.getUser());

  //   setUser(userService.getUser()); // getting the user from localstorage decoding the jwt

  async function getEvents() {
    try {
      const response = await eventsAPI.getAll();

      console.log(response.data, '<< userEvents');
      const userEvents = response.data.filter(
        (event) => event.user.username === user.username
      );
      console.log(userEvents, '<< filtered userEvents');
      setUserEvents([...userEvents]);
    } catch (err) {
      console.log(
        err.message,
        '<< err.message from getEvents(): UserEventsList'
      );
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Card.Group itemsPerRow="3" stackable>
      <Header as="h1" inverted>
        ALL EVENTS
      </Header>
      {userEvents.map((event) => {
        return <EventCard event={event} />;
      })}
    </Card.Group>
  );
}
