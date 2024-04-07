import "../styles/App.css";
import React, { useState, useEffect } from 'react';

export const Header = () => {
  
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsActive(scrollY > 50); // Update isActive based on scroll position
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to remove event listener on unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <a href="#!" className="header__link">Про нас</a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">Новини</a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">Абітурієнту</a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">Навчальна діяльність</a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">Науково-методична робота</a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">Виховна робота</a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">Профорієнтація</a>
                </li>
              </ul>
            </nav>
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
