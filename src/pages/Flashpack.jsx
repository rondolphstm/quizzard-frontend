import React from "react";

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
// import Flipcards from "../components/Flipcards";
import  LeftTabs  from "../components/Tabs"
// import Info from "../components/Info";

// import Createpacks from './components/Createpacks.jsx'

export default function Flashpack(){

    return(
        <>
        <Navbar />
        <div>
        {/* <Info/> */}
        <LeftTabs/>
        </div>
        <Footer/>

    
        </>
    )
}