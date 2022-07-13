import React, { useEffect, useState, useRef } from "react";
import { Nav, Footer, Sidebar, RightNav, Feed } from "./components";
import { Box, Button, TextField, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// import axios from 'axios';

function App() {
  return (
    <Box sx={{ backgroundColor: "" }}>
      <Nav />

      <Box
        sx={{
          marginTop: "80px",
          paddingX: 30,
          "@media (max-width: 900px)": {
            paddingX: 0,
          },
          "@media (min-width:900px) and (max-width:1400px)":{
            paddingX: 15,
          }
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <RightNav sx={{}} />
        </Stack>
      </Box>
    </Box>
  );
}
export default App;
