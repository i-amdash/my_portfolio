import React from 'react';
import image from '../assets/about.jpeg';

const about = () => {
  return (
    <section className="about section" id="about">
        <div className='about__container container grid'>
            <div className="about__img-wrapper">
                <img src={image} alt="profile-img" className="about__img" />
                <img src={image} alt="profile-img" className="about__img" />
                <img src={image} alt="profile-img" className="about__img" />
                <img src={image} alt="profile-img" className="about__img" />
            </div>

            <div className="about__content">
                <h2 className="section__title" data-title="who am i?" >
                    i'm adedoyinsola ashimi, i build web and mobile applications 
                </h2>

                <p className="about__description">
                   i am a software engineer and a chartered accountant, i currently work at landmark africa building and managing the company's web and mobile applications which span from hotel booking to ecommerce applications on both web and mobile.
                   </p>
                <ul className="about__data grid">
                    <li className="data__item">
                        <h3 className="data__title">name:
                        </h3>
                            <span className="data__description">adedoyinsola ashimi</span>
                    </li>
                    <li className="data__item">
                        <h3 className="data__title">stack:
                        </h3>
                            <span className="data__description">flutter, react, vue, next, laravel</span>
                    </li>
                    <li className="data__item">
                        <h3 className="data__title">from:
                        </h3>
                            <span className="data__description">lagos, nigeria</span>
                    </li>
                    <li className="data__item">
                        <h3 className="data__title">email:
                        </h3>
                            <span className="data__description about__link">ashimidoyin@yahoo.com</span>
                    </li>
                </ul>

                <div className="about__buttom">
                    <a href="index.html" className="btn">Download CV</a>
                    <div className="about__social-links">
                        <a href="index.html" className="about__social-link">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="index.html" className="about__social-link">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="index.html" className="about__social-link">
                        <i class="fa-brands fa-linkedin"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about