import React, { useState } from 'react'
import Styles from'./Home.module.css'

export default function Nopage() {

const [work,setwork]=useState("Im a artist")

  return (
    <>
    <h1  className={Styles.reuse}>my profession is {work}</h1>

    <button onClick={()=>setwork("Im a software developer") }>explore</button>
    </>
  )
}
