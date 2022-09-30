import React from 'react';
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';

export default function EventsList({ id, title, start, end }) {
  return (
    <List animated inverted verticalAlign="middle">
      <List.Item>
        <Icon name="right triangle" />
        <List.Content>
          <Link to={`/events/${id}`}>
            <List.Header>{title}</List.Header>
          </Link>
          <List.Description>{start}</List.Description>
          <List.Description>{end}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
}
