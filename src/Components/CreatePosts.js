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

const CreateNewPost = ({setLoggedInUser, loggedInUser}) => {
    
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
                background: "#e4f0f6",  
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
            // bgcolor: "#B6DCAC", 
            left: "1em", 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            marginTop: '1em', 
            WebkitFlexGrow: '1',
        }}>
        
        
        <ul 
        sx={{
          display: 'flex', 
          padding: 0,
        }}
        >
        {createdElement && createdElement.map((item, i) => (
  <Box  sx={{ 
    bgcolor: "#B6DCAC", 
    display: 'flex', 
    alignItems: 'space-between',
    padding: "0.5em",
    marginTop: "0.5em",
    minHeight: "12vh",
    

  }}>
    <h4>{loggedInUser}</h4>
  <Box  sx={{ 
       bgcolor: "#e4f0f6",
       width: "51.5vh",
       minHeight: "6vh",
       listStyleType: "none",
       wordBreak: 'break-word',
       paddingLeft: "0.5em",
       
     }}>
    <li 
    key={i}>{item}</li>
    </Box>
    </Box>
))}

    </ul>
    </Box>
      </Container>
    </React.Fragment>
  );
};

export default CreateNewPost;


// sx={{ 
//   bgcolor: "#B6DCAC",
// }}