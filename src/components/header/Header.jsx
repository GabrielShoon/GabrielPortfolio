import React, { useState } from 'react'
import "./header.css"
import logo from '../../assets/logo.png'

function Header() {
    /* =============== Toggle Menu =============== */
    const [Toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className='nav container'>

                <a href='index.html' className='nav__logo-mobile'>
                    <img src={logo} alt="GS Logo" />
                </a>
                
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href='index.html' className='nav__logo'>
                                <img src={logo} alt="GS Logo" />
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Qualification
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#certifications" className="nav__link">
                                <i className="uil uil-briefcase nav__icon"></i> Certifications
                            </a>
                        </li>

                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header