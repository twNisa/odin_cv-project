import React from "react"

export default function WorkExpForm({info, onChange, onDel, onAdd}){
  let workItems;
  info.length > 0 ? 
    workItems = info.map((item, index) => {
      return (
        <div key={info[index].id} className="work-item">
        <input type="text" name="title" className="title-input" value={info[index].title} onChange={(e)=>onChange(e, item.id)} placeholder="Your job title" required/>
        <input type="text" name="company" className="company-input" value={info[index].company} onChange={(e)=>onChange(e, item.id)} placeholder="company name" required/>
        
        <div className="dates">
        <span>From: </span><input type="date" id="dateFrom" name="dateFrom"
          value={info[index].dateFrom}
          onChange={(e)=>onChange(e, item.id)}
          required
        ></input>  
        <span> To: </span><input type="date" id="dateTo" name="dateTo"
          value={info[index].dateTo}
          onChange={(e)=>onChange(e, item.id)}
          required
        ></input>  
        </div>
        

        <textarea name="description" className="description-input" placeholder="Description about the job" value={info[index].description} onChange={(e)=>onChange(e, item.id)} />   

        <button className="btn btn-x btn-del" onClick={()=>onDel(item.id)}>X</button>
      </div>
      )
    })
  : workItems = [];
  
  return (
    <div className="work-experience">
      <h2>Work experience</h2>
      <button className="btn btn-add-work" onClick={onAdd}>Add new</button>
      {workItems}
    </div>
  )
   
}