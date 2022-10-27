import { Box, TextField } from "@mui/material";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/fbmethod";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let sign = () => {
    navigate("/login");
  };
  let signUp = () => {
    signUpUser({
      email,
      password,
    })
      .then((success) => {
        // console.log(success);
        navigate("/login");
        sign();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Box className="header">
        <h1>Todo App</h1>
      </Box>
      <h1>Signup</h1>
      <Box>
        <Box>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
        </Box>
      </Box>
      <button onClick={signUp}>Sign Up</button>
      <p>
        Already have an account?{" "}
        <span>
          <a className="navigate" onClick={sign}>
            LogIn
          </a>
        </span>
      </p>
    </>
  );
}
