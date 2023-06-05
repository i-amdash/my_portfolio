import React from 'react';
import { education, experience } from '../constants';

const qualification = () => {
  return (
    <section className='qualification section' id='qualification'>
        <h2 className="section__title title-center" data-title="my journey">qualifications</h2>
        <div className="resume__container container grid">
            <div className="resume__group">
                <h3 className="resume__heading">education</h3>
                <div className="resume__items">
                    { education.map((item) => (
                        <div className="resume__item">
                        <div className="resume__header">
                            <h3 className="resume__subtitle">{item.title}</h3>
                            <span className="resume__icon">{item.icon}</span>
                        </div>
                        <div className="resume__content">
                            <div className="resume__date-title">
                                <h3 className="resume__title">{item.subtitle}</h3>
                                <span className="resume__date">{item.date}</span>
                            </div>
                            <ul>
                            {item.description.map((item) => (
                                    <li className="resume__description">
                                        {item}
                                    </li>
                                    ))}
                            </ul>
                            
                        </div>
                    </div>
                    ))}
                    
                </div>
                </div>
            <div className="resume__group">
                <h3 className="resume__heading">experience</h3>
                <div className="resume__items">
                    {experience.map((item) => (
                        <div className="resume__item">
                        <div className="resume__header">
                            <h3 className="resume__subtitle">{item.title}</h3>
                            <span className="resume__icon">{item.icon}</span>
                        </div>
                        <div className="resume__content">
                            <div className="resume__date-title">
                                <h3 className="resume__title">{item.subtitle}</h3>
                                <span className="resume__date">{item.date}</span>
                            </div>
                            <ul>
                            {item.description.map((item) => (
                                    <li className="resume__description">
                                        {item}
                                    </li>
                                    ))}
                            </ul>
                            
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default qualification