import Info from './Info';
import Card from 'react-bootstrap/Card';
import Form from './Createpacks';
import "./styles/card.css"

export function FlashCards() {
  return (
    <Card>
      <Card.Header>Flashcards</Card.Header>
      <Card.Body className="card" >
        <blockquote className="blockquote mb-0">
          <div>
            <Info/>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export function FormCards() {
  return (
    <Card >
      <Card.Header>Flashcards</Card.Header>
      <Card.Body className="card">
        <blockquote className="blockquote mb-0">
          <div>
            <Form/>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

