import React from 'react';
import { socialLinks } from '../constants';

const Footer = () => {
  
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <p className="footer__copyright">&copy; 2023 adedoyinsola, all rights reserved.</p>

                   <div className="footer__social-links">
                    {socialLinks.map((item) => (
                      <a href="/" className="footer__social-link">
                      <i class={item.icon}></i>
                  </a>
                    ))}
                        
                    </div>
        </div>
    </footer>
  )
}

export default Footer