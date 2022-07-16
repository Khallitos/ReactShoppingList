import React from 'react'
import {useState} from 'react'

 const Info = ({data}) => {

  const[checkid,setCheckid] = useState([])

  console.log(data)
  return (
      <p>{data}</p>
  )
}

export default Info