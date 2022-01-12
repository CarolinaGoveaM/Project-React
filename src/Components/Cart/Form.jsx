import { useState } from 'react';

const Form = ({ setContact }) => {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleForm = (e) => {
        e.preventDefault()

        const objContact = {
            phone,
            name,
            email
        }
        setContact(objContact)
        setPhone('')
        setName('')
        setEmail('')
    }

    return (
        <div>
          <div>Contacto</div>
          <form onSubmit={handleForm}>
            <label>Telefono:
              <input
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label>Name:
              <input
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            <label>Email: 
              <input
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <button type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default Form