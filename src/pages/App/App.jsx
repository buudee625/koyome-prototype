// React
import React, { useState, useEffect, useCallback } from 'react';
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
// Stylesheet
import './App.css';
// Components
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Profile from '../Profile/Profile';
import EventAll from '../EventAll/EventAll';
import EventDetails from '../EventDetails/EventDetails';
import TestPage from '../TestPage/TestPage';
import EventEdit from '../EventEdit/EventEdit';
// APIs
import userService from '../../utils/userService';
import * as eventsAPI from '../../utils/eventAPI';

function App() {
  // ========== States ========== //
  const [user, setUser] = useState(userService.getUser());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ========== Call Functions ========== //
  const getAllEvents = useCallback(async () => {
    try {
      setLoading(true);
      // Obtain all events from backend
      const response = await eventsAPI.getAll();
      // Spread the resposne in setEvent state
      setEvents([...response.data]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, '<< err.message in getEvents(): App()');
    }
  }, [setEvents]);

  // console.log(events, '<<< events in App()');
  // console.log(userEvents, '<<< userEvents in App()');

  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  // ========== Utility ========== //
  function prettifyDate(ISOStr, option) {
    const dateString = new Date(ISOStr);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    if (option === 'date') {
      return dateString.toLocaleDateString(undefined, options);
    } else if (option === 'time') {
      return dateString.toLocaleTimeString();
    } else {
      return dateString.toLocaleString();
    }
  }

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
    navigate('/login');
  }

  if (user) {
    return (
      <>
        <NavBar loggedUser={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/events/:id/edit" element={<EventEdit />} />
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/:username"
            element={
              <Profile
                user={user}
                getAllEvents={getAllEvents}
                setLoading={setLoading}
                loading={loading}
              />
            }
          />
          <Route
            path="/events"
            element={
              <EventAll
                user={user}
                events={events}
                prettifyDate={prettifyDate}
                loading={loading}
                getAllEvents={getAllEvents}
              />
            }
          ></Route>
          <Route
            path="/events/:id"
            element={
              <EventDetails
                user={user}
                getAllEvents={getAllEvents}
                prettifyDate={prettifyDate}
              />
            }
          ></Route>
          <Route path="/*" element={<Navigate to="/events" />} />
        </Routes>
      </>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
