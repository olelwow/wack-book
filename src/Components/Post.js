import * as React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const NewPost = (key) =>{
    return ( 
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ 
            bgcolor: "#B6DCAC", 
            left: "1em", 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            Height: '50vh',

        }}>
             {/* <Box sx={{ flexGrow: 1 }}>
            <TextField
            id="newTextPostField"
            aria-readonly
            multiline
            value={key}
            sx={{
                background: "white",  
                display: 'flex', 
                
            }}
            />
            </Box> */}
            </Box>
        </Container>
        </React.Fragment>

);

}

export default NewPost;