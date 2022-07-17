import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import contact from './data'

 const Search = () => {
    const [searchTerm,setSearchTerm] = useState('')

  return (
    <Box>
        <input type="text" placeholder='Search..' onChange ={(e)=> setSearchTerm(e.target.value)} />
        {contact.filter((val)=>{
            if(searchTerm === ""){
                return val
            }
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((people)=> {
            console.log(people)
            return(
                <Box key = {people.id}>
                    <Typography variant="p" color="initial">{people.title}</Typography>

                </Box>
            )
        })}
    </Box>
  )
}

export default Search
