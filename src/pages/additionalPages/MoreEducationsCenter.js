import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../../components/Footer';

export const MoreEducationsCenter = () => {
    const { id } = useParams();
    const [isVideo, setIsVideo] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState();
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState();

    const imagesEltoro = [{ src: 'https://i.ibb.co/8m9VgDh/1-1-e1519392696478.png' }];
    const imagesStyleV = [{ src: 'https://i.ibb.co/N7NCnNw/1-e1519375193548.jpg' }];
    const imagesSoloha =
        [
            { src: 'https://i.ibb.co/Cv4frFk/1419501466-p1040593.jpg' },
            { src: 'https://i.ibb.co/0C6qY7d/1419501392-1.jpg' },
            { src: 'https://i.ibb.co/T2yVF8c/1419501359-p1040592.jpg' },
            { src: 'https://i.ibb.co/dcGHgJ1/1419501354-p1040590.jpg' },
            { src: 'https://i.ibb.co/gb0JGN9/1419501353-dsc-0620.jpg' },
            { src: 'https://i.ibb.co/K6dXPV3/1419501353-dsc-0617.jpg' },
            { src: 'https://i.ibb.co/6DGQYRc/1419501315-dsc-0623.jpg' }
        ]
    const imagesAcademy =
        [
            { src: 'https://i.ibb.co/kgRmrgz/2.jpg' },
            { src: 'https://i.ibb.co/52z7wFN/1-e1519393447405.png' }
        ];
    const imagesGloab = [{src: 'https://i.ibb.co/qyWRFQy/1-e1519389704226.png'}]

    useEffect(() => {
        if (id == 'eltoro') {
            setTitle('Навчально-практичний Центр “Ельторо”');
            setImages(imagesEltoro);
            const desc_ = <p className='news__card-desc'>Навчально-практичний фітодизайнерський центр “Ельторо”, де учні на дослідних ділянках і за індивідуальними замовленнями висаджують дерева, кущі і квіти, вчаться правильно їх поєднувати. Вчаться створювати гармонійну, унікальну садову ділянку, щоб вона пасувала стилю її архітектурних будівель. Учні за індивідуальними замовленнями здійснюють озеленення офісів, інтер’єрів, приміщень, фітодизайн інтер’єра (прикрашають і декорують квітковими композиціями стіни, столи, фойє та будь-які приміщення).</p>
            setDesc(desc_);
        }
        else if (id == 'styleV') {
            setTitle('Навчально-практичний центр «Стиль-V»');
            setImages(imagesStyleV);
            const video_ =
                <div>
                    <div style={{marginTop:'-5%'}} className='wrapper'>
                        <h2 className="news__title section-title">
                            Навчально-практичний центр перукарського мистецтва "Стиль-V"
                        </h2>
                    </div>
                    <div className="staff__wrapper">
                        <div className="staff__item">
                            <iframe className='staff__element' src="https://www.youtube.com/embed/yRrayh48hpg?si=NOXlvRjHA3onJ5xl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            setVideo(video_);
            setIsVideo(true);
            const desc_ = <div>
                <p className='news__card-desc'>Метою створення НПЦ стало вдосконалення теоретичної та практичної підготовки фахівців професійно-технічної освіти нового типу, конкурентоздатних в умовах ринкової економіки.</p>
                <p className='news__card-desc'>Це один із підрозділів закладу, головними завданнями якого є:</p>
                <li>вдосконалення практичної підготовки учнів та слухачів ПТНЗ</li>
                <li>підвищення кваліфікації</li>
                <li>підготовка та перепідготовка робітників підприємств, організацій, установ.</li>
                <p className='news__card-desc'>Для учнів тут створено 28  робочих місць, які забезпечено новітнім професійним обладнанням. Такі умови дозволять максимально ефективно взаємодіяти майстру виробничого навчання з учнями, а також максимально втілити в реальний освітній простір ідею безперервного розвитку освітньої мотивації учнів і на практиці реалізувати сполучення «успішний учень – успішний  майстер – успішний навчально-практичний центр»</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Професія, за якою здійснюється підготовка</th>
                            <th>Категорія слухачів, для яких ведеться підготовка</th>
                            <th>Чисельність слухачів</th>
                            <th>Термін навчання</th>
                            <th>Вартість навчання 1 слухача</th>
                            <th>Обсяг навчальних годин, всього:</th>
                            <th>Документ, що отримає випускник</th>
                            <th>Наявність соціальних умов</th>
                        </tr>
                        <tr>
                            <td>5141 Перукар (перукар-модельєр)</td>
                            <td>Фізичні особи Безробітні, направлені центром зайнятості</td>
                            <td>7 осіб</td>
                            <td>5 місяців</td>
                            <td>8174, 9 грн.</td>
                            <td>759,25 годин</td>
                            <td>Свідоцтво</td>
                            <td>Можливість харчування у їдальні; можливість проживання у гуртожитку</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </div>
            setDesc(desc_)
        }
        else if (id == 'soloha') {
            setTitle('Навчально-тренувальний центр “Солоха запрошує”');
            setImages(imagesSoloha);
            const desc_ = <div>
                <p className='news__card-desc'>Центр створений професіоналами ресторанного бізнесу і має державну акредитацію. Наші програми створені і адаптовані до потреб ринку. Навчання проходить в добре обладнаних умовах, які відповідають останнім сучасним тенденціям ресторанного бізнесу. При навчанні слухачів використовуються авторські програми, засновані на досвіді кращих профільних навчальних закладів м. Москви і м. Києва; тут проводяться практичні роботи на сучасному устаткуванні (професійні барна і кавова станції, обладнаний в кращих українських традиціях зал, що імітує зал ресторану з використанням професійної сервіровки). Лабораторно-практичні роботи проводяться з використанням дегустаційного матеріалу ведучих світових виробників (горілки, текіли, джина, віскі, коньяку, рому, кашаси, лікерів, сиропів, кави італійських ростерів, чаю і тізани Китаю, Африки, Америки, Індії і Шрі-Ланки, а також вина Франції, Італії, Іспанії, Чилі, Аргентини, Австралії, США і вітчизняних виробників). При навчанні слухачів використовуються авторські інтерактивні методики з використанням навчальних відеоматеріалів.</p>
                <p className='news__card-desc'>Навчання проводиться за наступними спеціальностями:</p>
                <li>Продавець-консультант елітних спиртних напоїв (кавист)</li>
                <li>Офіціант</li>
                <li>Винний стюард</li>
                <li>Бармен</li>
                <li>Барист</li>
                <li>Бармен зі знанням вин</li>
                <li>Адміністратор</li>
                <li>Адміністратор зі знанням вин</li>
                <li>Тренінги для менеджерів ресторанів, барів, кав’ярень і пабів</li>
                <p className='news__card-desc'>Після закінчення навчання видаються дипломи, посвідчення і сертифікати державного зразка. Крім того, проводяться тренінги по вищезгаданих спеціальностях з видачею сертифікатів.</p>
                <p className='news__card-desc'>При колективних замовленнях від організацій можлива розробка спеціальних програм навчання з виїздом викладачів на місце навчання. Слухачам на час навчання надається житло (за додаткову платню).</p>
                <br></br>
            </div>
            setDesc(desc_);

            const video_ = <div>
                <div style={{marginTop:'-5%'}} className='wrapper'>
                    <h2 className="news__title section-title">
                        Ресторан в українському стилі "Солоха запрошує"
                    </h2>
                </div>
                <div className="staff__wrapper">
                    <div className="staff__item">
                        <iframe className='staff__element' src="https://www.youtube.com/embed/fSHsZ4-TAG0?si=4kBStfL-XMxewX3S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            setVideo(video_);
        }
        else if (id == 'academy') {
            setTitle('Навчально-тренувальний центр “Академія гостинності”');
            setImages(imagesAcademy);
            const desc_ = <div>
                <p className='news__card-desc'>Центр створений професіоналами ресторанного бізнесу і має державну акредитацію. Наші програми створені і адаптовані до потреб ринку. Навчання проходить в добре обладнаних умовах, які відповідають останнім вимогам ринку. При навчанні слухачів використовуються авторські програми, засновані на досвіді кращих профільних навчальних закладів України. При навчанні слухачів проводяться практичні роботи на сучасному устаткуванні (професійні барна і кавова станції, добре обладнаний зал, що імітує зал ресторану з використанням професійної сервіровки). Лабораторно-практичні роботи проводяться з використанням дегустаційного матеріалу ведучих світових виробників (горілки, текіли, джина, віскі, коньяку, рому, кашаси, лікерів, сиропів, кави італійських ростерів, чаю і тізани Китаю, Африки, Америки, Індії і Шрі-Ланки, а також вина Франції, Італії, Іспанії, Чилі, Аргентини, Австралії, США і вітчизняних виробників). При навчанні слухачів використовуються авторські інтерактивні методики з використанням навчальних відеоматеріалів. Навчання проводиться за наступними спеціальностями:</p>
                <li>Продавець-консультант елітних спиртних напоїв (кавист)</li>
                <li>Офіціант</li>
                <li>Винний стюард</li>
                <li>Бармен</li>
                <li>Бариста</li>
                <li>Бармен зі знанням вин</li>
                <li>Адміністратор</li>
                <li>Адміністратор зі знанням вин</li>
                <li>Тренінги для менеджерів ресторанів, барів, кав’ярень і пабів</li>
                <p className='news__card-desc'>Після закінчення навчання видаються дипломи, посвідчення і сертифікати державного зразка. Крім того, проводяться тренінги по вищезгаданих спеціальностях з видачею сертифікатів.</p>
                <p className='news__card-desc'>При колективних замовленнях від організацій можлива розробка спеціальних програм навчання з виїздом викладачів на місце навчання. Слухачам на час навчання надається житло (за додаткову платню).</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Професія, за якою здійснюється підготовка</th>
                            <th>Категорія слухачів, для яких ведеться підготовка</th>
                            <th>Чисельність слухачів</th>
                            <th>Термін навчання</th>
                            <th>Вартість навчання 1 слухача</th>
                            <th>Обсяг навчальних годин, всього:</th>
                            <th>Документ, що отримає випускник</th>
                            <th>Наявність соціальних умов</th>
                        </tr>
                        <tr>
                            <td>5123 Бармен</td>
                            <td>Фізичні особи Безробітні, направлені центром зайнятості</td>
                            <td>7 осіб</td>
                            <td>6.1 місяців</td>
                            <td>7589,34 грн.</td>
                            <td>840,25 годин</td>
                            <td>Свідоцтво</td>
                            <td>Можливість харчування у їдальні; можливість проживання у гуртожитку</td>
                        </tr>
                        <tr>
                            <td>5123 Офіціант</td>
                            <td>Фізичні особи Безробітні, направлені центром зайнятості</td>
                            <td>7 осіб</td>
                            <td>5,8 місяців</td>
                            <td>7550,14 грн.</td>
                            <td>859,25 годин</td>
                            <td>Свідоцтво</td>
                            <td>Можливість харчування у їдальні; можливість проживання у гуртожитку</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </div>
        setDesc(desc_);
        }
        else if(id == 'globe') {
            setTitle('Навчально-тренувальний Центр «Глобус»');
            setImages(imagesGloab);
            const desc_ = <div>
                <h2 className='news__card-desc'>Навчально-тренувальний центр «Глобус» – це:</h2>
                <li>Педагогічний колектив високої професійної майстерності.</li>
                <li>Координаційний центр співробітництва державних закладів, громадських, дитячих і молодіжних організацій, технікумів та ВНЗ.</li>
                <li>Школа розвитку особистості, надбання навичок здорового способу життя, працелюбства.</li>
                <li>Науково-методична база для проведення занять, екскурсій, походів.</li>
                <h3 className='news__card-desc'>У центрі працюють:</h3>
                
                <p className='news__card-desc'>Гуртки:</p>
                <li>Пішохідного та лижного туризму</li>
                <li>Туристів-скаутів</li>
                <li>Спортивного орієнтування</li>
                <li>«Школа виживання»</li>
                <li>Туристів-краєзнавців</li>
                
                <p className='news__card-desc'>Клуби:</p>
                <li>Спортивний клуб «Грація»</li>
                <li>Клуб «Дебют»</li>

                <p className='news__card-desc'>Традиційно центр проводить туристично-спортивні та краєзнавчі заходи:</p>
                <li>Змагання зі спортивного орієнтування «Полярна зірка», «Осінній лист»</li>
                <li>Туристичні змагання</li>
                <li>Туристично-краєзнавчі масові акції «День туризму», «День землі», «День здоров’я та спорту»</li>
                <li>Навчально-тренувальні походи, наметові табори</li>
                <li>Тематичні лекторії:
                    <ul>
                        <li>археологічний</li>
                        <li>історичний</li>
                        <li>етнографічний</li>
                    </ul>
                </li>

                <p className='news__card-desc'>В умовах навчально-тренувального центру учні вчаться надавати:</p>
                <li>Послуги агентсько-операторської фірми</li>
                <li>Організація екскурсій</li>
                <li>Страхування життя клієнта</li>
                <li>Перевезення туристів</li>
                <li>Розміщення клієнта</li>
                <li>Матеріальні послуги (додатково)</li>
                <li>Розробка й вибір туристських програм</li>
                <li>Екскурсійні маршрути</li>
                <li>Тури на відпочинок</li>
                <li>Автобусні тури</li>
                <li>Комбіновані маршрути</li>
                <li>Зимові тури</li>
                <li>Тури для школярів і студентів</li>
                <li>Бізнес-тури</li>
                <li>Бронювання місць в готелях</li>
                <li>Замовлення авіа- та залізничних квитків</li>
                <li>Екскурсійне та транспортне обслуговування</li>
                <li>Послуги гідів</li>
                <li>Замовлення квитків на культурно-масові заходи</li>
                <li>Організація і проведення конференцій і інших ділових заходів</li>

                <p className='news__card-desc'>Ми навчаємо учнів працювати оперативно, бути максимально ввічливими і уважними.</p>
                <br></br>
            </div>
            setDesc(desc_);
        }
    }, []);
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
            {video}
            <Footer />
        </div>
    )
}
