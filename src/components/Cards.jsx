import Info from './Info';
import Card from 'react-bootstrap/Card';
import Form from './Createpacks';

export function FlashCards() {
  return (
    <Card>
      <Card.Header>Flashcards</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            <Info/>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export function FormCards() {
  return (
    <Card>
      <Card.Header>Flashcards</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            <Form/>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

