import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UserStatusIndicator from "./UserOnlineOfflineRandom";



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
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack spacing={3} direction="row" alignItems="center">
        <UserStatusIndicator />
          <Stack>
            <Avatar>JÖ</Avatar>
          </Stack>
          <Typography noWrap>Jonas Öhrn</Typography>
        </Stack>
      </Item>
      <Item
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack spacing={3} direction="row" alignItems="center">
          <div className="onlineStatus"></div>
          <Stack>
            <Avatar>RB</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>Rasmus Broman</Typography>
          </Stack>
        </Stack>
      </Item>
      <Item
        sx={{
          my: 2,
          mx: "auto",
          p: 2,
        }}
      >
        <Stack spacing={3} direction="row" alignItems="center">
          <div className="onlineStatus"></div>
          <Stack>
            <Avatar>OR</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>Olle Ristenstrand</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}
