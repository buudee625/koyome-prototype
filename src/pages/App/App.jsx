// React
import React, { useState, useEffect, useCallback } from 'react';
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
// Stylesheet
import './App.css';
// Components
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import Profile from '../Profile/Profile';
import EventAll from '../../pages/EventAll/EventAll';
import EventDetails from '../EventDetails/EventDetails';
import PageHeader from '../../components/PageHeader/PageHeader';
// APIs
import userService from '../../utils/userService';
import * as eventsAPI from '../../utils/eventAPI';

function App() {
  // ========== States ==========
  const [user, setUser] = useState(userService.getUser());
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // ========== Call Function ==========
  const getAllEvents = useCallback(async () => {
    try {
      // Obtain all events from backend
      const response = await eventsAPI.getAll();
      setEvents([...response.data]);
      // Filter all events to only the logged in user
    } catch (err) {
      console.log(err.message, '<< err.message in getEvents(): App()');
    }
  }, [setEvents]);

  // console.log(events, '<<< events in App()');
  // console.log(userEvents, '<<< userEvents in App()');

  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

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
        <PageHeader loggedUser={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
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
            element={<Profile user={user} getAllEvents={getAllEvents} />}
          />
          <Route path="/events" element={<EventAll events={events} />}></Route>
          <Route
            path="/events/:id"
            element={
              <EventDetails
                user={user}
                getAllEvents={getAllEvents}
                events={events}
                setEvents={setEvents}
              />
            }
          ></Route>

          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
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
