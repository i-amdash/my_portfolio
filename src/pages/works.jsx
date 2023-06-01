import React from 'react'
import { about01, about02,about03, about04 } from '../assets';

const works = () => {
  return (
    <section className='works section' id='work'>
        <h2 className="section__title title-center" data-title="my portfolio">recent works</h2>
        <div className="work__container container grid">
            <div className="work__card">
                <img src={about01} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">web design</h3>
                    <span className="work__description">this is a short description</span>
                </div>
            </div>
            <div className="work__card">
                <img src={about02} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">mobile app design</h3>
                    <span className="work__description">this is a short description</span>
                </div>
            </div>
            <div className="work__card">
                <img src={about03} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">accounting</h3>
                    <span className="work__description">this is a short description</span>
                </div>
            </div>
            <div className="work__card">
                <img src={about04} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">mobile and web engineering</h3>
                    <span className="work__description">this is a short description</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default works