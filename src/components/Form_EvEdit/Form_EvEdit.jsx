import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import * as EventAPI from '../../utils/eventAPI';
import './Form_EvEdit.css';
import { Form, Button, Checkbox } from 'semantic-ui-react';

export default function FormEvEdit({ eventToEdit }) {
  const [input, setInput] = useState({
    title: '',
    start: '',
    end: '',
    location: '',
    eventUrl: '',
    description: '',
  });
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  // ========== setState ========== //
  useEffect(() => {
    console.log('useEfx: FormEvEdit');
    if (eventToEdit) {
      setInput({
        title: eventToEdit.title,
        start: eventToEdit.start,
        end: eventToEdit.end,
        location: eventToEdit.location,
        eventUrl: eventToEdit.eventUrl,
        description: eventToEdit.description,
      });
    }
  }, [eventToEdit]);
  // ========== Input Handlers ========== //
  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // call functions
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(input, '<< input: handleSubmit()');
    try {
      await EventAPI.editEvent(input, eventToEdit._id);
    } catch (err) {
      console.log(err.message, '<< err.message: handleSubmit()');
    }
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
    <div>
      <Form onSubmit={handleSubmit}>
        {/* ========== Event Form ========== */}
        <label htmlFor="event-start">
          <strong>Event Title</strong>
        </label>
        <Form.Input
          name="title"
          value={input.title}
          onChange={handleInput}
        ></Form.Input>
        <label htmlFor="event-start">
          <strong>Event Start</strong>
        </label>
        <Form.Field>
          <Datetime
            name="start"
            value={Date(input.start)}
            onChange={(date) => handleStart(date)}
          />
        </Form.Field>
        <label htmlFor="event-end">
          <strong>Event End</strong>
        </label>
        <Form.Field>
          <Datetime
            name="end"
            value={Date(input.end)}
            onChange={(date) => handleEnd(date)}
          />
        </Form.Field>
        <label htmlFor="location">
          <strong>Location</strong>
        </label>
        <Form.Input
          name="location"
          value={input.location}
          onChange={handleInput}
        ></Form.Input>
        <label htmlFor="eventUrl">
          <strong>Event URL</strong>
        </label>
        <Form.Input
          name="eventUrl"
          value={input.eventUrl}
          onChange={handleInput}
        ></Form.Input>
        <label htmlFor="event-start">
          <strong>Description</strong>
        </label>
        <Form.TextArea
          name="description"
          value={input.description}
          onChange={handleInput}
        ></Form.TextArea>
        {/* ========== Buttons ========== */}
        <Button className="ev-edit-btn-edit" type="submit">
          Save
        </Button>
        <Button
          basic
          className="ev-edit-btn-cancel"
          as="a"
          href={`/events/${eventToEdit._id}`}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}
