import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="wrapper">
                    <div className="footer__item">
                        <div className="footer__logo">
                            <img className='footer__logo-pic' src="http://centr-tur.com/wp-content/uploads/2018/03/cropped-Novy_logotip3.png" alt="logo" />
                        </div>
                        <nav className='footer__nav'>
                            <ul className='footer__menu'>
                            <li className="footer__menu-item">
                                    <h3 className="footer__menu-title">
                                        Company
                                    </h3>
                                </li>
                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">About</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Team</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Carers</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Privati Polity</a>
                                </li>
                            </ul>

                            <ul className='footer__menu'>
                            <li className="footer__menu-item">
                                    <h3 className="footer__menu-title">
                                        Locations
                                    </h3>
                                </li>
                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Tokio</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Kayot</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Osaca</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Hokaido</a>
                                </li>
                            </ul>

                            <ul className='footer__menu'>
                            <li className="footer__menu-item">
                                    <h3 className="footer__menu-title">
                                        Social Media
                                    </h3>
                                </li>
                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">FaceBook</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Twitter</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Instagram</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">YouTube</a>
                                </li>

                                <li className="footer__menu-item">
                                    <a href="#!" className="footer__menu-link">Pinterest</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
