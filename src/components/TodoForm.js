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
import ListTodo from "./ListTodo";

const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoArray, setTodoArray] = useState([]);


  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todoValue !== "") {
      setTodoArray([
        ...todoArray,
        { id: new Date().getTime().toString(), toDo: todoValue },
      ]);
      setTodoValue("");

    }
  };

  const clearHandler = () => {}

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
            placeholder="Add a todo to your list"
            onChange={(e) => setTodoValue(e.target.value)}
            value={todoValue}
          />
          <IconButton
            type="submit"
            onClick={addTodoHandler}
            sx={{ p: "10px" }}
            aria-label="search"
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
          Todo list
        </Typography>

        {todoArray.map((todolists) => {
          return (
            <ListTodo
              content={todolists.toDo}
              key={todolists.id}
              setTodoArray={setTodoArray}
              todoArray={todoArray}
              id={todolists.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TodoForm;
