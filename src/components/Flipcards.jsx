import React, {useEffect, useState} from "react"
// import Hero from "../components/Hero"
import "./styles/Flipcard.css"

export default function Flipcards() {
const [card ,setCard] =useState()
useEffect(()=>{
fetch("https://quizzard-api-backend.web.app/packs")
.then((results)=> results.json())
.then((data)=> setCard(data))
.catch(console.error)
},[setCard])
  return(
    <>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        </div>
        <div className="flip-card-back">
          {/* <Hero /> */}
        </div>
      </div>
    </div>
    </>
  )
}
