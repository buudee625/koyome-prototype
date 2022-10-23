import './TestPage.css';
import { Container, Image } from 'semantic-ui-react';

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
        <div className="poster">a poster</div>
        <div className="info-head">Event Title</div>
        <div className="info-body">Map and shit</div>
      </div>
    </Container>
  );
}
