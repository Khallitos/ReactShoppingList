import React, { useEffect, useState, useRef } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {ShoppingForm} from './components';


// import axios from 'axios';

function App() {
  return (
    <Box sx={{ justifyContent: "center" }}>

      <ShoppingForm />
    </Box>

  );
}
export default App;
