import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import index from "../index.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingForm from "./ShoppingForm";


const ShoppingList = ({ items ,counter,setCounter}) => {
  const [singleCounter, setSingleCounter] = useState(1);
  const [isDeleted,setIsDeleted]= useState(false)

  const addHandler = () => {
    setSingleCounter(singleCounter + 1);
    setCounter(counter+1)


  };
  const subHandler = () => {
    if (singleCounter <= 1) {
      setSingleCounter(1);
    } else {
      setSingleCounter(singleCounter - 1);
      setCounter(counter-1)
    }
  };
  const deleteHandler = () =>{

    setIsDeleted(true)
    setCounter(counter-singleCounter)
    setSingleCounter(0)


  }

  console.log({singleCounter})
  return (
    <List sx={{ display: "flex" }}>
      <ListItem disablePadding> <IconButton aria-label="delete" onClick={deleteHandler}>
            <DeleteIcon  sx={{color:"red"}}/>
          </IconButton>
        <ListItemButton>
          <Typography variant="h5" color="initial" sx={isDeleted ? {textDecoration:"line-through"}: {textDecoration:"none"}}>
            {items}
          </Typography>
        </ListItemButton>
        <ListItemIcon>
          <IconButton aria-label="delete" onClick={subHandler}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" color="initial">

            {singleCounter}
          </Typography>

          <IconButton aria-label="delete" onClick={addHandler}>
            <ArrowForwardIosIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default ShoppingList;
