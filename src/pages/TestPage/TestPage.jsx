import './TestPage.css';
import { Container, Image, Header, Icon } from 'semantic-ui-react';

export default function testPage() {
  return (
    <Container className="test-container">
      <div className="hero-img">
        <Image
          src="https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          // id="eventall-gaussian"
        />
      </div>
      <div className="details-container">
        <div className="info-poster">a poster</div>
        <div className="info-head">
          <Header className="details-event-title" as="h1">
            Test Super Fun Event
          </Header>
          <Header as="h5">
            <Icon name="calendar alternate outline" />
            <Header.Content>Start Time</Header.Content>
          </Header>
          <p>0000-00-00 00:00am</p>
          <Header as="h5">
            <Icon name="calendar alternate outline" />
            <Header.Content>End Time</Header.Content>
          </Header>
          <p>0000-00-00 00:00am</p>
          <Header as="h5">
            <Icon name="map marker alternate" />
            <Header.Content>Location</Header.Content>
          </Header>
          <p>123 Street, Test City, XX</p>
        </div>
        <div className="info-body">Map and shit</div>
      </div>
    </Container>
  );
}
