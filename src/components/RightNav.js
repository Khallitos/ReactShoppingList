import { borderRight } from '@mui/system'
import React from 'react'
import { Box, Button, TextField,Stack, Typography} from "@mui/material";

export const RightNav = () => {
  return (
    <Box bgcolor="skyblue" flex={2} p={2}  sx={{backgroundColor:"white",'@media (max-width: 1200px)' : {
      display: "none"}}}>
      <p>Rbar</p>
      </Box>
  )
}


export default RightNav