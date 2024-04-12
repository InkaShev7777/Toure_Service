import "../styles/App.css";
import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [countOfClick, setCountOfClick] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsActive(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {

    const burger = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header__nav-close');

    const linkButton = document.querySelectorAll('.header__link');
    for (let i = 0; i < linkButton.length; i++) {
      linkButton[i].addEventListener('click', () => {
        setCountOfClick(countOfClick + 1);
        if (window.innerWidth <= 1338) {
          setIsActiveBurger(false);
        }
      });
    }

    burger.addEventListener('click', () => {
      setIsActiveBurger(!isActiveBurger);
    });

    menuCloseItem.addEventListener('click', () => {
      setIsActiveBurger(!isActiveBurger);
    });
  }, [isActiveBurger]);

  return (
    <>
      <header className={isActive ? 'header header_active' : 'header'}>
        <div className="wrapper">
          <div className="header__wrapper">
            <div className="header__logo">
              <a href="/" className="header__logo-link">
                <img
                  className="header__logo-image"
                  src="http://centr-tur.com/wp-content/uploads/2018/03/cropped-Novy_logotip3.png"
                  alt="Дніпровський центр професійно-технічної освіти туристичного сервісу"
                ></img>
              </a>
            </div>
            <nav className={isActiveBurger ? 'header__nav header__nav_active' : 'header__nav'}>
              <ul className="header__list">
                <li className="header__item">
                  {/* <Link className="header__link" to="mainInfo" spy={true} smooth={true} offset={-270} duration={1000}>Про нас</Link> */}
                  <RouterLink className="header__link " to='/'>Про нас</RouterLink>
                  <ul className="submenu-header__list">
                    <li className="submenu-header__item">
                      <Link to="achivement" className="submenu-header__link" spy={true} smooth={true} offset={-110} duration={1000}>Нагороди</Link>
                    </li>
                    <li className="submenu-header__item">
                      <Link to="s_centers" className="submenu-header__link" spy={true} smooth={true} offset={-110} duration={1000}>Навчально-практичні центри</Link>
                    </li>
                    <li className="submenu-header__item">
                      <Link className="submenu-header__link" to="_news" spy={true} smooth={true} offset={-170} duration={1000}>Новини</Link>
                    </li>
                    <li className="submenu-header__item">
                      <Link to="staff" className="submenu-header__link" spy={true} smooth={true} offset={-110} duration={1000}>Наш колектив</Link>
                      {/* <ul className="submenu-header__list">
                        <li className="submenu-header__item">
                          <a className="submenu-header__link" href="#!">Test2.1</a>
                        </li>
                        <li className="submenu-header__item">
                          <a className="submenu-header__link" href="#!">Test2.2</a>
                        </li>
                        <li className="submenu-header__item">
                          <a className="submenu-header__link" href="#!">Test2.3</a>
                        </li>
                        <li className="submenu-header__item">
                          <a className="submenu-header__link" href="#!">Test2.4</a>
                        </li>
                      </ul> */}
                    </li>
                  </ul>
                </li>
                <li className="header__item">
                  {/* <a href="#!" className="header__link">Абітурієнту</a> */}
                  <RouterLink to='/enrollee' className="header__link">Абітурієнту</RouterLink>
                </li>
                <li className="header__item">
                  <RouterLink to='/education-activity' className="header__link">Навчальна діяльність</RouterLink>
                </li>
                <li className="header__item">
                  <RouterLink to='/scientific-and-methodical-work' className="header__link">Науково-методична робота</RouterLink>
                </li>
                <li className="header__item">
                  <RouterLink to='/educational-activities' className="header__link">Виховна робота</RouterLink>
                </li>
                <li className="header__item">
                  <RouterLink to='/career-guidance' className="header__link">Профорієнтація</RouterLink>
                </li>
                <li className="header__item">
                  <RouterLink to='/partners' className="header__link">Партнери</RouterLink>
                </li>
              </ul>
              <div className="header__nav-close">
                <span className="header__nav-close-line"></span>
                <span className="header__nav-close-line"></span>
              </div>
            </nav>
            <div className="header__burger burger">
              <span className="burger__line burger__line_first"></span>
              <span className="burger__line burger__line_second"></span>
              <span className="burger__line burger__line_third"></span>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="intro">
          <div className="wraper">
            <h1 className="intro__title">ДНІПРОВСЬКИЙ ЦЕНТР ПРОФЕСІЙНО-ТЕХНІЧНОЇ ОСВІТИ ТУРИСТИЧНОГО СЕРВІСУ</h1>
            <p className="intro__subtitle">Державний професійно-технічний навчальний заклад</p>
          </div>
        </section>
      </main>
    </>
  );
};
