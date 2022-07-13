import React from "react";
import {
  Box,
  InputAdornment,
  InputBase,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Input } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { AppBar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Nav = () => {
  const NavStyle = {
    display: "flex",
    gap: "10px",

  }

  const AppbarStyling = {


  }


  const NavIcons = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "black",
  };

  return (
    <AppBar sx={{ backgroundColor: "white" ,paddingX:30 , paddingY:1,'@media (max-width: 900px)' : {
      paddingX: 0,
    } }}>
      <Box sx={NavStyle }>
        <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
          width="40px"/>
        <Input
          sx={{ backgroundColor: "white", width: "50%",marginRight:"50px" }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

        <Box sx={NavIcons} >

          <a href="" sx={{textDecoration:"none !important"}}><HomeIcon /></a>
          <a href="" sx={{textDecoration:"none"}}><WorkOutlineIcon /></a>
          <a href="" sx={{textDecoration:"none"}}><NotificationsIcon/></a>
          <a href="" sx={{textDecoration:"none"}}><WorkOutlineIcon/></a>

        </Box>

        <Typography>Hello</Typography>
      </Box>
    </AppBar>
  );
};

export default Nav;
