import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../../components/Footer';

export const MoreCareerGuidance = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState();
    const images = [{ src: 'https://previews.dropbox.com/p/thumb/ACSC1NgQWAr3alHGGsL-hz3eGYjqHWsLVhu324ghmT1OZUjBPNrdap-_NYnhz_ktxhEsHPeO1N82Puy4imP1w_Cchl2l1B917Iv08Ss6zm5XFybNv3UplPER5dMhNY7Mg5hrNREzlOEeNLMfT8mQ4TPUN0f9HNgT-bDPLmjAbPN7ngwYk3LyhleoJwCMQqwO8AZFxMYGTmPiwGi-Z7ULqn8ogk616ZPARya1CDjLoNCxZC4xnfdxc5zVL_yl4VuX7tsnHhlr0jq8clylLAFc05irDG78kTpg7JygyHJcQgzTHKFvhIPDiPEOQuiGjfdm1-VhY2LtlfPDvNC2DiBeV_Xk/p.jpeg' }];

    useEffect(() => {
        console.log(id);
        if (id == '9') {
            setTitle('Прийом здобувачів освіти на базі 9 класу');
            const desc_ = <div>
                <p className='news__card-desc'>ДПТНЗ “Дніпровський центр ПТОТС” є державним професійним навчальним закладом, який входить в систему безперервної освіти України, забезпечує реалізацію потреб особистості в здобутті професійної освіти, оволодінні робітничими професіями, кваліфікацією відповідно до її інтересів, здібностей, стану здоров’я та соціального замовлення суспільства та держави. У своїй діяльності Центр керується Законом України “Про освіту”, Законом України “Про професійну (професійно-технічну) освіту” та іншими нормативно-правовими актами України.</p>
                <p className='news__card-desc'>ДПТНЗ “Дніпровський центр ПТОТС” несе відповідальність: перед особою, батьками, державою, суспільством за виконання функцій та завдань, які покладені на нього; за життя та здоров’я учнів, працівників закладу під час освітнього процесу; при порушені їх прав і свобод та інше, що передбачено законодавством України.</p>
                <p className='news__card-desc'>Освітній процес в навчальному закладі будується на принципах педагогіки, спільній діяльності педагогічних працівників та учнів, батьків, трудового колективу підприємства-замовника. До його структури входить: теоретичне та виробниче навчання, виховна робота, фізичне виховання, позаурочна робота з учнями.</p>
                <p className='news__card-desc'>Зміст освітнього процесу і термін навчання робітничим професіям визначається навчальними планами, програмами, що розроблені навчальним закладом спільно з підприємством-замовником кадрів на основі типових навчальних планів і програм за вимогами державних стандартів професійної освіти.</p>
                <h3 className='news__card-desc'>У навчальному закладі на базі 9 класів з отриманням повної загальної середньої освіти ведеться підготовка з професії:</h3>
                <ul>
                    <li>Квітникар</li>
                    <li>Декоратор вітрин</li>
                </ul>
                <h3 className='news__card-desc'>Без отримання повної загальної середньої освіти на базі 9 класів за рахунок фізичних осіб ведеться підготовка з професій:</h3>
                <ul>
                    <li>Кухар</li>
                    <li>Кондитер</li>
                    <li>Перукар</li>
                    <li>Манікюрник</li>
                    <li>Педикюрник</li>
                    <li>Офіціант</li>
                    <li>Бармен</li>
                </ul>
                <h3 className='news__card-desc'>Без отримання повної загальної середньої освіти на базі 9 класів для осіб з вадами розвитку ведеться підготовка з професії:</h3>
                <ul>
                    <li>Квітникар</li>
                    <li>Декоратор вітрин</li>
                </ul>
                <h3 className='news__card-desc'>Посилання:</h3>
                <a className="news__card-more" href='https://drive.google.com/file/d/14bShES0qgWsL-x3sH1z-E3d5gSV0HJfM/view' target='blank'>ПРАВИЛА ПРИЙОМУ</a>
                <br></br>
                <br></br>
                <br></br>
            </div>

            setDesc(desc_);
        }
        else if (id == '11') {
            setTitle('Прийом здобувачів освіти на базі 11 класу');

            const desc_ = <div>
                <p className='news__card-desc'>ДПТНЗ “Дніпровський центр ПТОТС” є державним професійним навчальним закладом, який входить в систему безперервної освіти України, забезпечує реалізацію потреб особистості в здобутті професійної освіти, оволодінні робітничими професіями, кваліфікацією відповідно до її інтересів, здібностей, стану здоров’я та соціального замовлення суспільства та держави. У своїй діяльності Центр керується Законом України “Про освіту”, Законом України “Про професійну (професійно-технічну) освіту” та іншими нормативно-правовими актами України.</p>
                <p className='news__card-desc'>ДПТНЗ “Дніпровський центр ПТОТС” несе відповідальність: перед особою, батьками, державою, суспільством за виконання функцій та завдань, які покладені на нього; за життя та здоров’я здобувачів освіти, працівників закладу під час освітнього процесу; при порушені їх прав і свобод та інше, що передбачено законодавством України.</p>
                <p className='news__card-desc'>Освітній процес в навчальному закладі будується на принципах педагогіки, спільній діяльності педагогічних працівників та учнів, батьків, трудового колективу підприємства-замовника. До його структури входить: теоретичне та виробниче навчання, виховна робота, фізичне виховання, позаурочна робота з учнями.</p>
                <p className='news__card-desc'>Зміст навчально-виховного процесу і термін навчання робітничим професіям визначається навчальними планами, програмами, що розроблені навчальним закладом спільно з підприємством-замовником кадрів на основі типових навчальних планів і програм за вимогами державних стандартів професійної освіти.</p>

                <h3 className='news__card-desc'>У навчальному закладі на базі 11 класів ведеться підготовка за професіями:</h3>
                <ul>
                    <li>Флорист</li>
                    <li>Кухар</li>
                    <li>Майстер ресторанного обслуговування</li>
                </ul>

                <h3 className='news__card-desc'>На базі 11 класів в позабюджетні групи за рахунок фізичних осіб приймаються:</h3>
                <ul>
                    <li>Перукар (перукар-модельєр)</li>
                    <li>Адміністратор</li>
                    <li>Агент з організації туризму</li>
                    <li>Кухар</li>
                </ul>

                <h3 className='news__card-desc'>Посилання:</h3>
                <a className="news__card-more" href='https://drive.google.com/file/d/14bShES0qgWsL-x3sH1z-E3d5gSV0HJfM/view' target='blank'>ПРАВИЛА ПРИЙОМУ</a>
                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
        }

    }, [id]);

    return (
        <div>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">{title}</h2>
                    <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
                        {images.map((image, index) => (
                            <div className="carousel-container" key={index}>
                                <img src={image.src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='wrapper'>
                        {desc}
                    </div>
                </div>
            </section>
            <div>
                <div style={{marginTop:'-5%'}} className='wrapper'>
                    <h3 className="places__title section-title">Свято професій</h3>
                </div>
                <div className="staff__wrapper">
                    <div className="staff__item">
                        <iframe className='staff__element' src="https://www.youtube.com/embed/OA27BRiQZbo?si=doR4j-a_FOH7UPaW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
