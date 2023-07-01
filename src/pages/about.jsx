import React from 'react';
import image from '../assets/me.jpeg';
import { abouts, aboutInfo, socialLinks } from '../constants';

const about = () => {
  return (
    <section className="about section" id="about">
        <div className='about__container container grid'>
            <div className="about__img-wrapper">
                <img src={image} alt="profile-img" className="about__img" />
                <img src={image} alt="profile-img" className="about__img" />
                <img src={image} alt="profile-img" className="about__img" />
                <img src={image} alt="profile-img" className="about__img" />

                <img src={image} alt="profile-img" className="about__image" />
            </div>

            <div className="about__content">
                {
                    abouts.map((item) => (
                        <><h2 className="section__title" data-title="who am i?">
                            {item.title}
                        </h2><p className="about__description">
                                {item.description}
                            </p></>
                    ))
                }      
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
                <a href="#work" className="btn">portfolio</a>
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