import React from 'react'

const contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className="section__title title-center" data-title='get in touch'>contact me</h2>
        <div className="contact__container container grid">
            <div className="contact__details">
                <div className="contact__item">
                    <i className="fa-solid fa-phone contact__icon"></i>
                    <a href='tel:+2349135525157' rel='noreferrer' target='_blank'>
                        <h3 className="contact__title">phone number</h3>
                        <span className="contact__data">09135525157</span>
                    </a>
                </div>
                <div className="contact__item">
                    <i className="fa-solid fa-envelope contact__icon"></i>
                    <a href='mailto:ashimidoyin@yahoo.com' rel='noreferrer' target='_blank'>
                        <h3 className="contact__title">mailing address</h3>
                        <span className="contact__data">ashimidoyin@yahoo.com</span>
                    </a>
                </div>
                <div className="contact__item">
                    <i className="fa-solid fa-location-dot contact__icon"></i>
                    <a href='https://www.google.com/maps/place/Lagos/@6.5483002,2.9721219,11z/data=!3m1!4b1!4m6!3m5!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057!16zL20vMGxuZnk?entry=ttu' rel='noreferrer' target='_blank'>
                        <h3 className="contact__title">residetial address</h3>
                        <span className="contact__data">lagos, nigeria</span>
                    </a>
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