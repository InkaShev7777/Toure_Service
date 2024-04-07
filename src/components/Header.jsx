import React from "react";
import "../styles/App.css";

export const Header = () => {
  return (
    <>
      <header className="header">
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
