import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import index from "../index.css";


const Form = () => {
  // const {loginWithRedirect} = useAuth0();
  const [values, setValues] = useState({ fullname: "", email: "", password: "" });
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [isValid,setIsValid] =useState(false)
  const handleValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values,[name]:value})
    console.log({values})


  }
  const formHandler = () => {


      setIsSubmitted(true)

      if(values.fullname && values.email && values.password){
        setIsValid(true)
      }


  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        width: "40%",
        margin: "auto",
        alignItems: "center",
      }}
    >
      {isSubmitted && isValid ? <Typography variant="p" sx={{backgroundColor:"green" ,color:"white"}}>Success</Typography> : null}
      <label htmlFor="Firstname">Fullname</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        placeholder="Enter first name"
        className="form"
        value= {values.fullname}
        onChange={handleValues}
      />
      {isSubmitted && !values.fullname ? <span>Please enter fullname</span> : null}
      <label htmlFor="Firstname"  >Email</label>

      <input type="email" id="email" name="email" className="form"  value= {values.email} onChange={handleValues} />
      <label htmlFor="Firstname"  >Password</label>
      <input type="password" id="password" name="password" className="form"  value= {values.password} onChange={handleValues}/>
      <Button type="submit" className="form" onClick= {formHandler}>
        Submit
      </Button>
    </Box>


  );
};
export default Form;
