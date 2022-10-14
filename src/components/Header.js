import React from "react"
export default function Header({onClick, preview, pdf}){
  return (
    <header>
      <h1>CV CREATER</h1>
      <button onClick={onClick}>{preview ? "stop preview" : "preview"}</button> 
      {preview && <button onClick={pdf}>export PDF</button>}
    </header>
  )
}