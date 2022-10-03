import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';
import { Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './SideNav.css';

export default function SideNav({ userEvents, profileUser }) {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <Container id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {menuCollapse ? (
                  <Icon name="calendar alternate outline" />
                ) : (
                  `${profileUser.username}'s events`
                )}
              </p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <Icon name="angle right" />
              ) : (
                <Icon name="angle left" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              {userEvents.map((event) => (
                <MenuItem>
                  {' '}
                  <Link to={`/events/${event._id}`} id="sidenav-event-item">
                    {event.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </Container>
    </>
  );
}
