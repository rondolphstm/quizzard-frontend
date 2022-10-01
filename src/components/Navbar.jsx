import { Nav } from 'react-bootstrap'
// import logo from '../logo/quizzard.png'
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <Nav defaultActiveKey="/" className='App'>
      <Nav.Item>
        <Nav.Link href="/">Quizzard
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


