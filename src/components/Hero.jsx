import { useState, useEffect } from 'react'

export default function Form({ handleClose, setStateFromChild }) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({})

  console.log('props here')

  useEffect(() => {
    if (form?.title?.length > 3 && form?.description?.length > 10) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [form])

  async function formSubmit(e) {
    e.preventDefault() // stops the page refresh

    if (!validForm) {
      setErrorMessage("Can't create pack")
      return
    }

    try {
      const results = await fetch( {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      console.log(results)
      const data = await results.json()
      console.log(data)

      setFormSubmitted(true)
      setErrorMessage('')
      setValidForm(true)

      handleClose()
      setStateFromChild(form)
    } catch (error) {
      console.error(error)
      setErrorMessage('There was an error creating Flashpack' + error.toString())
    }
  }

//   console.log('this is form =>', form)

  const updateForm = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className='App'>
      <h3>
      </h3>
      <form onSubmit={formSubmit}>
        <label>Vocab/Question</label><br/>
        <input
          type='text'
          name='title'
          // required
          value={form.title}
          onChange={updateForm}
        />
        <h3>{form.title}</h3>

        <label>Definition/Answer</label><br/>
        <textarea
          value={form.description}
          name='description'
          // required
          onChange={updateForm}
        />

        <h3>{form.description}</h3>

        <button onClick={() => setStateFromChild('hello father')}> send stuff back to parent</button>
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
  )
        }
