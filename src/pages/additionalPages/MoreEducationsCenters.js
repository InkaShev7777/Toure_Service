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
                                            src="https://previews.dropbox.com/p/thumb/ACMbh6nvTNPxB75zxU4rVU92XTfxpfSQF_HYZC658GjYDW5q0aUL88pHaBEf1UsreFFR58ZtewxOVuJqwUrbntGDTvIroTts4pmfL5bpGx2GZDDbDO7s0ZptYuEyNp4ikB0CbPeamapI_DEHjpSrLWwvxDhicLcUUOtTscH592G8jQQ4C53C9ys9mwB4srbt2zCvKAspfNQUgqsZSFbqzhZcUf9UMd0VV7EOGipetsZYVWpQjSoTeVNSulJByDnxpKCXl5YchzkVAQ7-L9BE1CPDIvsP3A-u9RkmP2hoAN3q3s5O_1pdDR1lEmZFN5SxDG7_H6Ue6sb4ZIVrKOlx_UbG/p.png"
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
                                            src="https://previews.dropbox.com/p/thumb/ACPaEN_9h59povZIKTK_mbxhQSxfDlZ-V0ZCLfldvHRrOrdr4XdXcu2B2ccVccmdt_BXzQg8nLOuA7ZsZhpohSO12exKoN1Hwkd9yLkne3UUtDY3YEYuG73GXGXYL2sQ3tXT_8JLp-LVVoMpoTbMF_Pxe_-GHBU0CncIvoRrMmj6F6HF7w7z3L4xGtUKsbLK8PEY9VzeLCc31s_rS-ivMibvbCVAhpmPWd_gfH88eRaW_DQRgqWixWARUh_Vh1piV6ILi30rV6xMJYvuB5xEmu_cLrucj81BsvjK-9ybxGXK2xAJgSfcTTqR6bl7jIQuI-kzHuJI5wSzeHUtVxd4eqB7/p.jpeg"
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
                                            src="https://previews.dropbox.com/p/thumb/ACNO-2xj8w7QMIzAiBbWwrUIuWpl49Oyb4jNTP_CJ1ZTS53TPhZpcndUuc2jNEp8sAHK6KM6CkLfRxNHCEtIb8biXNGBHFQ6d6G6C6xBgxJ5FO7B2A0f0rfufoKLdMlt1X1prs86u8G9GIPABrm2-b_FrxV06aj8yZdkt6doCq6QEga3cmyrBsL8bOAk952jt-kgtNPAEA_sqQm5w-wmpruLicyJjW8LjcrTupp244VWZCJ9GkntbOoK82Ev1wovO52CiIxm9NPe4dYwNOH9ojxSzrOQucz-p1LL1ERScVfCRQVxONqv0iZmUZH17nYEXpP_sBe2QlCexukdaTBJlS1U/p.png"
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
                                            src="https://previews.dropbox.com/p/thumb/ACOCE_Ltmf_50ItwTEaSqa0x3DLs1A_RFLEM5lwchTzVL6uyzmAwJbeO4spPLm2WFKO_TF9dJGF2TSAagGjZRH6ofcHeJgc7tAfQbr2RF_MhX04pg42bVLfspT77Yg7W3GHDxknXs-0a8DeNfKbhe_wuZGuEQuPvLPQBr77Wk039AtAgG-TolH68KkrltYXBVuPjqRhmyREtYCUVNkKxX4Iq7f8T_KZriqW1AaMaOkMqqlzdIwITV3oXihTR02aIqhoW21rM-zNWOQUotv2DQA8jGZV-XmsDHjl72PtzdEPKbq65NIYkdwKPkrGUIXdCMJLXr_3A8kxMKimlPspJyTXU/p.png"
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
