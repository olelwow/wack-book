
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
import React, { useState } from "react";

const defaultTheme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      ["firstName"]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Now you can use formData to save or send the data as needed
    console.log(formData);
    // You can also perform additional actions here, such as sending the data to a server
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     FirstName: data.get("firstName"),
  //     LastName: data.get("lastName"),
  //     Password: data.get("signUpPassWord"),
  //   });
  //   console.log("Kollar vad som kommer ut i form" + data[1],);
  // }

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
              id="firstName"
              label="Förnamn"
              name="förnamn"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Efternamn"
              type="lastname"
              id="lastName"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="signUpPassWord"
              label="Lösenord"
              name="password"
            />

            <Button
              id="signUpButton"
              type="submit"
              onClick={handleChange}
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
