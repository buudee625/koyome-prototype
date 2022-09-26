import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import {
  Container,
  Grid,
  Header,
  Button,
  Icon,
  Image,
  Card,
  Placeholder,
  Segment,
} from 'semantic-ui-react';

export default function HomePage({ loggedUser, handleLogout }) {
  return (
    <>
      <Nav loggedUser={loggedUser} handleLogout={handleLogout} />
      <Image src="https://i.imgur.com/W1o1J7Q.jpg" fluid />
      <Container text>
        <Header
          as="h1"
          content="Imagine-a-Company"
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Segment>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  That is what they all say about us
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  {/* <Image avatar src="/images/avatar/large/nan.jpg" /> */}
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Placeholder>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/helen.jpg" />
                </Placeholder>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                {' '}
                <Placeholder>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/helen.jpg" />
                </Placeholder>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                {' '}
                <Placeholder>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/helen.jpg" />
                </Placeholder>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
      <Footer />
    </>
  );
}
