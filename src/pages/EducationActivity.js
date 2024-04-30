import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'

export const EducationActivity = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">Навчальна діяльність</h2>
                    <section className="news">
                        <div className="wrapper-full">
                            <div className="news__cards">

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/C94c5gT/IMG-20220622-200428-004.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                ДКА в гр.Ф-21-1
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        21 червня 2022 року відбувся захист групи флористів на присвоєння кваліфікаційного 5 розряду згідно нового Державного стандарту. Це перший випуск з присвоєнням такого розряду. Вітаємо нових кадрів, які будуть розбудовувати нашу Україну і робити її ще гарнішою!
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://m.facebook.com/story.php?story_fbid=pfbid021ReB8uCHJx6ZqT9BjN6v6NPJeaD6mFMjmipznuehYVFv8qfRyGtMQw82y978uPz4l&id=100055532898506" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/5M0BHDB/IMG-20221112-115047-187.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                Проміжна атестація в гр.КК-20-22
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        10.11.22 в групі КК-20-22 відбулась проміжна кваліфікаційна атестація. Учні продемонстрували свої знання та навички, здобуті під час навчання та отримали кваліфікаційний розряд “Кухар 3 розряду”.
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/R2qCmvL/IMG-20220930-113337-030.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                Проміжна атестація в гр.ПМП-19-16
                                            </h3>

                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        Проміжна атестація відбулась 28.09.2022 у гр.ПМП-19-16. Учениці успішно виконали екзаменаційні роботи та отримали кваліфікацію “Манікюрник 2 розряду”, з чим їх щиро вітаємо!
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/FXV77Vg/IMG-20220520-220749-370.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                Проміжна атестація в гр. ПМП-21-8
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        20 травня 2022 року в гр.ПМП-21-8 відбулася проміжна атестація, на якій учні успішно захистили свої роботи з виконання чоловічих та жіночих стрижок, укладки і фарбування волосся та отримали кваліфікацію “Перукар 2 класу”, з чим їх хочемо привітати!
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/wM54wB4/IMG-96b4dc07acfd64496573866b9d341e7d-V.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                ДКА в гр.КК-18-14
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        21.12.2021 в групі КК-18-14 відбулась державна кваліфікаційна атестація на присвоєння робітничого розряду “Кондитер 3 розряду”. Спочатку учні виконували письмову частину, а потім захищали свої практичні роботи – різноманітні кондитерські вироби. Всі учні відповідально й творчо підійшли до проходження атестації, адже попереду – доросле життя вже кваліфікованого робітника, що має дуже затребувану професію “Кухар. Кондитер”! Тож вітаємо їх з успішним завершенням ще однієї сходинки свого життя!
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/5Bytdns/IMG-736a75069fbf15e4f2ced676c996c7fc-V.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                Проміжна атестація в групі ПМП-21-25
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        Сьогодні в групі ПМП-21-25 відбулась проміжна державна кваліфікаційна атестація на захист кваліфікації “Перукар”. Учні виконували чоловічу, жіночу класичні стрижки та фарбування “Тон в тон”.
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/MkzPLd5/F2-C0-E0-EC-33-BD-4-A8-C-BDDA-6-B7-D3513-F7-AB.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                ДКА в гр.ПМП-19-16
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        21.12.2022 відбулася державна кваліфікаційна атестація з професії «Перукар. Манікюрник. Педикюрник» в групі ПМП-19-16.
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>


                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/C9mp3h8/20210225-184112.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                Проміжна атестація в гр. КК-18-14
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        24 лютого 2021 року в групі КК-18-14 відбулася проміжна атестація на здобуття кваліфікації “Кухар 4 розряду”. Здобувачі освіти продемонстрували свої вміння на різних видах супу, готували лосося, медальйони, шніцелі, салати і десерти, деякі учні приємно вразили членів комісії ресторанною подачею страв. Майже всі учні отримали оцінки достатнього і високого рівня! З чим їх і вітаємо!
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>


                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://i.ibb.co/zFWjwnR/IMG-4a636f0d8fad49a2b213b606b6e688f8-V.jpg"
                                            alt="img"
                                        />
                                        <div className="news__card-stats">
                                            <h3 className="news__card-title">
                                                Проміжна атестація в гр. КМ-20-20
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="news__card-desc">
                                        17 червня 2021 року у Центрі проходила проміжна кваліфікаційна атестація на здобуття професії “Кухар” 3 розряду. Здобувачі освіти групи КМ-20-20 готували страви відповідно до стандарту та технологічних карт, а комісія мала змогу їх продегустувати та оцінити вміння та навички, здобуті під час навчання професії.
                                    </p>
                                    <a style={{ width: '160px' }} target='blank' href="https://www.facebook.com/dcptots" className="news__card-more">БІЛЬШЕ ФОТО</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    )
}
