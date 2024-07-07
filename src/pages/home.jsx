import React from 'react';
import image  from '../assets/me2.png';
import { homes } from '../constants';

const home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__container container grid">
            <div className="home__content">
                {homes.map((item) => (
                    <><span className="home__small">{item.small_text}</span><h1 className="home__title"> <span>i'm</span> adedoyinsola <br /> <span>a </span>software engineer</h1><p className="home__description">
                        {item.description}
                    </p></> 
                ))}   
                <div className="home__buttons">
                    <a href="#contact" className="btn">let's build together</a>
                    <a href="#work" className="btn btn-transparent">portfolio</a>
                </div>
            </div>
            <div className="home__img-wrapper">
                <img src={image} alt="profile"  className="home__img" />
            </div>
        </div>
    </section>
  )
}

export default home;