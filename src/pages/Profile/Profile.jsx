import { Grid } from 'semantic-ui-react';
import Calendar from '../../components/Calendar/Calendar';

import UserEventsList from '../../components/UserEventsList/UserEventsList';

export default function Profile() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{ padding: '0 15rem 0 15rem' }}>
          <Calendar />
          <UserEventsList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
