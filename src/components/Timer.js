import React, { useEffect, useState, useCallback, useRef } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { BoyRounded, ResetTv } from "@mui/icons-material";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";



const Timer = () => {
  const [timerValue, setTimerValue] = useState(30);
  const [timerChecker, setTimerChecker] = useState(true);
  const [colorchanger,setColorChanger] = useState (false);
  const counterId = useRef();

  const counterDown = () => {
    setTimerValue((prevTimerValue) => prevTimerValue - 1);
  };

  const PauseTimer = () => {
    console.log({ counterId: counterId.current });
    setTimerValue(timerValue)
    clearInterval(counterId.current);

  };

  const StopTimer = () => {
    console.log({ counterId: counterId.current }, "i stopped");
    clearInterval(counterId.current);
    setTimerValue(30);
  };

  const Reset = () => {
    setTimerValue(30);
    StopTimer();
  };

  const StartTimer = () => {

    if (timerValue === 0) {
      setTimerValue(0);
    } else {
      setTimerChecker(false)
      counterId.current = setInterval(counterDown, 1000);

    }
  };

  const PauseHandler = () =>{
  setTimerChecker(true)

  PauseTimer()

  }

  useEffect(() => {
    console.log({ timerValue });
    if (timerValue === 0) {
      StopTimer();
    }
    else if(timerValue <= 5)
  {
   setColorChanger(true)

  }
  else if(timerValue <= 4)
  {
   setColorChanger(true)

  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerValue]);



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:  colorchanger ? "black" : "",

      }}
    >
      <Box  sx={{marginBottom:"200px"}}>
        <Typography variant="h1" color="white">
          {timerValue}
        </Typography>
      </Box>
      <Box sx={{display:""}}>
        {timerChecker ?
          <PlayCircleFilledWhiteIcon
            sx={{ color: "green" , fontSize:50}}
            onClick={() => StartTimer(timerValue)}
          />
         :
          <PauseCircleOutlineIcon  sx={{ color: "orange" ,fontSize:50}} onClick={()=> PauseHandler()} />
        }
        <StopCircleIcon
          sx={{ color: "red" ,fontSize:50}}
          onClick={() => StopTimer(timerValue)
          }

        />
        <RestartAltIcon
          sx={{ color: "blue" ,fontSize:50}}
          onClick={() => Reset(timerValue)}
        />
      </Box>
    </Box>
  );

  // {timerValue === 0 ? <p>Happy new year</p> : timerValue}
};

export default Timer;
