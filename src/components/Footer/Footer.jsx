import React from 'react';
import './Footer.css';
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Input,
  Icon,
} from 'semantic-ui-react';

export default function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">About KoyoMe</List.Item>
              <List.Item as="a">Careers</List.Item>
              <List.Item as="a">Marketing</List.Item>
              <List.Item as="a">Terms of Service</List.Item>
              <List.Item as="a">Privacy Policy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Discover" />
            <List link inverted>
              <List.Item as="a">Browse Calendars</List.Item>
              <List.Item as="a">Browse Events</List.Item>
              <List.Item as="a">Featured Events</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Support" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">FAQ</List.Item>
              <List.Item as="a">Business Support</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header
              inverted
              as="h4"
              style={{
                color: '#f9004d',
                fontFamily: 'Pacifico',
                fontSize: '20px',
                letterSpacing: '.05rem',
              }}
            >
              KoyoMe
            </Header>

            <Input
              className="footer-form"
              icon="mail"
              size="small"
              placeholder="Sign up for the lastest update!"
            ></Input>

            <div class="social-row">
              <Icon name="facebook f" size="large" circular />
              <Icon name="instagram" size="large" circular />
              <Icon name="twitter" size="large" circular />
              <Icon name="youtube" size="large" circular />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}
