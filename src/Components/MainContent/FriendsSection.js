import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export default function FriendsStack() {
  return (
    <Box id="friendsContainer" sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Item
        id="friendsListBoxOne"
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack id="JÖ" spacing={3} direction="row" alignItems="center">
          <div className="onlineStatus"></div>
          <Stack className="AvatarBox">
            <Avatar>JÖ</Avatar>
          </Stack>
          <Typography className="TypographyText" noWrap>
            Jonas Öhrn
          </Typography>
        </Stack>
      </Item>
      <Item
        id="friendsListBoxTwo"
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack id="RB" spacing={3} direction="row" alignItems="center">
          <div className="onlineStatus"></div>
          <Stack className="AvatarBox">
            <Avatar>RB</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography className="TypographyText" noWrap>
              Rasmus Broman
            </Typography>
          </Stack>
        </Stack>
      </Item>
      <Item
        id="friendsListBoxThree"
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack id="OR" spacing={3} direction="row" alignItems="center">
          <div className="onlineStatus"></div>
          <Stack className="AvatarBox">
            <Avatar>OR</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography className="TypographyText" noWrap>
              Olle Ristenstrand
            </Typography>
          </Stack>
        </Stack>
      </Item>
      <Item
        id="friendsListBoxFour"
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack id="JTG" spacing={3} direction="row" alignItems="center">
          <div className="onlineStatus"></div>
          <Stack className="AvatarBox">
            <Avatar>JTG</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography className="TypographyText" noWrap>
              Johnny The G
            </Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}
