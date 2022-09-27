// Import: React
// Import: Semantics
import { Segment, Grid } from 'semantic-ui-react';
// Import: Components
import Calendar from '../../components/Calendar/Calendar';
import PageHeader from '../../components/PageHeader/PageHeader';
// Import: Packages
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function UserMain({ loggedUser }) {
  return (
    <>
      <PageHeader loggedUser={loggedUser} />
      <Grid>
        <Grid.Row>
          <Grid.Column style={{ padding: '0 15rem 0 15rem' }}>
            <Calendar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
