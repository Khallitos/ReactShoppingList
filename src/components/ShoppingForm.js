import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShoppingForm = () => {
  const [addItem, setAddItem] = useState("");
  const [searchItem,setSearchItem] =useState("")
  const [itemList, setItemList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isfiltered,setIsfiltered] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
    if (addItem !== "") {
      setItemList([
        ...itemList,
        { id: new Date().getTime().toString(), item: addItem },
      ]);
      setAddItem("");
      setCounter(counter + 1);
      setOpen(false)
    } else {
      alert("enter an Item");
    }
  };
  console.log({ itemList });
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
            placeholder="Search Item"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleOpen}
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

        {itemList.filter((val)=>{
          if(searchItem ==""){
            return val
          } else if (val.item.toLowerCase().includes(searchItem.toLowerCase())){
            return val
          }
        }).map((items) => {
          return (
            <ShoppingList
              key={items.id}
              items={items.item}
              counter={counter}
              setCounter={setCounter}
            />
          );
        })}

        <hr />

        <Typography
          variant="h5"
          sx={{ justifyContent: "flex-end", fontSize: "bold " }}
        >
          Total: {counter}
        </Typography>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Item
          </Typography>

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
                placeholder="Search Item"
                value={addItem}
                onChange={(e) => setAddItem(e.target.value)}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={addItemHandler}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Paper>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default ShoppingForm;
