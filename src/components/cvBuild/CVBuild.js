import React from "react"
import Photo from "./Photo"
import Head from "./Head"
import Education from "./Education"
import Skills from "./Skills"
import WorkExp from "./WorkExp"
import {nanoid} from "nanoid"

export default function CVbuild({cv}){
   // Utility functions
   const utility = {
  
    capitaliseWord(word){
      return word === "" ? "" : (word[0].toUpperCase() + word.slice(1))
    },
    capitaliseEveryWord(sentence){
      return (
        sentence.split(" ")
                .map(word => this.capitaliseWord(word))
                .join(" ")
      )
    },
  
  }
  console.log(cv)
  
  return (
    <div className="CV">
      <Head info={cv.info}  utility={utility} />
      <div className="main">
        <WorkExp info={cv.workExperience} utility={utility}/>
        <Education info={cv.education} utility={utility}/>
      </div>
      <Skills info={cv.skills} utility={utility}/>
    </div>
  )
}