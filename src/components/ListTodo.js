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

 const ListTodo = ({content,setTodoArray,todoArray,id}) => {
    console.log({content})

 const [ischecked,setIsChecked] = useState(false)
  const checkHandler = () => {
    setIsChecked(true);

}
 const deleteHandler = () => {
     let deleted = todoArray.filter((item)=> item.id !==id)
     setTodoArray(deleted)




 }

  return (
    <List sx={{display:"flex"}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <Typography variant="h5" color="initial" sx={ischecked ? {textDecoration:"line-through"} : {textDecoration:"none"}} >
                    {content}
                  </Typography>
                </ListItemButton>
                <ListItemIcon>
                  <CheckIcon
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      marginRight: "5px",

                    }}
                    onClick= {checkHandler}
                  />
                  <DeleteIcon onClick = {()=> {deleteHandler(id)}} sx={{ backgroundColor: "red", color: "white" }} />
                </ListItemIcon>
              </ListItem>
            </List>

        )


}

export default ListTodo



