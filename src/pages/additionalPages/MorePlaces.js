import React from 'react'
import { Header } from '../../components/Header';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../../components/Footer';

export const MorePlaces = () => {

    const images = [
        {src: 'https://i.ibb.co/yFyx7gh/IMG-3562.jpg'},
        {src: 'https://i.ibb.co/Wz4zJQh/IMG-3561.jpg'},
        {src: 'https://i.ibb.co/X24X6Xw/IMG-3490.jpg'},
        {src: 'https://i.ibb.co/897ZQtt/IMG-3473.jpg'},
        {src: 'https://i.ibb.co/Fn4YCHp/IMG-0276.jpg'},
        {src: 'https://i.ibb.co/gr6v1ss/DSC00884.jpg'},
        {src: 'https://i.ibb.co/xzLrRkm/DSC00872.jpg'},
        {src: 'https://i.ibb.co/JnnCC6F/DSC00491.jpg'},
        {src: 'https://i.ibb.co/99WhnLK/DSC00442.jpg'},
    ];
  return (
    <div>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">Кабінети навчального закладу</h2>
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
