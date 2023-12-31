import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import LikeButton from "./LikeButton";

const FakeAddedPosts = ({ author, content }) => {
  const [firstLetter, secondLetter] = author
    ? author.split(".").map((name) => name.charAt(0).toUpperCase())
    : ["", ""];

  return (
    <Box
      sx={{
        left: "1em",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "1em",
        WebkitFlexGrow: "1",
      }}
    >
      <ul
        sx={{
          display: "flex",
          padding: 0,
        }}
      >
        <Box id="posts"
          sx={{
            display: "flex",
            alignItems: "space-between",
            padding: "0.5em",
            marginTop: "0.5em",
            minHeight: "12vh",
            width: "37em"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              wordBreak: "break-word",
              
            }}
          >
            <h4 id="PostIdName" style={{
              display: "flex",
              alignContent: "center",
            }}>{author}</h4>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "8em",
                // paddingRight: "2em",
              }}
            >
              <Avatar alt="Profile Picture">
                {`${firstLetter} ${secondLetter}`}{" "}
              </Avatar>
              <LikeButton />
            </Stack>
          </Box>
          <Box id="postsBox"
            sx={{
              width: "51.5vh",
              minHeight: "6vh",
              listStyleType: "none",
              wordBreak: "break-word",
              paddingLeft: "0.5em",
            }}
          >
            {content}
          </Box>
        </Box>
      </ul>
    </Box>
  );
};

export default FakeAddedPosts;
