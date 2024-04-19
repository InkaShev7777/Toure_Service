import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export const MoreNews = () => {
    const { id } = useParams();
    const [images,setImages] = useState([]);
    const [title, setTitle] = useState('');
    const imagesMuseum = [
        { 'src': 'https://previews.dropbox.com/p/thumb/ACN8KNc1kLzdps_Mf99txNGbJ_1Tmdnb4sBwTkMZBasjBckHjUqQxQd-WS3kzhxzCyPlH6zwu-Nt9Q8FC6ANEItUHidgJEeyt9A2rd3CXSS9x8-mFUFtBju-itMaj4hbJTSy6WKaorAsqRIiE_247_OsF_HkFyingimKkwLI5LOCbNVN2Bdsmc2XtmG8AH59eOZ62zr41eXfMcZ6YjJSJi7TlbwdtUj2cerIjpxZoJt62SoA8TfAgFRD5DphfrMvdKe69-ugDONHRyNHlFp8tgiQ2yhAPIp4CHl2rK5HaMZJQ9H3O6oQ5jTny9NxN5Ky_-fqCgPkAhxCqTF01lCZxlmi/p.jpeg' },
        { 'src': 'https://previews.dropbox.com/p/thumb/ACPrUnG2Uh6zBM6QjRQYlxnlO8vDT76VUX4MLjQxZ7vfVK1DyF0uS1Jrf8H4jV1Tj99uJFCaCTOOoQ2KMIhfZPrFxlz6ZwEdhKYBPNcYIgAueBliusLvE00RhI_YlPAU2JXNpuY1qcs1Eyp5EdGF5J8pk_--CiZ7MLUCQwNvd_YGCwFyx-lCVqvV5XNcKsYcnUv3as6547cvyOKTak7PwL8_zBkiSk5gDIl5gAbjfumnKNssz0AdwN3FlJDtnqYV-d3vFuRG_j_Qi0KGYWNRCCoQ3nif8fSXGAs-PzDI1SLupjsHVfY9HB9RP5HFdV56FFFt8MKEOifF8GxqhXLbQEvYTY7RonL2HYZz48SDaDUsrQ/p.jpeg' },
        { 'src': 'https://previews.dropbox.com/p/thumb/ACNE6h3pNh3-Jc5ztKkXG8TaUJQM63s3KxWaTekBSIPJzwJhOVUPID59gbf33hW6BNqRP-0vDgdwOGWu5cuFS2Nt8Am_u7Cit18IbyI2lI2BlqiC1ZDn2P2jPzKUMINLVn97DFPSsOEBaAgPEnop3F43qPMiuOWKkpQbeoVSPDckdzO508VIxYw1J52CTCzEL9Hbl91N5NVP-6lCmeIL5kH3Ua2EwQwhDCchvWKTmg4sBdzpR2qyEqiFt4HDea1WloTHzaLalKDzkSb2J9bEp4UCXmBXJKFviLS8oElctAUY0Nnv8En9zumOJ12cqWw56zoVuGDlLi1HMDPZcaaRA4ndt3mVAk3mW36cyFnKoczk5w/p.jpeg' },
        {'src': 'https://previews.dropbox.com/p/thumb/ACNsh67ZAw_xlrhncyljT1FCHTW2dy0f9Pwz9uJfKwigcFpLpduthLJGfWGZEcjkW_9MKm5g55ZKwhRv6h3Jdr7AgXZE6HB5sx2s5ISvk3duEDHPSlK2_KVwlbb-XmM5LrOu87DOBsVgcD3gfrk_LrlBjjGH4ioS9sQOnOk24vlA16c1Goy_ImS0XEb_0rRXMAudzyEyC_cg1rJ27C62dfFebrHDX1PqOQESeUSOcZFVO-mTSOKqS2O4g7pN-tZ0iyK4G92wy_BcB3sbMtQu51DIEk2V5-f3HMuI1UW30L3fdn036Nod8iRIVkU2sDvffyysWoH4j4rURI22rlUP3MfuY3NOZCBPc4Fx8T3vhLtkRQ/p.jpeg'},
        {'src':'https://previews.dropbox.com/p/thumb/ACOurCYVjG3nx7j-LKFV5rml50TXEHqnP1eeuazdPJ52BJzz-IhJKefDJFM2zfcdGkapr9UMV3R5TAl_w3ZZ21WCns2aKr6FOzaBbsz0nu9zvRkpGThRGy-K3nU7PuQo54QGIX7JJ8UZONiDpTZLSUf52ZrphsY9GMFHIPODGEa3KpleQUJYjE-MLXPlA0yvv8JtUvANiM7fU6s8eb7h_5_LSeQev-FknhhaxjMfIXyk4R1_CxLomv6T1zG56FeHq4HcYkvjHhzFmKwlTxPP1UGoQIass7NOoLXvf4WTDEpI-XdaRgSnSrL9zJ34RvlhHcDSaKuyDAc2cSvPiL4kQfOoNCq5meX3KpUSQ_lDNkEpMg/p.jpeg'},
        {'src':'https://previews.dropbox.com/p/thumb/ACNtpmmXStaOlABt22ootAzL-kFEGy1aMgEFahZMqmBAHWPt313BFrbFXlXOyKKPezsG7KdmoP5v9A09TbhvN_K4FGguC-j9uaKnlwYndyz-CGENe6GOZj56KGaVC1-z6iQmtlDxsuQj_HYLt1sklt8ZQ4-vgGoC3iV1gGIKIQeKQC3uLFYcw2uQ5H7-k2StJdkWYxAPlNWSnLPqcCF0KCeSiU1Sm-CCSnYk26Q0Z_pN76IwDwsWLos-KfS6Z8aGc4cTF7XTq1_vW3ajZhuSDwli0OajKxbQNe-7BFSvLFP_jlYKh0wAfjTbEMQSzALyhBGhD3x908QKZM2sZtfJzDwmD-cFHDNgR9Cdbu8QXKphXw/p.jpeg'}
    ];

    useEffect(() => {
        if (id == 'musei') {
            setImages(imagesMuseum);
            setTitle('Наша подорож до музею історії Дніпра')
        }
        else {

        }
    }, []);
    return (
        <div className="benefits">
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
            {/* <Footer /> */}
        </div>
    )
}
