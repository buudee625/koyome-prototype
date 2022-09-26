import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';

export default function Nav({ loggedUser, handleLogout }) {
  console.log(loggedUser, '<-- loggedUser in header');
  return (
    <Segment clearing>
      <Header as="h2" floated="right">
        {loggedUser ? 'yes' : 'no'}
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>

        <Link icon="sign out" to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to={`/${loggedUser?.username}`}>
          <Image
            src={
              loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
            }
            avatar
          ></Image>
        </Link>
      </Header>
    </Segment>
  );
}
