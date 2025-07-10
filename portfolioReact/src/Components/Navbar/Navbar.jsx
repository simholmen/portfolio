import React, { useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'

import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" />
            <img src={menu_open} onClick={openMenu} alt="Menu" className='nav-mob-open' />
            <ul ref={menuRef} className="navmenu">
                <img src={menu_close} onClick={closeMenu} alt="Lukk meny" className="nav-mob-close" />
                <li>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p onClick={() => setMenu("home")}>Hjem</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p onClick={() => setMenu("about")}>Om meg</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#mywork'>
                        <p onClick={() => setMenu("mywork")}>Mitt Arbeid</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p onClick={() => setMenu("contact")}>Kontakt</p>
                    </AnchorLink>
                </li>
            </ul>
            <a href="https://www.linkedin.com/in/simenholmen/" className="navconnect"> LinkedIn </a>
        </div>
    )
}

export default Navbar
