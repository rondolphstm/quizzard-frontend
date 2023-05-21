// import {useEffect, useState} from "React"
import Home from "./pages/Home.jsx"
import Flashpack from './pages/Flashpack';
import FlipCards from './FlipCards';
import './App.css';
import { BrowserRouter,Route , Routes} from 'react-router-dom';
import React from "react";
// import bubbles from "../bubbles/bubbles.jsx"

 export default function App() {
  // const [token, setToken] = useState();
  // const [isUser, setIsUser] = useState(false);
  // useEffect(()=>{
  //   if(localStorage.getItem('token')) {
  //     setToken(localStorage.getItem('token'))
  //   }
  // },[setToken]);
  return (
    <>
   <BrowserRouter>
   <bubbles />
    <Routes>
      <Route index element={<Home/>}/>
      <Route path ="/flashpack" element={<Flashpack/>}/>
    </Routes>
   </BrowserRouter>
   <FlipCards/>
   {/* {!token ?
            isUser 
            ? <Login setIsUser={setIsUser} setToken={setToken} />
            : <Signup setIsUser={setIsUser} setToken={setToken} />
          : null } */}
   </>
  );
}


