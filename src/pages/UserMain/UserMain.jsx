// Import: React
// Import: Semantic
import { Segment, Grid, Button } from 'semantic-ui-react';
// Import: Components
import Calendar from '../../components/Calendar/Calendar';
import PageHeader from '../../components/PageHeader/PageHeader';
// Import: Dependencies
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function UserMain({ loggedUser, handleLogout }) {
  return (
    <>
      <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
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
