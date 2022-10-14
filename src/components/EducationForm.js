import React from "react"

export default function EducationForm({info, onChange, onDel, onAdd}){
  let educationItems;
  info.length > 0 ? 
    educationItems = info.map((item, index) => {
      return (
        <div key={info[index].id} className="education-item">
        <input type="text" name="school" className="schpol-input" value={info[index].school} onChange={(e)=>onChange(e, item.id)} placeholder="School name"/>
        <input type="text" name="course" className="course-input" value={info[index].course} onChange={(e)=>onChange(e, item.id)} placeholder="course name"/>
   
        <button className="btn btn-x btn-del" onClick={()=>onDel(item.id)}>X</button>
      </div>
      )
    })
  : educationItems = [];
  
  return (
    <div className="education">
      <h2>Education & Learning</h2>
      <button className="btn btn-add-work" onClick={onAdd}>Add new</button>
      {educationItems}
    </div>
  )
}