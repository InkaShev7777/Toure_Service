import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';


export const MoreEducationsCenters = () => {
    const navigate = useNavigate();
    const handleOnClick = (id) => {
        navigate(`/education-centers/education-center/${id}`);
    }

    return (
        <>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <section className="news">
                        <div className="wrapper-full">
                            <h2 className="benefits__title">
                                НАВЧАЛЬНО-ПРАКТИЧНІ ЦЕНТРИ
                            </h2>
                            <div className="news__cards">
                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/8m9VgDh/1-1-e1519392696478.png"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc"> Навчально-практичний Центр “Ельторо”</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('eltoro')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <iframe className='news__card-thumb' src="https://www.youtube.com/embed/fSHsZ4-TAG0?si=uxziUnCtcxdzALf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                    <h2 className="news__card-desc"> Навчально-тренувальний центр “Солоха запрошує”</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('soloha')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/N7NCnNw/1-e1519375193548.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc"> Навчально-практичний центр «Стиль-V»</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('styleV')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/52z7wFN/1-e1519393447405.png"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc"> Навчально-тренувальний центр “Академія гостинності”</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('academy')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/qyWRFQy/1-e1519389704226.png"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc"> Навчально-тренувальний Центр «Глобус»</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('globe')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <div style={{marginTop:'-5%'}} className='wrapper'>
                <h3 className="places__title section-title">Інтерактивна карта НПЦ України</h3>
            </div>
            <div className="staff__wrapper">
                <div className="staff__item">
                <iframe className='staff__element' src="https://www.google.com/maps/d/embed?mid=1TdvcOAfyKPMI99OTJ_GIl-OV1wwpHKF7" width="640" height="480"></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}
