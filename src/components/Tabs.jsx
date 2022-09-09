import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useState } from 'react'



export default function LeftTabs() {

  const [formSubmitted] = useState(false)
  // const [validForm, setValidForm] = useState(false)
  const [errorMessage] = useState('')
  const [form, setForm] = useState({title: '', description: ''})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // useEffect(() => {
  //   if (form?.title?.length > 3 && form?.description?.length > 10) {
  //     setValidForm(true)
  //   } else {
  //     setValidForm(false)
  //   }
  // }, [])

function formSubmit(e) {
    e.preventDefault() // stops the page refresh

    // if (!validForm) {
    //   setErrorMessage('Not a valid form')
    //   return
    // }

    {
      const results = fetch("http://localhost:4440/createpack", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title:title, description:description}),
      })
      .then(results=>results.json())
      .then(data => {
        console.log(data)
      })
      .catch(err =>{
        console.error(err)
      })
    }

    
  }

  console.log('this is form =>', form)

  const updateForm = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Create Flashpack</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Create Flashpack</h2>
              <div className='App'>
      <form onSubmit={formSubmit}>
        <label>Title</label>
        <input
          type='text'
          name='title'
          // required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <h3>{form.title}</h3>

        <label>Description</label>
        <textarea
          value={description}
          name='description'
          // required
          onChange={(e)=>setDescription(e.target.value)}
        />

        <h3>{form.description}</h3>

        {!formSubmitted && <button>Submit Form</button>}
        {errorMessage && (
          <h1>
            There was an error:
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Second Tab Content
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}



