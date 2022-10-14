import React from "react";
import HeadForm from "./HeadForm";
import WorkExpForm from "./WorkExpForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import { nanoid } from "nanoid";
import Header from "./Header"
import CVBuild from "./cvBuild/CVBuild";

export default function CV(){

  const [preview, setPreview] = React.useState(false)

  const [cv, setCV] = React.useState({
    info:{
      photo:"https://images.unsplash.com/photo-1521215887590-97d360dedc46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
      title:"Front end dev",
      fName:"John",
      lName:"Doe",
      summary:"",
      links:{
        phone:"",
        email:"",
        linkedIn:"",
        github:"",
      }
    },
    workExperience:[
      {
        id: nanoid(),
        title: "Product Designer",
        company: "fintef",
        dateFrom:"2019-10-22",
        dateTo: "2021-11-02",
        description: "Designing end-to-end experience for financial products on mobile & web platforms. Working closely with managers, marketing specialists and developers."
      },
      {
        id: nanoid(),

        title: "UX Designer",
        company: "Resume Worded",
        dateFrom:"2017-09-02",
        dateTo: "2019-09-10",
        description: "Rewamped website flows and navigation menus, reducing the frequency of misdirected customer service queries by 30%. Conducted user testing with 10+ participants using UserTesting.com; designed agains findings which reduced bounce rate for primary user flow by 30%"
      },
    ],
    education:[
      {
        id: nanoid(),
        school: "Copenhagen School of Design and Technology",
        dateFrom: "2015",
        dateTo: "2016",
        course: "Master's in Human-Computer Interaction",
      },
      {
        id: nanoid(),
        school: "testy",
        dateFrom: "2015",
        dateTo: "2016",
        course: "Master's in Human-Computer Interaction",
      },
    ],
    skills:[{id:nanoid(), skill: "Javascript"}, {id: nanoid(), skill:"html/css"}],
  })

  function handleChangeInfo(e){
    const name = e.target.name
    e.target.parentNode.className === "links-form" 
      ? setCV(prev => {
            return {
              ...prev,
              info: {
                ...prev.info,
                links: {
                  ...prev.info.links,
                  [name]: e.target.value
                }
              }
            }
        })
      : setCV(prev => {
          return {
            ...prev, 
            info: {
              ...prev.info,
              [name]: e.target.value
            }
          }
        })
  }

  function handleClickPhoto(e){
    console.log("photo change functionality not yet implemented")
  }
  

  function handleChangeWorkExp(e, id){
    // const index = cv.workExperience.indexOf()
    setCV(prev =>{
      return {
        ...prev, 
        workExperience: prev.workExperience.map(item=>{
          return item.id === id ? { ...item, [e.target.name]: e.target.value }
          : item
        })
      }
    })
  }
  function handleAddWorkExp(e){
    setCV(prev =>{
      return {
        ...prev,
        workExperience: prev.workExperience.concat({
          id:nanoid(),
          title: "",
          company: "",
          dateFrom:"",
          dateTo: "",
          description: ""
        })
      }
    })
    console.log(cv.workExperience)
  }
  function handleDeleteWorkExp(id){
    setCV(prev=>{
      return{
        ...prev,
        workExperience: prev.workExperience.filter(item => item.id !== id)
      }
    })
  }
  function handleChangeEducation(e, id){
    setCV(prev =>{
      return {
        ...prev, 
        education: prev.education.map(item=>{
          return item.id === id ? { ...item, [e.target.name]: e.target.value }
          : item
        })
      }
    })
  }
  function handleAddEducation(e){
    setCV(prev =>{
      return {
        ...prev,
        education: prev.education.concat({
          id: nanoid(),
          school: "",
          dateFrom: "",
          dateTo: "",
          course: "",
        })
      }
    })
  }
  function handleDeleteEducation(id){
    setCV(prev=>{
      return{
        ...prev,
        education: prev.education.filter(item => item.id !== id)
      }
    })
  }
  function handleChangeSkill(e, id){
    setCV(prev =>{
      return {
        ...prev, 
        skills: prev.skills.map(item=>{
          return item.id === id ? { ...item, [e.target.name]: e.target.value }
          : item
        })
      }
    })
  }
  function handleAddSkill(e){
    setCV(prev =>{
      return {
        ...prev,
        skills: prev.skills.concat({
          id: nanoid(),
          skill: "",
        })
      }
    })
  }
  function handleDeleteSkill(id){
    setCV(prev=>{
      return{
        ...prev,
        skills: prev.skills.filter(item => item.id !== id)
      }
    })
  }

  function previewClick(){
    setPreview(prev => !prev)
  }

  

  const form = (
    <div className="CV">
      <HeadForm 
        info={cv.info} 
        onChange={handleChangeInfo} 
        photoClick={handleClickPhoto} 
      />
      <div className="main">
        <WorkExpForm 
          info={cv.workExperience} 
          onChange={handleChangeWorkExp} 
          onAdd={handleAddWorkExp} 
          onDel={handleDeleteWorkExp} 
        />
        <EducationForm 
          info={cv.education} 
          onChange={handleChangeEducation} 
          onAdd={handleAddEducation} 
          onDel={handleDeleteEducation}
        />
        </div>
        <SkillsForm 
          info={cv.skills} 
          onChange={handleChangeSkill} 
          onAdd={handleAddSkill} 
          onDel={handleDeleteSkill}
        />
    </div>
  )

  const cvBuild = (<CVBuild cv={cv}/>)
  
  
 
  return(
    <div className="container">
      <Header onClick={previewClick} preview={preview} />
      {preview ? cvBuild : form}
    </div>
  )
}