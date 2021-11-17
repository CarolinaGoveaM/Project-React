import React from 'react';
import './style.css';

const NavBar = () => {
    return (
        <nav className="containerNav">
            <div className="divlogo">
                <h1 className="logo"> <a className="link" href="/#"> Store</a></h1>
            </div>
            <ul className="containerList">
                <li className="item"> <a className="link" href="/#"> Inicio</a></li>
                <li className="item"> <a className="link" href="/#"> Productos</a></li>
                <li className="item"> <a className="link" href="/#"> Categorías</a></li>
            </ul>
        </nav>
    )
}

export default NavBar



