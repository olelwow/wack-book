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
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Setters för de olika fälten, samt navigate som styr vilken sida man hamnar på.

  let wrongPass = false;
  // Variabel som används när man skriver rätt användarnamn men fel lösenord.

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateSignIn(username.toLowerCase(), password)) {
      navigate("/MainPage");
      // Navigerar till MainPage ifall man anger korrekt info

      console.log("Inloggad!");
    } else {
      if (wrongPass === true) {
        alert("Fel lösenord!");
        setUsername(username);
        // Sparar användarnamnet så man slipper skriva det igen.
      } else {
        alert("Användarnamnet existerar inte.");
        setUsername("");
        setPassword("");
      }
    }
  };

  const validateSignIn = (username, password) => {
    try {
      let i = 0;
      let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      for (i; i < existingUsers.length; i++) {
        if (
          username === existingUsers[i][3] &&
          password === existingUsers[i][2]
        ) {
          wrongPass = false;
          // Söker efter matching av både username och password på deras angivna platser i objektet.
          break;
          // hoppar ur loopen när man hittat en matchning.
        } else if (
          username === existingUsers[i][3] &&
          password !== existingUsers[i][2]
        ) {
          wrongPass = true;
          // Sätts till true när man anger rätt username men fel password.
        }
      }
      return !!(
        username === existingUsers[i][3] && password === existingUsers[i][2]
      );
    } catch (error) {
      console.error("Error during sign-in validation:", error);
      setUsername("");
      setPassword("");
      return false;
      // Returnerar false vid fel och fångar upp felet med catch så att sidan inte kraschar.
    }
  };
  // Returnerar en bool, true ifall allt matchar false i övriga fall.

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container id="signInForm" component="main" maxWidth="xs">
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
            Logga in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Användarnamn"
              name="email"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Lösenord"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              id="logInButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logga in
            </Button>

            <Link id="noAccount" href="SignUpPage" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
