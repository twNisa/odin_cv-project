import React from "react";

export default function WorkItem({info}){
  function isToday(date){
    const today = new Date()
    return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getYear() === today.getYear()
  }
  function formatDate(date){
    const newDate = new Date(date)
    const month = newDate.toLocaleString('default', { month: 'short' });
    const year = newDate.getFullYear()
    return isToday(newDate) ? "Present" : (month + " " +  year)
    
  }
  return (
    <div key={info.id} className="work-item">
      <h3>{info.title}</h3>
      <h4>{info.company + ", " + formatDate(info.dateFrom) + " - " + formatDate(info.dateTo)}</h4>
      <p>{info.description}</p>
    </div>
  )
}