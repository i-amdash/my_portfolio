import React from 'react'

const skills = () => {
  return (
    <section className='skills section'>
        <h2 className="section__title title-center" data-title='my frontend stack'>
            i build applications with...
        </h2>
        <div className="skills__container container grid">
            <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">php</h3>
                        <span className="skills__no">85%</span>
                </div>
                <p className="skills__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in odit, quo vel tenetur delectus id atque? Eaque voluptate, eius quos tempora hic molestias, modi dolore quas, magni in laborum.
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: 305 }}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">javascript</h3>
                        <span className="skills__no">98%</span>
                </div>
                <p className="skills__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in odit, quo vel tenetur delectus id atque? Eaque voluptate, eius quos tempora hic molestias, modi dolore quas, magni in laborum.
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: 365 }}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">react</h3>
                        <span className="skills__no">98%</span>
                </div>
                <p className="skills__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in odit, quo vel tenetur delectus id atque? Eaque voluptate, eius quos tempora hic molestias, modi dolore quas, magni in laborum.
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: 365 }}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">flutter</h3>
                        <span className="skills__no">88%</span>
                </div>
                <p className="skills__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in odit, quo vel tenetur delectus id atque? Eaque voluptate, eius quos tempora hic molestias, modi dolore quas, magni in laborum.
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: 315 }}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">vue</h3>
                        <span className="skills__no">98%</span>
                </div>
                <p className="skills__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in odit, quo vel tenetur delectus id atque? Eaque voluptate, eius quos tempora hic molestias, modi dolore quas, magni in laborum.
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: 365 }}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="skills__item">
                <div className="skills__titles">
                    <h3 className="skills__name">tailwind</h3>
                        <span className="skills__no">95%</span>
                </div>
                <p className="skills__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in odit, quo vel tenetur delectus id atque? Eaque voluptate, eius quos tempora hic molestias, modi dolore quas, magni in laborum.
                </p>
                <div className="skills__bar">
                    <div className="skills__percentage" style={{ width: 345 }}>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills