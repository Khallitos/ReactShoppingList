import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import data from "./data";
import { useState } from "react";
import Info from "./Info";
import Quizzlet from './Quizzlet'

const Quiz = () => {

  const [questions,setQuestions]= useState(data)

  return (
    <Box>
    {questions.map((question) => {
      return(
        <Quizzlet {...question} key={questions.id}/>
       )

    }) }

    </Box>
  )

}

export default Quiz;
