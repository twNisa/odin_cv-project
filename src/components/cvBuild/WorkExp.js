import React from "react"
import WorkItem from "./WorkItem";

export default function WorkExp({info}){

  const workItems = info.map(item => {
    return <WorkItem info={item} />
  });
  return (
    
    <div className="work-experience">
      <h2>Work experience</h2>
      {workItems}
    </div>
  )
}