// import {useEffect, useState} from "React"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx"
import Flashpack from './pages/Flashpack';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route , Routes} from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import React from "react";

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
  <Route path ="Signup" element={<Signup/>}/>
  <Route path ="Login" element={<Login/>}/>
  <Route path ="Flashpack" element={<Flashpack/>}/>
  </Routes>
   <Footer/>
   </BrowserRouter>
   {/* {!token ?
            isUser 
              ? <Login setIsUser={setIsUser} setToken={setToken} />
              : <Signup setIsUser={setIsUser} setToken={setToken} />
          : null } */}

   </>
  );
}


