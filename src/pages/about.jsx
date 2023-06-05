import React from 'react';
import image from '../assets/about.jpeg';
import { aboutInfo, socialLinks } from '../constants';

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
                    {aboutInfo.map((item) => (
                        <li className="data__item">
                        <h3 className="data__title">{item.title}:
                        </h3>
                            <span className="data__description">{item.text}</span>
                    </li>
                    ))}
                    

                </ul>

                <div className="about__buttom">
                    <a href="index.html" className="btn">Download CV</a>
                    <div className="about__social-links">
                        {socialLinks.map((item) => (
                            <a href={item.link} className="about__social-link" target='_blank' rel="noreferrer">
                            <i class={item.icon}></i>
                        </a>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about