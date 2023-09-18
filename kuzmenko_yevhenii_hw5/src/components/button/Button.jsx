import React from 'react'
import { BG_COLOR_FOR_BUTTON, COLOR_FOR_BUTTON } from '../../constants/todoConstants';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicButton({title, actionOnClick}) {
  return (
    <Stack>
        <Button variant="contained" disableElevation sx={{ bgcolor: BG_COLOR_FOR_BUTTON, color: COLOR_FOR_BUTTON}} onClick={actionOnClick}>{title}</Button>
    </Stack>
  )
}