import './style.css';

const Form = ({ buyer, confirmOrder, handleChange}) => {
      return (          
          <form className='formOrder'>
            <div className='containerInput'>
            <label className='formLabel'>Nombre y Apellido</label>
            <input type='text' value={buyer.name} name="name" placeholder="Escribe tu nombre" required onChange={handleChange}/>
            </div>

            <div className='containerInput'>
            <label className='formLabel'>Teléfono</label>
            <input type='text' value={buyer.phone} name="phone" placeholder="Escribe tu número de tlf" required onChange={handleChange}/>
            </div>
            
            <div className='containerInput'>
            <label className='formLabel'>Correo</label>
            <input type='text' value={buyer.email} name="email" placeholder="Escribe tu correo" required onChange={handleChange}/>
            </div>

            <button className='formBtn' onClick={confirmOrder}>Finalizar Compra</button>
            
          </form>
      )
}

export default Form