import { useState} from "react"

export default function Form() {
  const [formSubmitted] = useState(false)
  const [title, setTitle] = useState('')
  const [errorMessage ] = useState("")
  const [form] = useState({})
  const [description, setDescription] = useState('')


function formSubmit(e) {
    // e.preventDefault() // stops the page refresh
            
     
      //  fetch("http://localhost:4440/createpack",{
       fetch("https://quizzard-web-app.web.app/createpack",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    

  //   console.log('this is form =>', form)

  // const updateForm = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value })
  // }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Vocab/Question</label>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <h3>{form.title}</h3>

        <label>Definition/Answer</label>
        <br />
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
            <br />
            {errorMessage}
          </h1>
        )}
      </form>
    </div>
  );
}
