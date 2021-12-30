import React from 'react'

const TicketsMessage = ({ord}) => {
    return (
        <div className='container'>
            <h2 style={{ color: 'red', fontSize: '17px' }}>
                Id de la compra: {ord.id}
            </h2>
            <h2 style={{ fontSize: '15px' }}>Fecha: {ord.date}</h2>
            <h2 style={{ fontSize: '15px' }}>
                Nombre de los productos:{' '}
                {ord.items.map((prod, index) => (
                    <ul key={index}>
                        <li>
                            {prod.name} ${prod.price} x {prod.quantity}
                        </li>
                    </ul>
                ))}
            </h2>
            <h2 style={{ fontSize: '15px' }}>Total: ${ord.total}</h2>
        </div>
    )
}

export default TicketsMessage