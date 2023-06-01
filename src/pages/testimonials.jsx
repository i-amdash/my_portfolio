import React from 'react'
import { profile, about } from '../assets'

const testimonials = () => {
  return (
    <section className='testimonials section'>
        <h2 className="section__title title-center" data-title='testimonials'>what my clients say</h2>
        <div className="testimonials__container container grid">
            <div className="testimonials__item">
                <p className="testimonials__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem numquam error impedit labore autem veniam perferendis accusamus quaerat atque expedita optio laudantium fugiat cum temporibus quis, reprehenderit molestias reiciendis ea magnam maxime maiores. Tenetur saepe perferendis reiciendis? Quidem, unde.</p>
                <div className="testimonials__data">
                    <img src={profile} alt="testimonial__image" className="testimonials__img" />
                    <div>
                        <h3 className="testimonials__name">john wick</h3>
                        <span className="testimonials__identity">lagos, nigeria</span>
                    </div>
                </div>
            </div>
            <div className="testimonials__item">
                <p className="testimonials__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem numquam error impedit labore autem veniam perferendis accusamus quaerat atque expedita optio laudantium fugiat cum temporibus quis, reprehenderit molestias reiciendis ea magnam maxime maiores. Tenetur saepe perferendis reiciendis? Quidem, unde.</p>
                <div className="testimonials__data">
                    <img src={about} alt="testimonial__image" className="testimonials__img" />
                    <div>
                        <h3 className="testimonials__name">lord luggard</h3>
                        <span className="testimonials__identity">anambra, nigeria</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default testimonials