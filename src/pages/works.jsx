import React from 'react'
import { 
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11,
    project12,
    project13,
    project14 
} from '../assets';

const works = () => {
    
  return (
    <section className='works section' id='work'>
        <h2 className="section__title title-center" data-title="my portfolio">my projects at random</h2>
        <div className="work__container container grid">
            <a href='https://firstmedhospital.netlify.app/' rel='noreferrer' target='_blank'>
            <div className="work__card">
                <img src={project1} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">firstmed hospital</h3>
                    <span className="work__description">a template for an hospital website i created</span>
                </div>
            </div>
            </a>
            <a href='https://health-talk.vercel.app' rel='noreferrer' target='_blank'>
            <div className="work__card">
                <img src={project2} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">health talk</h3>
                    <span className="work__description">a blog application for firstmed hospital</span>
                </div>
            </div>
            </a>
            <a href='https://icezeik.netlify.app' rel='noreferrer' target='_blank'>
            <div className="work__card">
                <img src={project3} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">icezeik</h3>
                    <span className="work__description">a landing page for a client</span>
                </div>
            </div>
            </a>
            <a href='https://www.hansartss.com' rel='noreferrer' target='_blank'>
            <div className="work__card">
                <img src={project4} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">hansartss</h3>
                    <span className="work__description">built for the art store hansartss, an ecommerce platform built with next 14, tailwind, three.js and prisma</span>
                </div>
            </div>
            </a>
            <a href='https://landmarkhotel.ng/' rel='noreferrer' target='_blank'>
            <div className="work__card">
                <img src={project5} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark hotels</h3>
                    <span className="work__description">built for hotel booking with php</span>
                </div>
            </div>
            </a>
            <a href='https://landmarkwaterview.com/' rel='noreferrer' target='_blank'>
            <div className="work__card">
                <img src={project6} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark waterview</h3>
                    <span className="work__description">built for the purchase of waterview apartments with php</span>
                </div>
            </div>
            </a>
            <div className="work__card" >
                <img src={project7} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark control panel</h3>
                    <span className="work__description">a dashboard built to maintain and track every transaction in the eco system with php</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project8} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark vendor dashboard</h3>
                    <span className="work__description">a dashboard built to handle food orders and transactions for beach vendors with vue.js</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project9} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark csr dashboard</h3>
                    <span className="work__description">a dashboard built to process company transactions for the beach alone with vue.js</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project10} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark citizen app</h3>
                    <span className="work__description">the landmark citizen app is a mobile app built with flutter. features include:
                        <ul>
                            <li>- beach ticket purchase</li>
                            <li>- furniture booking</li>
                            <li>- a wallet</li>
                            <li>- food ordering</li>
                            <li>- activity booking</li>
                            <li>- scan to pay</li>
                            <li>- event ticket purchase</li>
                            <li>and so many more</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="work__card">
                <img src={project11} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark vendor mobile app</h3>
                    <span className="work__description">a mobile app built to handle food orders and transactions for beach vendors with flutter</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project12} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">views</h3>
                    <span className="work__description">a mobile app with minimalistic ui built to mirror content apps like tiktok with kotlin and firebase. features include:
                    <ul>
                            <li>- video upload with caption</li>
                            <li>- authentication</li>
                            <li>- photo upload</li>
                            <li>- profile view</li>
                            <li>- video view with linear scroll</li>
                            <li>and so many more</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="work__card">
                <img src={project13} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">landmark citizen app</h3>
                    <span className="work__description">an upgraded version of the landmark citizen app with improved ui/ux and additional functionalities built with flutter</span>
                </div>
            </div>
            <div className="work__card">
                <img src={project14} className='work__img' alt='work img'/>
                <div className="work__details">
                    <h3 className="work__title">closure</h3>
                    <span className="work__description">a chat and call app built with flutter, agora rtc and firebase utilizing getx for state management</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default works