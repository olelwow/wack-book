import React, {useState} from 'react';
import i18n from 'i18next';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); //// i18n.language innehåller valt språk som är tilldelat till "lng" i i18n.js filen.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value); //Används för att byta språk som är tilldelat i filen.
        setSelectedLanguage(e.target.value);

    }

    return (
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={{  }} id="demo-simple-select-label">Language</InputLabel>
        <Select defaultValue={selectedLanguage} onChange={(e) => chooseLanguage}>

            <MenuItem value="sv">Svenska</MenuItem>
            <MenuItem value="en">Engelska</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
        

};

export default LanguageSelector;
