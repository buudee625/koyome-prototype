import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Image, Dropdown } from 'semantic-ui-react';
import './NavBar.css';

export default function NavBar({ loggedUser, handleLogout }) {
  // console.log(loggedUser, '<-- loggedUser in header');
  return (
    <Menu borderless className="nav-bar">
      <Menu.Item>
        <Header>
          <Link
            to="/"
            id="logo"
            style={{
              color: '#f9004d',
              fontFamily: 'Pacifico',
              fontSize: '20px',
              letterSpacing: '.05rem',
            }}
          >
            KoyoMe
          </Link>
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
            <Dropdown.Item as="a" href="/events">
              All Events
            </Dropdown.Item>
            <Dropdown.Item text="Followed Calendars" />
            <Dropdown.Item text="Liked Events" />
            <Dropdown.Item text="Report A Problem" />
            <Dropdown.Divider />
            <Dropdown.Item text="Profile Settings" icon="setting" />
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
