import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import { useState } from 'react'
// import Form   from './Createpacks';
// import Info from './Info'
import { FlashCards, FormCards} from './Cards'
import './styles/card.css'



export default function LeftTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="card">
            <Nav.Item>
              <Nav.Link eventKey="first">Create Flashcards</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Flashcards</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Create Flashcards</h2>
              <FormCards/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <FlashCards/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
  }