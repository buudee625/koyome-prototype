import React from 'react';
import { List, Icon } from 'semantic-ui-react';

export default function EventsList({ event, title, start, end }) {
  return (
    <List animated inverted verticalAlign="middle" key={event._id}>
      <List.Item>
        <Icon name="right triangle" />
        <List.Content>
          <List.Header>{title}</List.Header>
          <List.Description>{start}</List.Description>
          <List.Description>{end}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
}
