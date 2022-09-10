// import {useEffect, useState} from "React"
import Home from "./pages/Home.jsx"
import Flashpack from './pages/Flashpack';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route , Routes} from 'react-router-dom';
import React from "react";
import Footer from "./components/Footer.jsx";

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
   <Navbar />
  <Routes>
  <Route path ="Home" element={<Home/>}/>
  <Route path ="Flashpack" element={<Flashpack/>}/>
  </Routes>
   </BrowserRouter>
   <Footer/>
   {/* {!token ?
            isUser 
              ? <Login setIsUser={setIsUser} setToken={setToken} />
              : <Signup setIsUser={setIsUser} setToken={setToken} />
          : null } */}

   </>
  );
}


