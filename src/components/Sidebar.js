import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import index from "../index.css";

export const Sidebar = () => {
  return (
    <Box
      p={1}
      flex={1}
      sx={{
        display: {
          xs: "none",
          sm: "block",
          borderRadius: "8px",
          backgroundColor: "white",
        },
      }}
    >
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Box
            className="ProfileBackground"
            sx={{
              backgroundColor: "gray",
              height: "80px",
              borderRadius: "10px",
            }}
          >
            <img
              className="Profileimg"
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFS5wgwv3GdiQ/profile-displayphoto-shrink_100_100/0/1631624470785?e=1663200000&v=beta&t=jkBD_CNdFzem-6adVAEMfJCzVm6oKw_hAdSENdQUDsA"
              alt=""
              sx={{ borderRadius: "50%" }}
            />
          </Box>
          <Typography
            sx={{ marginTop: "25px", textAlign: "center", text: "bold" }}
            color="text.secondary"
          >
            Carlos Philips
          </Typography>
        </CardContent>
        <ListItemButton>
          <ListItemText primary="Who's viewed your profile   36 " />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Connections         456" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Grow your network" />
        </ListItemButton>
      </Card>
    </Box>
  );
};

export default Sidebar;
