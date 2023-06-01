import React from 'react'

const contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className="section__title title-center" data-title='get in touch'>contact me</h2>
        <div className="contact__container container grid">
            <div className="contact__details">
                <div className="contact__item">
                    <i className="fa-solid fa-phone contact__icon"></i>
                    <div>
                        <h3 className="contact__title">phone number</h3>
                        <span className="contact__data">09135525157</span>
                    </div>
                </div>
                <div className="contact__item">
                    <i className="fa-solid fa-envelope contact__icon"></i>
                    <div>
                        <h3 className="contact__title">mailing address</h3>
                        <span className="contact__data">ashimidoyin@yahoo.com</span>
                    </div>
                </div>
                <div className="contact__item">
                    <i className="fa-solid fa-location-dot contact__icon"></i>
                    <div>
                        <h3 className="contact__title">residetial address</h3>
                        <span className="contact__data">lagos, nigeria</span>
                    </div>
                </div>
            </div>

            <form action="" className="contact__form">
                <div className="form__group">
                    <div className="form__input">
                        <input type="text" placeholder='name' className="input__control" />
                    </div>
                    <div className="form__input">
                        <input type="email" placeholder='email' className="input__control" />
                    </div>
                </div>
                    <div className="form__input">
                            <input type="text" placeholder='subject' className="input__control" />
                    </div>
                    <div className="form__input">
                        <textarea name="message" id="" cols="30" rows="10" className='input__control textarea' placeholder='message'></textarea>
                    </div>
                    <button className='btn contact__btn'>send message</button>
            </form>
        </div>
    </section>
  )
}

export default contact