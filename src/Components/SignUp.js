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
import GenerateCaesarCipher from "./CaesarCipher";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

function validatePassword(password) {
  // Krav: Minst 8 tecken, minst 1 siffra, minst 1 stor bokstav
  //  ^ betyder början av strängen, Regex kommer matcha mönstret från början av strängen.
  //  $ betyder slutan av strängen, Regex kommer matcha mönstret från slutan av strängen.
  //  . betyder alla tecken i strängen, Regex kommer matcha alla tecken i strängen.
  //  * betyder 0 eller flera gånger, Regex kommer matcha 0 eller flera gånger.
  //  + betyder 1 eller flera gånger, Regex kommer matcha 1 eller flera gånger.
  //  Det här kallas för "positiv lookahead."
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { Encrypt, Decrypt } = GenerateCaesarCipher(
    13,
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:,.<>?/".split("")
    // Tar in möjliga tecken genom strängen ovan, och flyttar x antal steg
    // beroende på skiftvärdet, i detta fall 13 steg.
  );

  function handleSubmit(event) {
    event.preventDefault();

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Ifall det finns users sen innan hämtar man dessa, annars skapas ny tom array för lagring.

    let users = {};

    console.log(existingUsers);

    if (validatePassword(password)) {
      users = {
        0: firstname,
        1: lastname,
        2: Encrypt(password),
        3: firstname.toLowerCase() + "." + lastname.toLowerCase(),
        // 3 = Användarnamn = förnamn.efternamn, till lowercase för lättare hantering.
      };
      const encrypted = Encrypt(password);
      const decrypted = Decrypt(encrypted);

      console.log(encrypted);
      console.log(decrypted);

      existingUsers.push(users);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      // Lagrar förnamn, efternamn samt lösenord i users, sedan läggs objektet till i existingUsers.
      // Lagras som JSON i localStorage.

      setFirstname("");
      setLastname("");
      setPassword("");
      // Tömmer input-rutorna.
    } else {
      console.log("error");
    }
    // Kontrollerar lösenordet med hjälp av validatePassword, sparar endast användaren ifall lösenordet uppfyller kraven.
  }

  const haveAcc = () => {
    navigate("/");
  };

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
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Efternamn"
              type="lastnameInput"
              id="lastName"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="signUpPassWord"
              label="Lösenord"
              name="password"
              type="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              id="signUpButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrera konto
            </Button>

            <Link
              id="haveAccount"
              onClick={haveAcc}
              variant="body2"
              sx={{ cursor: "pointer" }}
            >
              {"Har du redan ett konto? Logga in!"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
