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
                  <a href="#!" className="header__link">
                    Home
                  </a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">
                    About
                  </a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">
                    Settings
                  </a>
                </li>
                <li className="header__item">
                  <a href="#!" className="header__link">
                    Exit
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="intro">
            
        </section>
      </main>
    </>
  );
};
