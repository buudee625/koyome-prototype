import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Header,
  Segment,
  Image,
  Dropdown,
  Grid,
} from 'semantic-ui-react';

export default function PageHeader({ loggedUser, handleLogout }) {
  console.log(loggedUser, '<-- loggedUser in header');
  return (
    <Menu inverted>
      <Menu.Item>
        <Header>
          <Link to="/">KoyoMe</Link>
        </Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to={`/${loggedUser?.username}`} style={{ color: 'black' }}>
            <Image
              src={
                loggedUser?.photoUrl
                  ? loggedUser?.photoUrl
                  : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
              }
              avatar
            ></Image>
          </Link>
        </Menu.Item>
        <Dropdown item icon="bars">
          <Dropdown.Menu>
            <Dropdown.Item text="New Event" />
            <Dropdown.Item text="Open..." description="ctrl + o" />
            <Dropdown.Divider />
            <Dropdown.Item text="Preferences" icon="setting" />
            <Dropdown.Item
              text="Sign Out"
              onClick={handleLogout}
              icon="sign out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
