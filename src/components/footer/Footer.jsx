import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <section className="contact section" id="contact">
        <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Mohamed Minhal</h1>
            <ul className="footer__list">
            <li>
                <div className="footer__email">
                <h3 className="footer__text">Email me for Anything at: </h3>
                <a href="mailto:m15hassa@torontomu.ca" className='footer__link'>m15hassan@torontomu.ca</a>
                </div>
            </li>
            </ul>
            <div className="footer__social">
            <a href='https://www.linkedin.com/in/mohamed-minhal-ali/' rel="noreferrer" className='home__social-icon' target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>

            <a href='https://github.com/minhal15' rel="noreferrer" className='home__social-icon' target="_blank">
                <i class="bx bxl-github"></i>
            </a>
            </div>

            <span className="footer__copy">
            &#169; Mohamed Minhal Ali. All rights reserved
            </span>
        </div>
        </footer>
    </section>
    
  )
}

export default Footer;
