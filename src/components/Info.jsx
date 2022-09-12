import { useState, useEffect } from "react"
import PackCard from "../components/PackCard"

export default function Info(){
    const [packs, getPack] = useState([])
    useEffect(()=>{
        // fetch("http://localhost:4440/flashpack")
        fetch("https://quizzard-api-backend.web.app/flashpack")
        .then(res => res.json())
        .then(data => getPack(data))
        .catch(err => console.error(err))
    })
    console.log({ packs })  
    return(
        packs.map((pack, index) => {
        return <PackCard key={pack._id} pack={pack} index={index}/>
    }))

}

 


