
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.scss';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
    <nav className='nav container'>
    <a href='#home' className='nav__logo'>doyinsola</a>
        <ul className="nav__list">
          {[
            {
              title: 'home',
              url: '#home',
            },
            {
              title: 'about',
              url: '#about',
            },
            {
              title: 'qualification',
              url: '#qualification',
            },
            {
              title: 'services',
              url: '#services',
            },
            {
              title: 'work',
              url: '#work',
            },
            {
              title: 'contact',
              url: '#contact',
            },
          ].map((item) => (
            <li
              key={
            `link-${item.title}`
          }
              className="nav__item"
            >
              <div />
              <a className='nav__link active-link' href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {
            toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className="nav__list">
                  {[
                    {
                        title: 'home',
                        url: '#home',
                      },
                      {
                        title: 'about',
                        url: '#about',
                      },
                      {
                        title: 'qualification',
                        url: '#qualification',
                      },
                      {
                        title: 'services',
                        url: '#services',
                      },
                      {
                        title: 'work',
                        url: '#work',
                      },
                      {
                        title: 'contact',
                        url: '#contact',
                      },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="nav__item"
                    >
                      <a className='nav__link active-link' href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          }
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
