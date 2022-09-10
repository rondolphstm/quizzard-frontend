import React from "react"
import logo from '../logo/gh.png'
import logo2 from '../logo/li.png'

export default function Footer() {

  return (
    <footer>
      <p>&copy;2022 by Rondolph St.Martin</p>
      <div id="logos">
        <a href="https://github.com/rondolphstm" target="-blank">
        <img src={logo} alt="github logo" className="App"/>
        </a>

        <a
          href="https://www.linkedin.com/in/rondolph-st-martin-31a049222/"
          target="-blank"
        >
         <img src={logo2} alt="linkin logo" className="App"/>
        </a>
      </div>
    </footer>
  )
  }

