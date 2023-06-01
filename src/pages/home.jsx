import React from 'react';
import image  from '../assets/profile.png';

const home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__container container grid">
            <div className="home__content">
                <span className="home__small">hello</span>
                <h1 className="home__title"> <span>i'm</span> adedoyinsola <br /> a <span>software engineer</span></h1>
                <p className="home__description">
                    i build web and mobile applications for companies and clients, both locally and foreign.
                    </p> 
                <div className="home__buttons">
                    <a href="#contact" className="btn">hit me up</a>
                    <a href="#work" className="btn btn-transparent">portfolio</a>
                </div>
            </div>
            <div className="home__img-wrapper">
                <img src={image} alt="profile" className="home__img" />
            </div>
        </div>
    </section>
  )
}

export default home;