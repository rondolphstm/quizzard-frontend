import Nav from 'react-bootstrap/Nav'
// import logo from '../logo/quizzard.png'
import "./styles/quizzard.css";

export default function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/" className='navbar fixed-center'>
      <Nav.Item>
        <Nav.Link href="home">Quizzard
        {/* <img src={logo} alt="quizzard logo" className="App"/> */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="flashpack">Flashpack</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link href="login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="Signup">Signup</Nav.Link>
      </Nav.Item> */}
    </Nav>
  ); 
}
