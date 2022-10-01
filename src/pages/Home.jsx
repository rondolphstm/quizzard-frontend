// import Flipcards from "../components/Flipcards";
// import logo from '../logo/quizzard.png'
import React from "react"

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export default function Home() {
    return(
        <>
        <Navbar />
        <div>
            <h2>QUIZZARD</h2>
            <p>The magic of learning</p>
        </div>
        <Footer/>
        </>
    )
}
