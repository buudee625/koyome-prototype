import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';
import * as eventAPI from '../../utils/eventAPI';

export default function EventDetails() {
  const [oneEvent, setOneEvent] = useState({});
  const { id } = useParams();

  async function getOneEvent() {
    try {
      const res = await eventAPI.getOne(id);

      setOneEvent(res.data);
    } catch (err) {
      console.log(err, '<<< err from getOneEvent()');
    }
  }

  useEffect(() => {
    console.log('useEfx from EventDetails()');
    getOneEvent();
  }, []);

  return (
    <>
      <Header inverted as="h1">
        EVENT DETAILS
      </Header>
      <Header as="h1" inverted>
        {oneEvent.title}
      </Header>
      <Header as="h3" inverted>
        {oneEvent.start}
      </Header>
      <Header as="h3" inverted>
        {oneEvent.description}
      </Header>
      <Image src={oneEvent.poster} alt="poster" />
    </>
  );
}
