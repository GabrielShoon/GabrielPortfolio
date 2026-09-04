import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gabriel</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>

                    <li>
                        <a href="#certifications" className="footer__link">Certifications</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/gabriel-shoon-7b56642b8" className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/GabrielShoon" className="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; 2026 Gabriel Shoon
                </span>
            </div>
        </footer>
    )
}

export default Footer