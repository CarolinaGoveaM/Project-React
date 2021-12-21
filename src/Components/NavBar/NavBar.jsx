import React from 'react';
import CartWidget from '../Cart/CartWidget';
import './style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="containerNav">
            <div className="divlogo">
                <h2 className="logo"> <Link className="link" to="/"> Store</Link></h2>
            </div>
            <ul className="containerList">
                <li className="item"> <Link className="link" to="/category/saten"> Satén </Link></li>
                <li className="item"> <Link className="link" to="/category/algodon"> Algodón </Link></li>
                <li className="item"> <Link className="link" to="/category/fibrana"> Fibrana </Link></li>
                <li className="item"> <Link className="link" to="/category/transfer">Transfer </Link></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar



