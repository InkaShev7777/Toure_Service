import React from 'react'
import { Header } from '../components/Header'
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
export const Partners = () => {

    const images = [
        { src: 'https://i.ibb.co/jgMy5zG/IMAGE-2024-05-28-16-28-59.jpg' },
        { src: 'https://i.ibb.co/jT0h08j/DSC04089.jpg' },
        { src: 'https://i.ibb.co/p3VJvc8/DSC04121.jpg' },
        { src: 'https://i.ibb.co/THFzHrb/DSC04092.jpg' },
        { src: 'https://i.ibb.co/mbvHC79/DSC-0758.jpg' },
        { src: 'https://i.ibb.co/MgLG6K1/DSC-0755.jpg' },
        { src: 'https://i.ibb.co/yFfbdGB/DSC-0744.jpg' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">Партнери навчального закладу</h2>
                    <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
                        {images.map((image, index) => (
                            <div className="carousel-container" key={index}>
                                <img src={image.src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='wrapper'>
                        <h3 className='news__card-desc'>Початок співпраці з Університетом митної справи та фінансів</h3>
                        <p className='news__card-desc'>24 листопада 2023 року відбулась зустріч ректора Університету митної справи та фінансів Димитра Бочарова та директорки Дніпровського Центру Професійно-технічної освіти туристичного сервісу Ніни Войтович.</p>
                        <p className='news__card-desc'>Під час зустрічі були обговорені питання співпраці щодо запровадження спільних освітніх, наукових, культурних, спортивних, молодіжних, соціальних проєктів, а також їх умов реалізації. Також було розглянуто можливості спільної участі в міжнародних програмах, спрямованих на розвиток співробітництва та розширення можливостей молоді до самореалізації в сучасному суспільстві.</p>
                        <p className='news__card-desc'>За підсумком зустрічі було укладено угоду про співпрацю між Університетом митної справи та фінансів та Дніпровським Центром Професійно-технічної освіти туристичного сервісу з метою сприяння творчому та інтелектуальному розвитку випускників. Чекаємо на нові спільні проєкти.</p>
                        <h3 className='news__card-desc'>Святкування Масляної </h3>
                        <p className='news__card-desc'>Сумісний захід із партнерами: Університет митної справи та фінансів разом з Дніпровським центром професійно-технічної освіти  туристичного сервісу разом провели профорієнтаційно-культурний захід «Масляна 2024».</p>
                        <p className='news__card-desc'>Масляна в Україні - улюблене народом та веселе свято яке символізує відродження та продовження життя після зими.</p>
                        <p className='news__card-desc'>Своїм корінням воно сягає глибин язичницької доби у розвитку нашої української культури. Свято мало велике значення для аграрного суспільства, адже починалась весна, за стародавніми повір’ями новий рік життя.</p>
                        <p className='news__card-desc'>Вже за православної доби Масляна отримала дещо інше значення, вона трактується як підготовка до Великого посту, відтак виникли й інші назви Сирна або М'ясопусна седмиця.</p>
                        <h3 className='news__card-desc'>Майстер-клас</h3>
                        <p className='news__card-desc'>На базі навчальних лабораторій Університету митної справи та фінансів було проведено зустріч із фахівцями Асоціація U.C.M. – Itali. Проведено чудові майстер-класи від маестро по приготуванню справжньої італійської піци.</p>
                        <p className='news__card-desc'>Викладачі та здобувачі освіти спілкувались із студентами інших закладів, здобували практичні навички та ознайомились із можливостями по проходженню стажування в італійських закладах харчування та гостинності. Цікавим для освітнього процесу є відповідний сертифікат, який надає Асоціація U.C.M. – Itali кожному, хто вдало виконав всі умови стажування. </p>
                        <h3 className='news__card-desc'>Асоціації U.C.M.</h3>
                        <p className='news__card-desc'>Представники Дніпровського центру професійно-технічної освіти туристичного сервісу прийняли участь та отримали вражаючий досвід у презентації Асоціації U.C.M. – Itali нематеріальної спадщини ЮНЕСКО «Середземноморська дієта»: проведення майстер-шоу з приготування страв Середземноморської кухні.</p>
                        <br></br>
                    </div>
                </div>
            </section>
            <div style={{ marginTop: '-6%' }} className='wrapper'>
                <h3 className="places__title section-title">Університет митної справи та фінансів / Кафедра міжнародних відносин</h3>
            </div>
            <div className="staff__wrapper">
                <div className="staff__item">
                    {/* <iframe className='staff__element' src="https://www.youtube.com/embed/gGyljHwK0GY?si=ofE02twQSYaQ6qO3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <iframe className='staff__element' src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2FIntRelDept.UCF%2Fvideos%2F1078985027133383%2F&show_text=false&width=560&t=0" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}
