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
import GenerateCaesarCipher from "./CaesarCipher";
import { useTranslation } from "react-i18next";

const defaultTheme = createTheme();

export default function SignIn({
  setLoggedInUser,
  loggedInUser,
  isAuthenticated,
  setIsAuthenticated,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPass, setWrongPass] = useState(false);
  const navigate = useNavigate();
  // Setters för de olika fälten, samt navigate som styr vilken sida man hamnar på.

  // Variabel som används när man skriver rätt användarnamn men fel lösenord.

  const { t, i18n } = useTranslation();

  // Översättning

  const ValidateSignIn = (username, password) => {
    const { Encrypt } = GenerateCaesarCipher(
      13,
      "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:,.<>?/".split("")
      // Tar in möjliga tecken genom strängen ovan, och flyttar x antal steg
      // beroende på skiftvärdet, i detta fall 13 steg.
    );

    try {
      const encryptedPassword = Encrypt(password);
      // Krypterar lösenordet så att man ska kunna jämföra med det redan krypterade lösenordet
      // som finns sparat i objektet som vi hämtar från localStorage.
      let i = 0;
      let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      console.log(existingUsers);

      for (i; i < existingUsers.length; i++) {
        if (
          username.toLowerCase() === existingUsers[i][3] &&
          encryptedPassword === existingUsers[i][2]
        ) {
          console.log(existingUsers[i][3]);
          setWrongPass(false);
          // Söker efter matching av både username och password på deras angivna platser i objektet

          break;
          // hoppar ur loopen när man hittat en matchning.
        } else if (
          username === existingUsers[i][3] &&
          encryptedPassword !== existingUsers[i][2]
        ) {
          console.log(existingUsers[i][3]);
          setWrongPass(true);

          // Sätts till true när man anger rätt username men fel password.
        }
      }
      return !!(
        username === existingUsers[i][3] &&
        encryptedPassword === existingUsers[i][2]
      );
    } catch (error) {
      console.error("Error during sign-in validation:", error);
      return false;
      // Returnerar false vid fel och fångar upp felet med catch så att sidan inte kraschar.
    }
  };
  // Returnerar en bool, true ifall både lösen och username matchar, false i övriga fall.

  const handleSubmit = (event) => {
    event.preventDefault();

    if (ValidateSignIn(username.toLowerCase(), password)) {
      navigate("/MainPage");
      setIsAuthenticated(true);
      // Navigerar till MainPage och sätter authenticated till true
      // ifall man anger korrekt info

      setLoggedInUser((prevloggedInUser) => {
        console.log(username.toLowerCase());
        console.log("Inloggad!");
        return username.toLowerCase();
      });
      // Sätter loggedInUser till användarnamnet man loggade in med.
    } else {
      if (wrongPass === true) {
        alert("Fel lösenord!");
        setUsername(username);
        // Sparar användarnamnet så man slipper skriva det igen, ifall username finns
        // men man har angett fel lösenord.
      } else {
        alert("Användarnamnet existerar inte.");
        setUsername("");
        setPassword("");
      }
    }
  };

  const noAcc = () => {
    navigate("SignUpPage");
  };
  // Navigerar till signUpPage ifall man klickar på länken.

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
            {t("Login.0")}
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
              label={t("Login.1")}
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
              label={t("Login.2")}
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
              {t("Login.0")}
            </Button>

            <Link
              id="noAccount"
              onClick={noAcc}
              variant="body2"
              sx={{ cursor: "pointer" }}
            >
              {t("Login.3")}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
