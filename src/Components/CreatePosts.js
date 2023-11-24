import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import LikeButton from "./LikeButton";
import FakeAddedPosts from "./FakePosts";



const firstName = [
  'Johnny.',
  'Albin.',
  'Leo.',
  'Olle.',
  'Jens.',
  'Filip.',
  'Kevin.',
  'Bettan.',
  'Sam.',
  'Linus.',
  'Kalle.',
  
];
const lastName = [
  'Bravo',
  'Albin',
  'Leo',
  'Olle',
  'Jens',
  'Filip',
  'Kevin',
  'Lloyd',
  'Sam',
  'Linus',
  'Kalle',
];
const newPosts = [
  "Isbjörnar alltså WOW!",
  "Jag provade Eldorados Ketchup från Willy's. Fan vad GOTT! @Delzar",
  "Gick in i en bokhandel och frågade var självhjälpsavdelningen var. Fick svaret: 'Om jag visste det skulle jag inte vara här.'",
  "Fick ett brev från min dammsugare idag. Den ville bara säga att våra möten under sängen varit suveräna.",
  "Min telefon gick sönder, så jag var tvungen att tillbringa tid med min familj. De verkar vara trevliga människor.",
  "Varför tog matematikboken paraplyet till skolan? För att det var tvådelat!",
  "Fick ett mejl från en prins i Nigeria som ville dela sitt arv. Skickade mina bankuppgifter och väntar fortfarande...",
  "Beställde en pizza online och skrev i kommentarerna: 'Kan du rita en enhörning på lådan?' Pizzabagaren levererade, och nu är jag stamkund.",
  "Alltså helt otroligt! Jag köpte en kunga-krona och när jag kom hem och öppnade kartongen var den tom...WTF!.",
  "Försökte skriva en bok om trådlös teknik. Det var svårt att ansluta till handlingen."
];

const CreateNewPost = ({loggedInUser}) => { //Hämtar in data för vem som är inloggad.
    
  const [text, setText] = useState("");
  const [createdElement, setCreatedElement] = useState([]);
  const name = loggedInUser.split("."); //Delar variabeln vid tecknet "." och blir här en array.
  let firstLetter = "";
  let secondLetter = "";
  try { //Felmedelande om first & second letter saknar sitt värde. Skrivs ut i console.
   firstLetter = name[0].charAt(0).toUpperCase(); //Plockar ut första bokstaven i första placeringen i arrayen.
   secondLetter = name[1].charAt(0).toUpperCase(); //Plockar ut första bokstaven i andra placeringen i arrayen.
  } catch (error) {
    console.log("Användare utloggad");
  }
  
  const handleCreateElement = () => {

    // Pilfunktion tar in "createdElement" som parameter och
    // returnerar en ny array som är en kopia av den befintliga array'en.
    setCreatedElement((createdElement) => [...createdElement,text]); 
    setText(''); //Inläggsrutan blir tom efter vi postat
  }  
    
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Yttre lådan med alla inlägg och ruta för skapa inlägg */}
      <Container sx={{
        maxHeight: "60vh", 
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
      }}
      maxWidth="sm">
        {/* Låda för skapa inlägg */}
        <Box sx={{ 
            bgcolor: "#B6DCAC", 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            minHeight: '12vh', 
            width: "100%", 
            
            
            
            }} 
        >   
            {/* Ruta där vi skriver in texten för inlägget */}
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
            {/*Knapp för att posta inlägg  */}
            <Button id="sendButton" onClick={handleCreateElement} variant="contained" endIcon={<SendIcon />} 
            sx={{
            width: "56vh", 
            left: '1em',        
            }}>
                Send
            </Button>
        </Box>
           
        </Box>
        
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            marginTop: '1em', 
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
    width: "100%",
    

  }}>
    {/* Låda för namn, avatar */}
    <Box sx={{
      display: 'flex', 
      flexDirection: 'column',  
      alignItems: 'center', 
      wordBreak: 'break-word',
      paddingLeft: "1.5em",
    }}>
      {/* Skriver ut för och efternamn i inläggsrutan */}
    <h4>{name[0]}</h4>
    <h4>{name[1]}</h4>
        <Stack sx={{
      display: 'flex', 
      flexDirection: 'column',
      paddingRight: "2em",
        }}
      >
          <Avatar>{firstLetter}{secondLetter}</Avatar>
          <LikeButton />
        </Stack>
    </Box>
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
    {/* Fejk-inläggen hamnar här, 
    data hämtas på den satta possitionen i arrayerna längst upp på sidan */}
    <FakeAddedPosts author={firstName[0] + lastName[0]} content={newPosts[0]} />
    <FakeAddedPosts author={firstName[1] + lastName[1]} content={newPosts[1]} />
    <FakeAddedPosts author={firstName[2] + lastName[2]} content={newPosts[2]} />
    <FakeAddedPosts author={firstName[3] + lastName[3]} content={newPosts[3]} />
    <FakeAddedPosts author={firstName[4] + lastName[4]} content={newPosts[4]} />
    <FakeAddedPosts author={firstName[5] + lastName[5]} content={newPosts[5]} />
    <FakeAddedPosts author={firstName[6] + lastName[6]} content={newPosts[6]} />
    <FakeAddedPosts author={firstName[7] + lastName[7]} content={newPosts[7]} />
    <FakeAddedPosts author={firstName[8] + lastName[8]} content={newPosts[8]} />
    <FakeAddedPosts author={firstName[9] + lastName[9]} content={newPosts[9]} />
      </Container>
    </React.Fragment>
  );
};

export default CreateNewPost;
