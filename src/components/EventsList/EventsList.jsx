import React from 'react';
import { Segment, List } from 'semantic-ui-react';

export default function EventsList({ title, start, end }) {
  return (
    <List animated inverted verticalAlign="middle">
      <List.Item>
        <List.Content>
          <List.Header>{title}</List.Header>
          <List.Description>{start}</List.Description>
          <List.Description>{end}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
}
