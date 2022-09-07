import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/" className='navbar fixed-center'>
      <Nav.Item>
        <Nav.Link href="./"> <img src = "quizzard.png" alt="quizzard logo"></img></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./login">Login/Signup</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./flashpack">Flashpack</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

