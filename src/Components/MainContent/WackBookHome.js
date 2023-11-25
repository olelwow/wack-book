import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';

export default function WackBookHome() {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/MainPage">
      <Button id='wackBookTitle' startIcon={<HomeRoundedIcon />}>
        WackBook
        </Button>
        </Link>
    </Stack>
  );
}