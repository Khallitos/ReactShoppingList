import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
import ShoppingList from "./ShoppingList";

const ShoppingForm = () => {
  const [addItem, setAddItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [counter, setCounter] = useState(0);


  const addItemHandler = (e) => {
    e.preventDefault();
    if(addItem !== ""){
    setItemList([...itemList,
      { id: new Date().getTime().toString(), item: addItem },
    ]);
    setAddItem("");
    setCounter(counter+1)

  }

    else{
      alert("enter an Item")
    }
  };
  console.log({itemList})
  return (
    <Box className="TodolistBox">
      <form>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Add a item"
            value={addItem}
            onChange={(e) => setAddItem(e.target.value)}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={addItemHandler}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Paper>
      </form>

      <Box className="Todolist">
        <Typography
          variant="h5"
          color="initial"
          sx={{ justifyContent: "center" }}
        >
          Shopping List
        </Typography>

        {itemList.map((items) => {
          return <ShoppingList key={items.id} items={items.item} counter={counter} setCounter={setCounter}/>;
        })}

        <hr />

        <Typography variant="h5"  sx={{justifyContent:"flex-end",fontSize:"bold "}}>Total: {counter}</Typography>

      </Box>
    </Box>
  );
};

export default ShoppingForm;
