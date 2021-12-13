import React from 'react';
import CartWidget from './CartWidget';
import './style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="containerNav">
            <div className="divlogo">
                <h2 className="logo"> <Link className="link" to="/"> Store</Link></h2>
            </div>
            <ul className="containerList">
                <li className="item"> <Link className="link" to="/"> Productos </Link></li>

                <li class="nav-item dropdown item">
                    <Link class="nav-link dropdown-toggle link" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Categorías </Link>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li className='itemCategory'><Link class="dropdown-item link" to="/category/saten"> Satén</Link></li>
                    <li className='itemCategory'><Link class="dropdown-item link" to="/category/algodon"> Algodón</Link></li>
                    <li className='itemCategory'><Link class="dropdown-item link" to="/category/fibrana"> Fibrana</Link></li>
                    <li className='itemCategory'><Link class="dropdown-item link" to="/category/transfer"> Transfer</Link></li>
                </ul>
                </li>

                <li className="item"> <Link className="link" to="/nosotros/"> Nosotros </Link></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar



