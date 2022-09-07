
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Flashpack from './pages/Flashpack';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route , Routes} from 'react-router-dom';
// import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
// import Login from "./components/Login"
// import Signup from "./components/Signup"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
 export default function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
  <Routes>
  <Route path ="About" element={<Home/>}/>
  <Route path ="Login/Signup" element={<Login/>}/>
  <Route path ="Flashpack" element={<Flashpack/>}/>
  <Route path ="About" element={<About/>}/>
  </Routes>
   </BrowserRouter>

   </>
  );
}


