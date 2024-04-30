import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export const MoreNews = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const imagesMuseum = [
        { 'src': 'https://i.ibb.co/1KPdM3T/UMSF2681.jpg' },
        { 'src': 'https://i.ibb.co/6mPZbTw/IMG-2843.jpg' },
        { 'src': 'https://i.ibb.co/sJnnMMD/IMG-2842.jpg' },
        { 'src': 'https://i.ibb.co/tD1m3M6/IMG-2840.jpg' },
        { 'src': 'https://i.ibb.co/M77RgC3/IMG-2838.jpg' },
        { 'src': 'https://i.ibb.co/SJScLfj/DWUV9674.jpg' }
    ];

    const imagesMmb_Day = [
        { src: 'https://i.ibb.co/HqXgVbJ/IMG-2631.jpg' },
        { src: 'https://i.ibb.co/5j0mgKT/IMG-2623.jpg' },
        { src: 'https://i.ibb.co/Vwrpg5P/IMG-2613.jpg' },
        { src: 'https://i.ibb.co/37vrRTt/IMG-2612.jpg' },
        { src: 'https://i.ibb.co/YQNqVBc/IMG-2603.jpg' },
        { src: 'https://i.ibb.co/fCQ3JQT/IMG-2597.jpg' },
        { src: 'https://i.ibb.co/9bHLGSt/IMG-2592.jpg' },
        { src: 'https://i.ibb.co/jMmx6mB/IMG-2584.jpg' },
        { src: 'https://i.ibb.co/CnNbpmC/IMG-2581.jpg' },
        { src: 'https://i.ibb.co/0f9tBJX/IMG-2580.jpg' }
    ]

    const imagesVolunteerDay = [
        { src: 'https://i.ibb.co/r2HDSrw/XYMZ9822.jpg' },
        { src: 'https://i.ibb.co/S6W3BQ0/VZJP3804.jpg' },
        { src: 'https://i.ibb.co/3yT8XQn/RWQE6317.jpg' },
        { src: 'https://i.ibb.co/hKpT97T/QJND3692.jpg' },
        { src: 'https://i.ibb.co/Kr4y2Xx/OOAZ8557.jpg' },
        { src: 'https://i.ibb.co/FnT1VTk/NMUQ7632.jpg' },
        { src: 'https://i.ibb.co/cJsp86F/MRBL7051.jpg' },
        { src: 'https://i.ibb.co/5MYhwJJ/KQSS0444.jpg' },
        { src: 'https://i.ibb.co/PGGJ2FF/KMCS1320.jpg' },
        { src: 'https://i.ibb.co/MVJrcb3/KEZZ9415.jpg' },
        { src: 'https://i.ibb.co/M6V4LzH/KCQR6529.jpg' },
        { src: 'https://i.ibb.co/y56TNGM/IIXE8307.jpg' },
        { src: 'https://i.ibb.co/m9mqvvM/IGDJ7431.jpg' },
        { src: 'https://i.ibb.co/W6pfR14/IABV2562.jpg' },
        { src: 'https://i.ibb.co/gjQSzFY/HRHG2935.jpg' },
        { src: 'https://i.ibb.co/jbL29tm/HNNRE6291.jpg' }
    ]

    const imagesCossacksDay = [
        { src: 'https://i.ibb.co/DDctYVS/IMG-20211012-113648.jpg' },
        { src: 'https://i.ibb.co/F6T4Z3k/IMG-20211012-115523.jpg' },
        { src: 'https://i.ibb.co/1KXqK3y/IMG-20211012-115515.jpg' },
        { src: 'https://i.ibb.co/q0TfLnL/IMG-20211012-113612.jpg' },
        { src: 'https://i.ibb.co/yRWXY5k/IMG-20211012-113530.jpg' },
        { src: 'https://i.ibb.co/2Mfs3D5/IMG-20211012-113321.jpg' }
    ]

    const imagesConstitutionDay = [
        { src: 'https://i.ibb.co/MRHfbTv/IMG-2728.jpg' },
        { src: 'https://i.ibb.co/kgDJJX2/IMG-2723.jpg' },
        { src: 'https://i.ibb.co/nDsfrJB/IMG-2711.jpg' },
        { src: 'https://i.ibb.co/XJSHJxx/IMG-2709.jpg' },
        { src: 'https://i.ibb.co/8x6dFL2/IMG-2707.jpg' },
        { src: 'https://i.ibb.co/6ZtwcZG/IMG-2705.jpg' },
        { src: 'https://i.ibb.co/G27Q12K/IMG-2703.jpg' },
        { src: 'https://i.ibb.co/2gcLs0m/IMG-2699.jpg' }
    ]

    const imagesNewYearTable = [
        { src: 'https://i.ibb.co/kcPwyXh/IMG-E2558.jpg' },
        { src: 'https://i.ibb.co/D8zz2wX/IMG-E2539.jpg' },
        { src: 'https://i.ibb.co/YkFMHCP/IMG-E2528.jpg' },
        { src: 'https://i.ibb.co/xqNgb4s/IMG-E2514.jpg' },
        { src: 'https://i.ibb.co/WKQKSDc/IMG-E2512.jpg' },
        { src: 'https://i.ibb.co/YWf548C/IMG-E2509.jpg' },
        { src: 'https://i.ibb.co/LkbhckS/IMG-E2502.jpg' },
        { src: 'https://i.ibb.co/025fqCj/IMG-E2499.jpg' },
        { src: 'https://i.ibb.co/xSKZVCm/IMG-E2497.jpg' },
        { src: 'https://i.ibb.co/pwNmS79/IMG-E2496.jpg' },
        { src: 'https://i.ibb.co/L0RWG9g/IMG-E2495.jpg' },
        { src: 'https://i.ibb.co/rM4vY28/IMG-E2485.jpg' },
        { src: 'https://i.ibb.co/WcnmyWB/IMG-2458.jpg' },
        { src: 'https://i.ibb.co/BCyhkDx/IMG-2453.jpg' },
        { src: 'https://i.ibb.co/X8B5gW4/IMG-2450.jpg' },
        { src: 'https://i.ibb.co/2W8RdkP/IMG-2447.jpg' },
        { src: 'https://i.ibb.co/d2ynWWn/IMG-2441.jpg' },
        { src: 'https://i.ibb.co/nzW8FQN/IMG-2440.jpg' }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id == 'musei') {
            setImages(imagesMuseum);
            setTitle('Наша подорож до музею історії Дніпра')
        }
        else if (id == 'emb_day') {
            setTitle('День вишиванки');
            setImages(imagesMmb_Day);
        }
        else if (id == 'volonreer') {
            setTitle('День волонтера')
            setImages(imagesVolunteerDay);
        }
        else if (id == 'cossacks') {
            setTitle('День Козацтва');
            setImages(imagesCossacksDay);
        }
        else if (id == 'constDay') {
            setTitle('День Конституції України');
            setImages(imagesConstitutionDay);
        }
        else if (id == 'newYear') {
            setTitle(' Новорічний стіл в українських традиціях');
            setImages(imagesNewYearTable);
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
                </div>
            </section>
            <Footer />
        </div>
    )
}
