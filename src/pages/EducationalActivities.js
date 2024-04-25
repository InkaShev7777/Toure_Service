import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Carousel } from 'react-responsive-carousel'

export const EducationalActivities = () => {

    const images = [
        { src: 'https://previews.dropbox.com/p/thumb/ACTnYl0YrvVHQuLXx92Ezue-_CDcXJHvM55xoKWmBMgqDE1ttmTBSPs0JRnax6CGTqAU8b-_fcl8IjCfQHRboAIt_C-pFXGCRbweHLP0kWaKXNfaV94RX82TTZK2lklryWu1K3K9J9G2ySoCAY88axN25I1VImI35_-C2gdd-4A-G0apMsK8FJ8u6KdYGavLCuSBomNYsXOf6PJcbERxmCmIFfhsj5W0Q1HMaddgG3rzTaln3KVnoaXgLIVJR7UTFrSo7vnVdVblMMPBk_7wyEQ4KwO15jQqX2TlqlkNXgRLq2YmsWBxAhvGLpb_rFmTuwxHfA6B5c4RKJcl45MVP60J/p.png' },
        { src: 'https://previews.dropbox.com/p/thumb/ACRG061s4CUOCr8s2qZOzpkz3CgAPH4WrbGKGVASWLOg5l05NxkLIYd6PHKTSl9-moj-Y7gPggxyGxdQ8b3rRIkZRu2II30FlkNl9rX_ok9dKVVUTZcW928QT-2sfaRTWVxmjDju2ghzQCYSjxPEtUhbrZKH8M2XDU_tBfGeOod4G3LMjkRjOY-EDAa3klHPe-UnSOfirC0OtOwKZaYGLeXPD3tOi9N0CTQajMaG7xv4bhzPWe6RRJ20U0xOH4u9IrHhfC3iOyFi_iDDI48r9BT7rAaxXPwd1-YZo-2OysYFl4J8cbTjPm62CdyGSttW32dudn9nSP2l32mpcEiVdy0p/p.png' },
        { src: 'https://previews.dropbox.com/p/thumb/ACS2-yGOiDPgPAKLIWXIOSqwFFTztoe0evOPk7ZcU2XDe1cxWh2Zf9kwfN87jnzo_s36AoZ5CTSfp3I_TQnVkin-7RKsvFqNfIVekrb6l8LQsyZsOkt0HlwrPHkW4jCdD2T66WwvyXN_X3zzVWxvlhdJMGlMql13Pi8onsYi88fcF4mCvEfktxUKpHSMMKT6kwPi_8JXg4IU8HBC8UvwNrCJsMcfontIhL-BF1Xm-dlfIESwGeloN2GwIiFGMFFxqvrpcQx6WKQDpGKLx4YqI5bvqC57BKrgZsOuxY0P_IEXjXXJ9wIMlpC2nqme37Z07EJavKp1hmL1uGV1wG9GyuT4/p.png' },
        { src: 'https://previews.dropbox.com/p/thumb/ACRBlk9VQ2Y7Y5J6TwhAFSgtAX-MHgPz42fiWGEbKOW6t8qjuFs1BUg8snrC3QtyW3K_VDCkpUYHcUn9z3wy5LOYmup_ubWspUqvbSYq8ibh5JrqEXjlKAA362C8ffjD8qzcW64hKsB7uCO7-M_Lmj94yGfbD3PhLsVHXNZEeiAU-AdP-UqAo1PKZzYp-Ngrg9cYl2kL8TLQb106jx5aWY6sQEdzbihqgVetGhzZK6KrfMlYhb374T0YVbVfDnSHlcGaO7rOLXztrXQ_yhTTSTb6CE4O5Oi2QS1am2-w0JbZhZAFMcQjQQ55ps2Dcq5zZV_xdUz5KjR_AhBgGFQf2ZlH/p.png' },
        { src: 'https://previews.dropbox.com/p/thumb/ACSNPrphvRIyQ2fqHXEmuNXyUVXTCw1ajgk4iGaA0T6SW6sTayudXwAA7Op8NQCZyozf99pZRTShdooeizGLKyd7wiRjhbMttaAkhhCq_wZCaMmPeZQiPYxyCdvzpkN7xd4cUlVdHyAKlkuWbnhPnXqgXnpoXmrpcZs57yEpmY16oN7SuvTDzHYq2tQ9ugD-7BKxv6LhT2PpOfHZcjo7dXEePxWJzjAFxIocou0ZqzjelXLGOd6auWmOEJ8e9hKLssiLYC2LsNxwlm5AaGB9Wgy8m1B83HLvIHcnnzwhysjT6HZacxz3WIO3BDC-HN_JpJxwwXKPdIenDa8pZllxUl1A/p.png' },
        {src: 'https://previews.dropbox.com/p/thumb/ACSmazLjjtvotj5-Xi5PaS36SFmDtlBKJAbbTbIwS87PWbb700mSjRWrtm0q0cWMr-KKBwz_cS8yrOSn2ngFCFnRUo5mSwKdfX4T3m5SfyKXUKR1Wtjvohl0dshmHzro3uCi14OW7Y7cmYzN2scudxM9EYoDOnesQrs-204PlGNUnDlm9dPYNJ5Afuv4KmkkcHsZ-hjb9w1c51amhZFmtZSFt7v_OSAkMNn8rHBMBZP5LxW_jk8YmP6NMhnoTKpNM7GcvbxeqWbid40JWbK_iGJLRz49JgniEdJXGMfFWaebO3QUS6EfS70qjP466nuKLBbexRm86r2E7myOR2H3Uz3E/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACRVASdZC6oSk0CFgC0HhdF6lqCWAbvaLbXLooyRLhirD3M_fo94q5uoK4BiXUIUcQ_4bLcqUZIG9VRn_uQJ1YWL478GHSBkCTm_GHX_D5VDAbImWTs5B2pnMU4AUEc8QSryxRIFBv6uD8hWIy2MugM7pt_DVRscn_r6peN7eEJlsgFr9DXngLsd9NqaRcDQnfN4EPNJPtRpfx1Ck3JdY842liEiujNp-KO9u5mWVLAgg6nDTzMabnKPZooFNK5fkAjazBPvwKIaS71NL5dI8RoZCReFIg3O35spot9mnKDRgHlaxYpgaelomV_0RVrjUtB9x5XvNGlWnq-O-4OD7KF2/p.png'},
        {src: 'https://previews.dropbox.com/p/thumb/ACTZVYRgxNiA46J9RrAqzFUWsNeqUJoUhsEh_4IdJipTh9y_h7Qf2HefTARH1CkYNfnLzCzpq4lLEyziP3GIY2dN0c9pMwrY_zJgvFOCOJqTn3W2sEIXD6g_xqNUw_rPgJRXYoFdMmV7eW8gOKYF8ly2HD2-5DP8WPNvud-hkAPjRfW41X5JGuZIQIDYCXUmM-9VU6Y-yI6Syq3jPjd7pnJ9yfxJvqbPKiZgys25DQbIXcPbcX5H_oa2uTpPna_1hxSaJet5z4bOLfAc-Tg6bqsadmdu5o0MzJMJVu9P_iYbHcOjssY9QeybMxyaqidrh35bWIJpEXUMtGnAGOZRbsV-/p.png'}
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
