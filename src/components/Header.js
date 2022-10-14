import React from "react"

export default function Header({onClick, preview}){
  return (
    <header>
      <h1>CV CREATER</h1>
      <button onClick={onClick}>{preview ? "stop preview" : "preview"}</button>
      <button>EXPORT AS PDF</button>
    </header>
  )
}