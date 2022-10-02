import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Datetime from 'react-datetime';
import * as EventAPI from '../../utils/eventAPI';

export default function FormEvCreate({ setModal, getUserEvents }) {
  const [input, setInput] = useState({
    title: '',
    start: '',
    end: '',
    location: '',
    eventUrl: '',
    description: '',
  });
  const [selectedFile, setSelectedFile] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  // ========== Input Handlers ========== //
  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
    // console.log(
    //   e.target.files[0],
    //   '<---e.target.files[0] from handleFileINput: Events_New'
    // );
  }

  //   function printFormData(form) {
  //     console.log(
  //       form.forEach((item) => console.log(item)),
  //       ' <---formData'
  //     );
  //   }

  // call functions
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(input, '<---input handleSubmit(): NewEvent');

    const formData = new FormData();
    // console.log(selectedFile, '<--selectedFile');

    formData.append('photo', selectedFile);
    formData.append('start', start);
    formData.append('end', end);
    for (let key in input) {
      formData.append(key, input[key]);
    }
    try {
      setModal({ type: 'CLOSE_MODAL' });
      const response = await EventAPI.create(formData);
      console.log(response, '<< response from handleSubmit() Events_New');
    } catch (err) {
      console.log(err.message, '<< err from handleSubmit() Events_New');
    }
    getUserEvents();
  }

  function handleStart(moObj) {
    const dateString = moObj.toString();
    setStart(dateString);
  }

  function handleEnd(moObj) {
    const dateString = moObj.toString();
    setEnd(dateString);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="event-start">
        <strong>Event Title</strong>
      </label>
      <Form.Input
        name="title"
        placeholder="What's this event called?"
        onChange={handleInput}
      ></Form.Input>
      <label htmlFor="event-start">
        <strong>Event Start</strong>
      </label>
      <Form.Field>
        <Datetime name="start" onChange={(date) => handleStart(date)} />
      </Form.Field>
      <label htmlFor="event-end">
        <strong>Event End</strong>
      </label>
      <Form.Field>
        <Datetime name="end" onChange={(date) => handleEnd(date)} />
      </Form.Field>
      <label htmlFor="location">
        <strong>Location</strong>
      </label>
      <Form.Input
        name="location"
        placeholder="Event address"
        onChange={handleInput}
      ></Form.Input>
      <label htmlFor="eventUrl">
        <strong>Event URL</strong>
      </label>
      <Form.Input
        name="eventUrl"
        placeholder="Event URL"
        onChange={handleInput}
      ></Form.Input>
      <label htmlFor="event-start">
        <strong>Description</strong>
      </label>
      <Form.TextArea
        name="description"
        placeholder="Something about this event"
        onChange={handleInput}
      ></Form.TextArea>
      <label htmlFor="event-start">
        <strong>Poster</strong>
      </label>
      <Form.Field>
        <Form.Input
          type="file"
          name="poster"
          placeholder="Upload event poster"
          onChange={handleFileInput}
        />
      </Form.Field>
      <Button type="submit" style={{ color: 'white', background: '#f9004d' }}>
        Create
      </Button>
    </Form>
  );
}
