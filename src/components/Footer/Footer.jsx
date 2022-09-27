import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';

export default function Footer() {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column color="black" style={{ Width: '100vw' }}>
            <h1>This is a footer!</h1>
            <Button color="teal">Test</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
