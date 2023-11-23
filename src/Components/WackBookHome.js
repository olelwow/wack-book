import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


export default function WackBookHome() {
  return (
    <Stack direction="row" spacing={2}>
      <Button id='wackBookTitle' startIcon={<HomeRoundedIcon />}  href="/MainPage">WackBook</Button>
    </Stack>
  );
}