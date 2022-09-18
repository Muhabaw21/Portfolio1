import React from 'react'
import {FaTimes} from "react-icons/fa"
const tasks=[
  {
    id:1,
    text:"shopping",
    date:"August 5 2022"
  },
  {
    id:2,
    text:"Website design",
    date:"August 28 2022"
  },
  {
    id:3,
    text:"Field",
    date:"September 05 2022"
  }
]
const Integrate = () => {
  return (
    <div>
      {
      tasks.map((task)=>
        (
        <h3>{task.text}<FaTimes/></h3> 
        )
      )
      }
    </div>
  )
}

export default Integrate
