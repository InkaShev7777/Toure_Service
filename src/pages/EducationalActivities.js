import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Carousel } from 'react-responsive-carousel'

export const EducationalActivities = () => {

    const images = [
        { src: 'https://i.ibb.co/0Xz8WPs/2024-04-25-15-49-48.png' },
        { src: 'https://i.ibb.co/YbhDbjg/2024-04-25-15-49-34.png' },
        { src: 'https://i.ibb.co/4mWQvy4/1307106769-04.png' },
        { src: 'https://i.ibb.co/BVXq0nP/1307106737-03.png' },
        { src: 'https://i.ibb.co/5RdRFS6/1307106732-05.png' },
        {src: 'https://i.ibb.co/0VfH5TK/1307106729-01.png'},
        {src: 'https://i.ibb.co/mT1ys9M/1307106696-02.png'},
        {src: 'https://i.ibb.co/v1xnxnj/20201119-173219.jpg'}
    ]
    return (
        <div>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">Виховна робота</h2>
                    <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
                        {images.map((image, index) => (
                            <div className="carousel-container" key={index}>
                                <img src={image.src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='wrapper'>
                        <p className='news__card-desc'><b>Самоврядування</b> – це реальний безперервний процес залучення учнів до громадського життя. Це педагогічна технологія, яка сприяє розвитку суспільних якостей в системі демократичних взаємин колективу на принципах самореалізації, самодіяльності, самоорганізації та самодостатності особистості.</p>
                        <br></br>
                    </div>
                </div>
            </section>
            <div>
                <div style={{marginTop:'-5%'}} className='wrapper'>
                    <h3 className="places__title section-title">Гурткова робота</h3>
                </div>
                <div className="staff__wrapper">
                    <div className="staff__item">
                        <iframe className='staff__element' src="https://www.youtube.com/embed/aPKsLDO0f68?si=GDnqJcXheqzfUmTv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div style={{marginTop:'-8%'}} className='wrapper'>
                    <h3 className="places__title section-title">Bолонтерський рух</h3>
                </div>
                <div className="staff__wrapper">
                    <div className="staff__item">
                        <iframe className='staff__element' src="https://www.youtube.com/embed/nMZlXytkb14?si=l43C8kf5KR25AORI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
