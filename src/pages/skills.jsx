import React from 'react';
import {frontendStack}  from '../constants'

const skills = () => {
  return (
    <section className='skills section' id='stack'>
        <h2 className="section__title title-center" data-title='my frontend stack'>
            i build applications with...
        </h2>
        <div className="skills__container container grid">
            {frontendStack.map((item) => (
                <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">{item.title}</h3>
                        <span className="skills__no">{item.percent}%</span>
                </div>
                <p className="skills__description">
                {item.description}
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: item.width }}>
                        <span></span>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    </section>
  )
}

export default skills