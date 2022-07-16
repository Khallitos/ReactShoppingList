import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import Info from './Info'


const Quizzlet = ({ id, info, title } ) => {
  const [checkinfo, setCheckinfo] = useState(true);
  const [hideinfo, setHideinfo] = useState(false);
  const [showinfo, setShowinfo] = useState(false);

  const ShowAnswer = () => {


    console.log("hello")
  };
  return (
    <>
    <Box
      className="QuizBox"
      sx={{
        borderRadius: "150px white",
        display: "flex",
        padding: "20px",
        backgroundColor: "white",
      }} >

      {/* <Box sx={{ display: "flex", flex: "2" }}>
        <Typography variant="h5"> Questions and Answer about login</Typography>
      </Box> */}
      {/* <Box sx={{ display: "flex", flex: "4", flexDirection: "column" }}>

              <Typography
                key={id}
                variant="h5"
                sx={{ marginRight: "50px", marginBottom: "20px" }}
              >
                {title}
                {checkinfo && (
                )}
                {hideinfo && <RemoveIcon sx={{ color: "purple" }} />}
              </Typography>

               {showinfo && <Info data={info} />}


      </Box> */}
    </Box>
     </>
  )
};

export default Quizzlet;
