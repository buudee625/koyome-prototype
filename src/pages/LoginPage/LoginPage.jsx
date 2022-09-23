import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

export default function LoginPage(props) {
  return (
    <>
      <h1>Setup Login Page</h1>
      <ul>
        <li>Read the Login Model, You can change it to fit your needs</li>
        <li>
          Make sure you read the Login Controller, to know how it is setup to
          find the user!
        </li>
      </ul>
    </>
  );
}
