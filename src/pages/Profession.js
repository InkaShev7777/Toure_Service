import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
export const Profession = () => {

    const navigate = useNavigate();
    const handleOnClick = (id) => {
        navigate(`/profession/about/${id}`);
    }

    return (
        <>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <section className="news">
                        <div className="wrapper-full">
                            <h2 className="benefits__title">
                                ПРОФЕСІЇ
                            </h2>
                            <div className="news__cards">
                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/NZWXJHN/wKCkg5cA.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Майстер ресторанного обслуговування</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('rest-service-master')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        {/* <iframe className='news__card-thumb' src="https://www.youtube.com/embed/fSHsZ4-TAG0?si=uxziUnCtcxdzALf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/Nr7TZNV/IMG-2460.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Офіціант. Бармен</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('waiter-barmen-admin')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/z2rBcyw/uCV0DJcv.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Кухар. Кондитер</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('confectioner')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/7StkzWZ/kmp43yIg.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Флорист</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('florist')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/3mDxvwh/xZ4FkqFQ.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Перукар (перукар-модельєр)</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('hair-master')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/4jfvTQ5/u3GRuUvA.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Манікюрник. Педикюрник</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('nail-master')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/DtnPCgk/1355994194-dsc03825.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Квітникар. Декоратор вітрин</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('flowers-maker')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/9hvf4GS/xa9T0OLw.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Адміністратор. Агент з організації туризму</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('admin')} >ДЕТАЛЬНІШЕ</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <div style={{marginTop:'-5%'}} className='wrapper'>
                <h3 className="places__title section-title">Професії навчального закладу</h3>
            </div>
            <div className="staff__wrapper">
                <div className="staff__item">
                    <iframe className='staff__element' src="https://www.youtube.com/embed/YdLB5ffXj-c?si=ENig6SsVnmzjGKtb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}
