import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
let userCount = 0;

if (userCount > 0) {
  userCount += userCount;
} else {
  userCount = 0;
}

let users = {};
export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!firstname) {
      newErrors.email = "Firstname is required.";
    }

    if (!lastname) {
      newErrors.password = "Lastname is required.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    users = { 0: firstname, 1: lastname, 2: password };
    existingUsers.push(users);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log(existingUsers);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container id="signUpForm" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "#4c5c49" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrera nytt konto
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="Förnamn"
              name="firstname"
              autoFocus
              onChange={(e) => setFirstname(e.target.value)}
            />
            {errors.firstname && (
              <div className="error">{errors.firstname}</div>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Efternamn"
              type="lastnameInput"
              id="lastName"
              onChange={(e) => setLastname(e.target.value)}
            />
            {errors.lastname && <div className="error">{errors.lastname}</div>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="signUpPassWord"
              label="Lösenord"
              name="password"
              type="passwordInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}

            <Button
              id="signUpButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrera konto
            </Button>

            <Link id="haveAccount" href="/" variant="body2">
              {"Har du redan ett konto? Logga in!"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
