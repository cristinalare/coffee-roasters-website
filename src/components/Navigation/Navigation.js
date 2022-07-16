import {NavLink, useLocation} from 'react-router-dom';
import logo from './logo.svg';
import menuClose from './icon-close.svg';
import menuOpen from './icon-hamburger.svg';
import './Navigation.css';
import React, { useState, useEffect } from 'react';

export default function Navigation () {
    const [activeMenu, setActiveMenu] = useState(false);
    const {pathname} = useLocation();

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    useEffect(() => {
        setActiveMenu(false);
    }, [pathname]);

    return (
        <nav>
            <img className="logo-img" src={logo} alt='logo' />
            <div className="mobile-icon">
                <img src={activeMenu ? menuClose : menuOpen} alt="menu icon" onClick={toggleMenu}/>
            </div>
            <ul className={activeMenu ? 'open' : undefined}>
                <li>
                    <NavLink  
                        to="/"
                        className={ ({ isActive }) => isActive ? "active-nav" : "inactive-nav"}
                        >
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink  
                        to="/about"
                        className={ ({ isActive }) => isActive ? "active-nav" : "inactive-nav"}>
                        about us
                    </NavLink>
                </li>
                <li>
                    <NavLink  
                        to="/create-a-plan"
                        className={ ({ isActive }) => isActive ? "active-nav" : "inactive-nav"}>
                        create your plan
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}