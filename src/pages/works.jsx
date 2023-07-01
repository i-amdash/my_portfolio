import React from 'react'
import { project1, project2, project3 } from '../assets';

const works = () => {
  return (
    <section className='works section' id='work'>
        <h2 className="section__title title-center" data-title="my portfolio">recent works</h2>
        <div className="work__container container grid">
            <div className="work__card">
                <img src={project1} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">firstmed hospital</h3>
                    <span className="work__description">a template for an hospital website i created</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project2} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">health talk</h3>
                    <span className="work__description">a blog application for firstmed hospital</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project3} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">icezeik</h3>
                    <span className="work__description">a landing page for a client</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default works