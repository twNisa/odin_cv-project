import React from "react"

export default function SkillsForm({info, onChange, onDel, onAdd}){
  let skillsItems;
  info.length > 0 ?
    skillsItems = info.map((item, index) =>{
      return (
        <li key={info[index].id} className="skill-item">
        <input type="text" name="skill" className="skill-input" value={info[index].skill} onChange={(e)=>onChange(e, item.id)} placeholder="Skill name"/>
        <button className="btn btn-x btn-del" onClick={()=>onDel(item.id)}>X</button>
      </li>
      )
    })
  : skillsItems = [];

  return (
    <div className="skills">
      <h2>Skill</h2>
      <button className="btn btn-add-skill" onClick={onAdd}>Add new</button>
      <ul>
        {skillsItems}
      </ul>
      
    </div>
  )
}
