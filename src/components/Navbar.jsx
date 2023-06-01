import React from 'react'

const Navbar = () => {
  return (
    <header className='header'>
    <nav className='nav container'>
        <a href='#home' className='nav__logo'>doyinsola</a>
        <ul className='nav__list'>
            <li className='nav__item'>
                <a href="#home" className="nav__link active-link">home</a>
            </li>
            <li className='nav__item'>
                <a href="#about" className="nav__link active-link">about</a>
            </li>
            <li className='nav__item'>
                <a href="#qualification" className="nav__link active-link">experience</a>
            </li>
            <li className='nav__item'>
                <a href="#services" className="nav__link active-link">services</a>
            </li>
            <li className='nav__item'>
                <a href="#work" className="nav__link active-link">portfolio</a>
            </li>
            <li className='nav__item'>
                <a href="#contact" className="nav__link active-link">contact</a>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar