import React from "react"

export default function Skills({info}){
  const skillsElement = info.map(item => {
    return (<li key={item.id}>{item.skill}</li>)
  })

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsElement}
      </ul>
      
    </div>
  )
}