import React from "react";
import phone from "../assets/phone.svg"
import github from "../assets/github.svg"
import linkedIn from "../assets/linkedIn.svg"
import email from "../assets/email.svg"
export default function Head({info, onChange, photoClick, utility}){
  
 
  function editSumary(){

  }
  let linkLogos = {
    "github": github,
    "phone": phone,
    "linkedIn": linkedIn,
    "email": email

  }
   
  let links = []
  for(const link in info.links){
    console.log(link)
    info.links[link] && links.push(
      <div className="link-item">
        <img className="link-logo" src={linkLogos[link]}/>
        <a href="#" className={`${link}`}>{info.links[link]}</a> 
      </div>
    )
  }
  console.log(links)
  
  return (
    <div className="cv-header">
      <img className="profile-img" src={info.photo} />
      <div className="name-title">
        <h2>{utility.capitaliseEveryWord(info.title)}</h2>
        <h2 className="header-name">{utility.capitaliseWord(info.fName)} <span>{utility.capitaliseWord(info.lName)}</span></h2>
      </div>
      <div className="links">
        {links}
      </div>
     
    </div>
  )
  

}