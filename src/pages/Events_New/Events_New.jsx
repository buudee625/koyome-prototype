// React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Semantic
import { Form, Button, Grid } from 'semantic-ui-react';
// Dependencies
import Datetime from 'react-datetime';
// Functions
import * as EventAPI from '../../utils/eventAPI';

export default function NewEvent(props) {
  const [input, setInput] = useState({
    title: '',
    start: '',
    end: '',
    eventUrl: '',
    description: '',
  });
  const [selectedFile, setSelectedFile] = useState('');
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // input detection functions
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

  // call functions
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(input, '<---input handleSubmit(): NewEvent');

    const formData = new FormData();
    // console.log(selectedFile, '<--selectedFile');

    for (let key in input) {
      formData.append(key, input[key]);
    }
    formData.append('photo', selectedFile);
    console.log(
      formData.forEach((item) => console.log(item)),
      ' <---formData'
    );
    try {
      const response = await EventAPI.create(formData);
      console.log(response, '<< response from handleSubmit() Events_New');
    } catch (err) {
      console.log(err.message, '<< err from handleSubmit() Events_New');
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: '100vh', width: '100vw' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form inverted onSubmit={handleSubmit}>
            <Form.Input
              name="title"
              label="Event title"
              placeholder="What's this event called?"
              onChange={handleInput}
            ></Form.Input>

            <Form.Input
              name="eventUrl"
              label="Event URL"
              placeholder="Event URL"
              onChange={handleInput}
            ></Form.Input>
            <Form.TextArea
              name="description"
              label="Description"
              placeholder="Something about this event"
              onChange={handleInput}
            ></Form.TextArea>
            <Form.Field>
              <Form.Input
                type="file"
                name="poster"
                label="Poster"
                placeholder="Upload event poster"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
