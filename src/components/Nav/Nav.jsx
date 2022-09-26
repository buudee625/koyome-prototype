import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';

export default function Nav({ loggedUser, handleLogout }) {
  console.log(loggedUser, '<-- loggedUser in header');
  return (
    <Segment clearing vertical>
      <Header as="h2" floated="right">
        <Link to={`/${loggedUser?.username}`}>
          <Image
            src={
              loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
            }
            avatar
            style={{ width: '35px', height: '35px', marginRight: '2rem' }}
          ></Image>
        </Link>
        <Link
          icon="sign out"
          to=""
          onClick={handleLogout}
          style={{ color: 'white' }}
        >
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="right"></Header>
    </Segment>
  );
}
