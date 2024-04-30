import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'

export const ProfessionalTraining = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <section className='benefits'>
                <div className="benefits__wrap">
                    <h2 className="benefits__title">Профорієнтація</h2>
                    <div style={{ marginBottom: '200px' }} className="achivements">
                        <div className="wrapper-full">
                            <div className="achivements__achievement achievement">
                                <div className="achievemt__pic">
                                    <iframe className='video__style' src="https://www.youtube.com/embed/R8MDgGjd6y8?si=OoaZT7KbtPEmuJ8K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div id="achivement" className="achivement__info">
                                    <h3 className="achivement__title">ТИЖДЕНЬ ПРОФЕСІЙНОЇ ОСВІТИ</h3>
                                    <p className="achivement__desc">
                                        З 22 по 26 травня в ДПТНЗ “Дніпровський центр ПТОТС” проводився тиждень професійної освіти . Святкова атмосфера, флористичний декор, професійність педагогів та креативність майстрів, смачний куліш, прохолодні напої, млинці на мангалі, запашна кава, майстер- класи із заплітання волосся, лялька- мотанка, вибухова бавовна – в результаті піднесений настрій у всього колективу та гостей свята професій!   Приєднуйся до нашої команди  і твоє життя наповниться святом та позитивом!
                                    </p>
                                </div>
                            </div>

                            <div id="s_centers" className="achivements__achievement achievement">
                                <div className="achivement__info">
                                    <h3 className="achivement__title">МАЙСТЕР-КЛАС З ПРИГОТУВАННЯ «ЛАТЕ-МАКʼЯТО АЙРІШ КРІМ»</h3>
                                    <p className="achivement__desc">
                                        Бармен (від англ. “bar” загородка, прилавок, стійка, які відгороджують продавця від покупця, та “man” чоловік) – людина за стійкою.
                                        Кожний робочий день бармена – це ціла низка психологічних контактів з відвідувачами. Адже люди, які звертаються до барменів, відрізняються один від одного і віком, і характером, і вимогами. А потреби, які привели їх до бару, ресторану чи кафе, у всіх спільні – відпочити від повсякдення, відсвяткувати якусь подію. Тому спілкування бармена з клієнтами дуже важлива річ. Своєю коректною поведінкою він може створити гарний настрій у відвідувачів. Як правило, барменів готують із кращих висококваліфікованих офіціантів. Вони повинні знати основні правила етикету і мати хороші манери, тобто вміти виявляти повагу та увагу до гостя.
                                        Бармен готує і реалізовує готові до споживання безалкогольні та слабоалкогольні напої, кондитерські вироби, холодні та гарячі страви, закуски, оформлює вітрини та прилавки, утримує їх у належному стані, експлуатує, та обслуговує аудіо та відео апаратуру, веде облік кількості реалізованих товарів.
                                        Професія бармена висуває до працівника ряд вимог. А саме, наявність у людини: охайності, розвиненої пам’яті, уваги, мислення, доброї координації рухів та швидкої реакції, розвитку сприймання, емоційної стабільності.
                                    </p>
                                </div>
                                <div className="achievemt__pic achievemt__pic_mob-first">
                                    {/* <img
                                        src="http://centr-tur.com/uploads/posts/2015-08/1441007982_npc.jpg"
                                        alt="some img"
                                        className="achivement__thumb"
                                    /> */}

                                    <iframe className='video__style' src="https://www.youtube.com/embed/CXt5vLpXMvs?si=KhojKHRkXinj7Q3z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}
