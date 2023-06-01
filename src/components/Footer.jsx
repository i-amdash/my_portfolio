import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <p className="footer__copyright">&copy; 2023 adedoyinsola, all rights reserved.</p>

                   <div className="footer__social-links">
                        <a href="index.html" className="footer__social-link">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="index.html" className="footer__social-link">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="index.html" className="footer__social-link">
                        <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
        </div>
    </footer>
  )
}

export default Footer