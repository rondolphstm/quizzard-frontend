import React from "react"
import logo from '../logo/gh2.png'
import logo2 from '../logo/li.png'
import "./styles/Footer.css"

export default function Footer() {

  return (
    <footer className="footer">
      <div>&copy;2022 by Rondolph St.Martin</div>
      <div id="logos">
        <a href="https://github.com/rondolphstm" target="-blank">
        <img src={logo} alt="github logo" className="gh"/>
        </a>
         <a href="https://www.linkedin.com/in/rondolph-st-martin-31a049222/"
          target="-blank">
         <img src={logo2} alt="linkin logo" className="li"/>
        </a>
      </div>
    </footer>
  )
  }

