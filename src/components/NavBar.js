import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <NavLink to="/" className="navbar-brand">MyShop</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item"><NavLink className="nav-link" to='/'>Home</NavLink></li>
                    <li className="navbar-item"><NavLink className="nav-link" to='/add'>Add Product</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;