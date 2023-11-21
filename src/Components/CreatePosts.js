import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ChangeEvent, useState } from "react";
import NewPost from "./Post";

const CreateNewPost = () => {
    
  const [text, setText] = useState("");
  const [createdElement, setCreatedElement] = useState([]);


  const handleCreateElement = () => {
  
    
    setCreatedElement((createdElement) => [...createdElement,text]);

     setText('');
  }  
    
  
  console.log(text);
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
            minHeight: '12vh', 
            
            }} 
        >
            <Box sx={{ flexGrow: 1 }}>
            <TextField
            id="newTextPostField"
            label="Skapa Inlägg"
            multiline
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxRows={4}
            sx={{
                background: "white",  
                display: 'flex', 
                
            }}
            />            
            <Button id="sendButton" onClick={handleCreateElement} variant="contained" endIcon={<SendIcon />} 
            sx={{
            width: "45vh", 
            left: '1em',        
            }}>
                Send
            </Button>
        </Box>
           
            
        </Box>
        <Box sx={{ 
            bgcolor: "#B6DCAC", 
            left: "1em", 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            minHeight: '12vh',
            marginTop: '1em', 
        }}>
        
        
        <ul>
        {createdElement && createdElement.map((item, i) => (
  
    <li key={i}>{item}</li>
  
))}
        
    
    </ul>
    </Box>
      </Container>
    </React.Fragment>
  );
};

export default CreateNewPost;
