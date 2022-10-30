import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  Icon,
} from 'semantic-ui-react';

export default function LoginPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this is from the throw block in the userService.login first then function
      setError(err.message);
    }
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: '100vh', width: '100vw' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header
          id="loginheader"
          as="h2"
          textAlign="center"
          className="text-focus-in"
        >
          <Icon name="calendar alternate outline" /> KoyoMe
        </Header>

        <Segment placeholder id="login-container">
          <Grid columns={2} stackable>
            <Grid.Column>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
                <Button content="Login" type="submit" primary />
              </Form>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Button
                content="Sign up"
                icon="signup"
                size="big"
                as="a"
                href="/signup"
              />
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>

        {error ? (
          <Message>
            <Icon name="warning sign"></Icon>
            <ErrorMessage error={error} />
          </Message>
        ) : null}
      </Grid.Column>
    </Grid>
  );
}
