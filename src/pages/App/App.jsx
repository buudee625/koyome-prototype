// React
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Stylesheet
import './App.css';
// Components
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import LandingPage from '../LandingPage/LandingPage';
import Profile from '../Profile/Profile';
import EventAll from '../../components/EventsList/EventsList';
import PageHeader from '../../components/PageHeader/PageHeader';

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
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
            path={`/${user?.username}`}
            element={<Profile loggedUser={user} />}
          />
          <Route path="/events" element={<EventAll />}></Route>

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
