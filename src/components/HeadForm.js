import React from "react"

export default function HeadForm({info, onChange, photoClick}){
  return (
    <div className="cv-header">
      <img className="profile-img" src={info.photo} onClick={photoClick}/>
      
      <div className="name-title-form">
     
        <input type="text" name="title" className="name-input" placeholder="Enter your job title" value={info.title} onChange={onChange} maxLength="30"/>
        <input type="text" name="fName" className="name-input" placeholder="Enter your first name" value={info.fName} onChange={onChange} maxLength="20"/>
        <input type="text" name="lName" className="name-input" placeholder="Enter your last name" value={info.lName} onChange={onChange} maxLength="20"/>
      
      </div>
      <div className="links-form">
          <input type="number" name="phone" className="phone-input link" value={info.links.phone} onChange={onChange} placeholder="Your phone number"/>
          <input type="email" name="email" className="email-input link" value={info.links.email} onChange={onChange} placeholder="Your email"/>
          <input type="text" name="linkedIn" className="linkedin-input link" value={info.links.linkedIn} onChange={onChange} placeholder="Your LinkedIn"/>
          <input type="text" name="github" className="github-input link" value={info.links.github} onChange={onChange} placeholder="Your Github"/>
      </div>

    </div>
  )
}