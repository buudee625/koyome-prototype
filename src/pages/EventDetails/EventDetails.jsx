import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import TwitterLikeButton from 'twitter-like-button';
import './EventDetails.css';
import {
  Container,
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Icon,
  Label,
} from 'semantic-ui-react';
import * as eventAPI from '../../utils/eventAPI';
import * as likesAPI from '../../utils/likesAPI';
import Map from '../../components/Map/Map';

export default function EventDetails({ user, prettifyDate, getAllEvents }) {
  const [oneEvent, setOneEvent] = useState({});
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();

  // ========== Calls ========== //
  const getOneEvent = useCallback(async () => {
    try {
      const res = await eventAPI.getOne(id);
      setOneEvent(res.data);
    } catch (err) {
      console.log(err, '<<< err from getOneEvent()');
    }
  }, [id]);

  useEffect(() => {
    console.log('useEfx: EventDetails()');
    getOneEvent();
  }, [getOneEvent]);

  const startDate = prettifyDate(oneEvent.start);
  const endDate = prettifyDate(oneEvent.end);

  // ========== Event Funcs ========== //
  async function handleEventDelete(eventID) {
    try {
      const res = await eventAPI.deleteEvent(eventID);
      console.log(res, '<--- res from handleEventDelete(): EventDetails');
      nav('/events');
    } catch (err) {
      console.log(err, '<--- err from handleEventDelete(): EventDetails');
    }
    getAllEvents();
  }

  // ========== Like Funcs ========== //
  async function addLike(eventID) {
    // Where is the postId defined in the UI?

    try {
      const response = await likesAPI.create(eventID);
      console.log(response, '<--- addlike() reaponse');
      setClicked(true);
      getOneEvent();
    } catch (err) {
      console.log(err, '<--- err from addLike(): EventDetails');
    }
  }

  async function removeLike(likeId) {
    try {
      const response = await likesAPI.removeLike(likeId);
      console.log(response, '<--- removelike() response');
      setClicked(false);
      getOneEvent();
    } catch (err) {
      console.log(err, '<--- err from removeLike(): EventDetails');
    }
  }

  const likedIndex = oneEvent?.likes?.findIndex(
    (like) => like.username === user.username
  );
  const isLiked = likedIndex > -1 ? true : false;
  const clickHandler =
    likedIndex > -1
      ? () => removeLike(oneEvent.likes[likedIndex]._id)
      : () => addLike(oneEvent._id);

  return (
    <Container>
      <Segment id="event-hero">
        <Image src={oneEvent.poster} alt="poster" id="gaussian-poster" />
      </Segment>
      <Grid
        className=""
        style={{
          width: '100vw',
          marginTop: '10%',
          marginLeft: '2%',
        }}
      >
        <Grid.Column width={6}>
          <Image id="poster" src={oneEvent.poster} alt="poster" />
        </Grid.Column>
        <Grid.Column width={6} style={{ textAlign: 'left' }}>
          <Grid.Row>
            <Segment
              style={{
                padding: '40px',
                borderRadius: '0',
                backgroundColor: '#FFEDF3',
                borderColor: 'transparent',
              }}
            >
              <Header as="h1">{oneEvent.title}</Header>
              <Header as="h5">
                <Icon name="calendar alternate outline" />
                <Header.Content>Start Time</Header.Content>
              </Header>
              <p>{startDate}</p>
              <Header as="h5">
                <Icon name="calendar alternate outline" />
                <Header.Content>End Time</Header.Content>
              </Header>
              <p>{endDate}</p>
              <Header as="h5">
                <Icon name="map marker alternate" />
                <Header.Content>Location</Header.Content>
              </Header>
              <p>{oneEvent?.location}</p>
              {/* <Map event={oneEvent}></Map> */}
            </Segment>
            <Segment style={{ borderRadius: '0', padding: '30px' }}>
              <Header as="h3">Hosted by:</Header>
              <p>
                <Image avatar src={oneEvent?.user?.photoUrl}></Image>
                <Link
                  to={`/${oneEvent?.user?.username}`}
                  style={{ color: 'black' }}
                >
                  {oneEvent?.user?.username}
                </Link>
              </p>
              <Label
                attached="top right"
                style={{ backgroundColor: 'transparent' }}
              >
                <TwitterLikeButton
                  isLiked={isLiked}
                  onClick={clickHandler}
                ></TwitterLikeButton>
                <Label circular color="red">
                  {oneEvent?.likes?.length}
                </Label>
              </Label>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment style={{ padding: '40px', borderRadius: '0' }}>
              <Header as="h3">About this event</Header>
              <Container>
                {oneEvent.description}
                <Grid.Row>
                  {oneEvent?.user?.username === user.username ? (
                    <Button
                      style={{ width: '15rem', marginTop: '20px' }}
                      animated="vertical"
                      onClick={() => handleEventDelete(oneEvent._id)}
                    >
                      <Button.Content visible>
                        <Icon name="delete"></Icon>
                      </Button.Content>
                      <Button.Content hidden>Delete Event</Button.Content>
                    </Button>
                  ) : (
                    ''
                  )}
                </Grid.Row>
              </Container>
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
