import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
export const Profession = () => {

    const navigate = useNavigate();
    const handleOnClick = (id) => {
        navigate(`/profession/about/${id}`);
    }

    return (
        <>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <section className="news">
                        <div className="wrapper-full">
                            <h2 className="benefits__title">
                                ПРОФЕСІЇ
                            </h2>
                            <div className="news__cards">
                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACPl3o0LKPmiVioed2OE4M2NIdogXqQyGD5d1k-YibnhYVnitP9BrKnZsAg7-YhDl8zbiJphAi_1s0BtEyra3YjhMvHXKypGn3gnd1jd9hEsQfa8VYlcT-_fc7c9MJ1FUC4x3_9ncwoq7sAKBwfO2eBn5ah5X77CpVr37jMCTspcMjorwUauKXusdyJ8fp8yc6MfBP9kA3DS_nwz8zZDAhGzghXATJHtCnadBqT9I3kqg-rT1FRIsJQs6TeRTm_QChPQz9escOgtRcY3yIs3VRyyVwH-KOE1rm7_NTeGFxtrEWHRc9UFmykaB0cCvqWjNhB2CkHgbZOrD-xT7gueKTv7/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Майстер ресторанного обслуговування</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('rest-service-master')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        {/* <iframe className='news__card-thumb' src="https://www.youtube.com/embed/fSHsZ4-TAG0?si=uxziUnCtcxdzALf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACPg7yVp0ttsmX8lNsq80pIvS9rH5kwQttZJ3Z37-uQWWY61jH-HZMunh63jPykzW1-d4UIGFsKxMHPvneElUNCCPUu89fH26qylNrZEFC6R-vLe6qPQuJQc8DxvB1veHb7IsVzgj9HPjjjqVBisqwrRSg0yWzGj3PaVRkx2MpfEpoJEDEIbvOQNUdrwOuik59khG8OOC7gRLb9QyxxdCrDY6ZVcyzkzlfoSWQRkho0tYZsHIwpDllGyxz-8UeysIJYvs4IFVsaQC6FgxYaOoY3xt1tIjvvZ1GQOA5NXZlq-hxJHJUdbshXSdFlvqZHrYkJIFS1q5MTjxg9UbAMMY0TW/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Офіціант. Бармен. Адміністратор</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('waiter-barmen-admin')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACPXZdtjFXW_8091_VLkWljHFKLMAMxNTjw8rCB70xpRRKatZQN4nAi8n_yyAvWJgMaoM8Z-7NSI3v5rvUK_g9VAU3I4mtKNApOyKCO5s_q7r_wFLxyHgQ3gjDtwKvUMQwWl0StVqfTPkP-kfkHi4cnKW1VGWUk5zRbtbzDaoWQZlZw9vGsVo7Ow-r68FkOoALQSCbr3lAUyNNV0te5KwYhhwVRaQlgKLsHngbZk59VhogOKK8O0goQS-hYJT6OrsFMlpD4i1Qx7BUhj5iqb63sYWWQUMMcHNtI6rf4lshMA2kMdfg0L_QGg5lVJtF5S3ckjILcZmDEGC3b3bqtKLDMs/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Кухар. Кондитер</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('confectioner')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACOjU8Xc1uTNeKdGx2EnPcvnEYD5Zg1o79CAL_AtR1eZ3-fSuVcEh6WxolYsQX1-zlPezCon-jd5rOpfY-U_cq025wWUKaOEyNhcH5eOzlfBeD29YCZmjt-qlpsUcJPW2SPUlt2_3tKMeTXhlbPKKvK2B7iM6Dd4Is3JSku7FwaEQE3Mw3Q4ZXyZ7TIS68ybbWYqMhcZppjWPzGmKj2hosFNpX20JiJIgmevni_aj3gSgqUqfOFu1f8P92B9YsGWM67q5Ti8tDR_9MOCdbXd_ZQ35NUbF7Zn6vb2JfHNIPFJs5sYiW8XzV5DvhVj_hzJJUG_AAIVxOsr4gPNd7Kt-CAQ/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Адміністратор. Агент з організації туризму</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('admin')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACNYx7p3KjqSZabJU8Djt_YzGRt7khX1-bJ3cyFDgPBzgN94_0YJN8AIBxa_3hzdH6s2uT9g_hM1edc8Cntr9aT4Wg2NVg8XCvjBUnqk0JY31ecjyfZ-RGB3z_op71TRbcPIvoxue4KZ_EzNy6HOSFsutphDDX3FyZ_MdZ55YUPg4pssC4H2qFqt_M_iL73kXej56akl3bM_i1HQCFGND724FCGEdVFX683Jywy6Cax0XKC3eFqKxGd4stOV8XWhC0gVIeEChoJ1TxGPNToQwHUrXYfaAzl8wsssSmes8Hy539PmwN6RcnueEwHve0VpndFi8oTu1W317P_wcui59aQJ/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Флорист</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('globe')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACNicg6EaGPXqqFVxxOYCQ0gscdKtuqR-Svk4wBFuE7ZkvI0mlVYVWWR78pi8R2fhv9vPTOfnjVQqGuiCdPhcrU8x7_j2T41RW0OTfbJyQi6lXWTzXtOoR0VxxkJL0IoGDG_UKrRKXJneWXqk0GkesPB2xmQHgVz-qrHX3ofLRmCoFXE1V8Bl4TCnTtd-0LagKVnz0zceeLN4CU4hTwpKb5NI520lGJisrQ8VXOE7eH-U_8uv9HkefcmZsdWwSFBIO5GxXiFkQhWwB_BvedZLsZ5LAzQ7IiJNALZKuaZ_oCBs-1cBGLjEgSZD12cibkRI3Bl7ZsNHFNSl6sHK3UZoR0l/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Перукар (перукар-модельєр)</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('globe')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACPFJQNL4eBHuUcaL3LM4X3QRCxUq0pGsQupjsouIB16Kyw2li-FzoakPMetfWLa7ejDdo1TpaSfbcUb_LJe8oKLY6WTp4AzoOlEJVYPP7hJechVWlUCnaXaDbSFU_NWHbxYzXmUCI8y18pR41JPx8n-Cmp5r5wEx5DjqCMs8VsIAspoLEDNz4461KIG8I1vBOfz4hkJIuRohTx7_RMvMOantT58exJxyqNrfn0w3Ok_rqU3pNRBd9qWH_Z8TEGFCyXRBtqwl_5BnPNw_-dfg1IyQmtih7-tltHLSpJgdA8u9VQxTuSnAXoPd4hmBcvqQAMgjdV8fAaCDcQR7-F_VkyS/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Манікюрник. Педикюрник</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('globe')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACOEHctZE-eMO0uymWMPCkQhOQxNnqRe4gDb5aop6EEQ5fl-sC4HWanNXI6iDQEli8w1ftmP3UkWj2sUK2QRTrmyXdPKlGuL7C2PCqLlfKIPkQd2Xf_CH08b8bdnRDNUuOdaujDJNxdV2FUw_C1_ALQqvxSjiENmbDUKuB-Hbm33iIjZ4WphUEExIdJf0RfUS8W6YkN7_rZbhfCPhoILtc3cKjlhRkKy5_QecHnmIbNBT1-qgo555PAACVKJ0YCAkJwtcC5K3ioyX8XMcwxK5Fd9sXfnmqezNBYGvc6eXH5xxqYyhuJq75PdvKpncBMJ9NV5yhCJNCPDC3huuy9cibv8/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Квітникар. Декоратор вітрин</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('globe')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <div className='wrapper'>
                <h3 className="places__title section-title">Професії навчального закладу</h3>
            </div>
            <div className="staff__wrapper">
                <div className="staff__item">
                    <iframe className='staff__element' src="https://www.youtube.com/embed/YdLB5ffXj-c?si=ENig6SsVnmzjGKtb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}
