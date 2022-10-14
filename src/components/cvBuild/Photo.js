import React from "react";

export default function Photo({photo, onClick}){
  


  return ( 
    <img className="profile-img" src={photo} onClick={()=>onClick("photo")}></img>
   
  )
}