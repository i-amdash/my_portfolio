import React from 'react'

const services = () => {
  return (
    <section className=' services section' id='services'>
        <h2 className="section__title title-center" data-title="services">what I can do for you</h2>
        <div className="services__container container grid">
            <div className="services__item">
                <i className='fa-solid fa-pen-to-square services__icon'></i>
                <h3 className="services__title">web developer</h3>
                <p className="services__description">
                    more than 2 years of experience, providing quality service to companies and clients.
                </p>
                <span className="services__no">01</span>
            </div>
            <div className="services__item">
                <i className='fa-solid fa-laptop services__icon'></i>
                <h3 className="services__title">mobile app developer</h3>
                <p className="services__description">
                    more than 2 years of experience, providing quality service to companies and clients.
                </p>
                <span className="services__no">02</span>
            </div>
            <div className="services__item">
                <i className='fa-solid fa-chart-area services__icon'></i>
                <h3 className="services__title">chartered accountant</h3>
                <p className="services__description">
                    more than 2 years of experience, providing quality service to companies and clients.
                </p>
                <span className="services__no">03</span>
            </div>
            <div className="services__item">
                <i className='fa-solid fa-pen-to-square services__icon'></i>
                <h3 className="services__title">web developer</h3>
                <p className="services__description">
                    more than 2 years of experience, providing quality service to companies and clients.
                </p>
                <span className="services__no">04</span>
            </div>
            <div className="services__item">
                <i className='fa-solid fa-laptop services__icon'></i>
                <h3 className="services__title">mobile app developer</h3>
                <p className="services__description">
                    more than 2 years of experience, providing quality service to companies and clients.
                </p>
                <span className="services__no">05</span>
            </div>
            <div className="services__item">
                <i className='fa-solid fa-chart-area services__icon'></i>
                <h3 className="services__title">chartered accountant</h3>
                <p className="services__description">
                    more than 2 years of experience, providing quality service to companies and clients.
                </p>
                <span className="services__no">06</span>
            </div>
        </div>
    </section>
  )
}

export default services