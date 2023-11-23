import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Avatar from "@mui/material/Avatar";

const FakeAddedPosts = () => {
  return (
    <Box
      sx={{
        left: "1em",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1em',
        WebkitFlexGrow: '1',
      }}
    >
      <ul
        sx={{
          display: 'flex',
          padding: 0,
        }}
      >
        <Box sx={{
          bgcolor: "#B6DCAC",
          display: 'flex',
          alignItems: 'space-between',
          padding: "0.5em",
          marginTop: "0.5em",
          minHeight: "12vh",
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            wordBreak: 'break-word',
            paddingLeft: "1.5em",
          }}>
            <h4>Olle</h4>
            <h4>Ristenstrand</h4>
            <Stack sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingRight: "2em",
            }}>
              <Avatar alt="Profile Picture">OL</Avatar>
            </Stack>
          </Box>
          <Box sx={{
            bgcolor: "#e4f0f6",
            width: "51.5vh",
            minHeight: "6vh",
            listStyleType: "none",
            wordBreak: 'break-word',
            paddingLeft: "0.5em",
          }}>
            {"Idag blåser det massor"}
          </Box>
        </Box>
      </ul>
    </Box>
  );
};

export default FakeAddedPosts;