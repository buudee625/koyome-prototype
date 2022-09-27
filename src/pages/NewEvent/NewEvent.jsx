// Import React
import React, { useState } from 'react';
// Import Components
import PageHeader from '../../components/PageHeader/PageHeader';
// Import Semantic
import { Header } from 'semantic-ui-react';

export default function NewEvent({ loggedUser, handleLogout }) {
  return (
    <>
      <PageHeader loggedUser={loggedUser} handleLogout={handleLogout} />
      <Header as="h1">This is the New Event page</Header>
    </>
  );
}
