import React from "react"

export default function Education({info}){
  const educationItems = info.map(item => {
    return (
      <div className="education-item">
        <h3>
          {item.course}
        </h3>
        <h4>
          {item.school + ", " + item.dateFrom + " - " + item.dateTo}
        </h4>
      </div>
    )
  })
  return (
    <div className="education">
      <h2>Education & Learning</h2>
      {educationItems}
    </div>
  )
}