// Import React
import React from 'react';
// Import Components
import Footer from '../../components/Footer/Footer';
// Import Semantic
import {
  Container,
  Grid,
  Header,
  Image,
  Placeholder,
  Segment,
} from 'semantic-ui-react';

export default function LandingPage() {
  return (
    <>
      <Grid>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: '4em',
            display: 'flex',
            position: 'absolute',
            top: '50%',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          What's happening in the world?
        </Header>
        <Image src="https://i.imgur.com/W1o1J7Q.jpg" fluid />
      </Grid>
      <Container text>
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
                <Placeholder>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/helen.jpg" />
                </Placeholder>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
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
