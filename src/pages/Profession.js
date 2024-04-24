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
                                            src="https://previews.dropbox.com/p/thumb/ACR_l9yy4wFr0V_f2Jd393N2uIUoE6F-KuHOlQEyU1gp6DhTMGrgmWEgl_C_QFJhmLZypba7vssDV80zE5LMEFm148roziaNsmL8GB7GgxHPHf76-eToZWA6M6N92HewM2UrsnvPCJvqgPRQPi_xSm3YABFZ7xJBzwqBBrEaVyXl9JGowlPDvs9dV663AMYqfpRORICppUQlGFRdOvB_5fqYIFTrpmfstACP4INndnwcrPX6kJxSVAoJdHspcCfck3iFzWQtALzTOxp_BRn5OCIb6d5inGGxWQTvHFdGkfj4o614nfd14RU_n-Ov15ViIC_4vLjRIrj49rEYCV1Qyic6E7yC3SHGIj9aW3wKCkg5cA/p.jpeg"
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
                                            src="https://previews.dropbox.com/p/thumb/ACSsF4LIDF-ObV8uWMN7Hc4ySPDNH4AEBgfNtFtyV2-L7mqohvt0NYDdzbQhzBHISYVebQjXTiKou8I0BkJiXhqmOm73-zV9M9KmteSz0L4ytyHgtXItmv6aemt5523dJeieJj7DEQTzOWLYEvd6wEfl4ky7KD_fqYEtkGnfk38X-dvfv2SKd3YcTDICvFRM_HlYiDO16oQvJHw7_pewUp4DHNt-ONT9XIUmemZRbiW8t0UF19wqwAZgLq26JZ_6HG5ZtcLbmnkrO57-heBAZM_NtekWbfvzrRjSTXWrPV9zUR3MQfIEjWuW8WZOG3E4U0g6jwKH_RqvOdh7O79qxRdjoKIrmASQur9kJ7ZaM3Q7YG-bUKQATad3jf3vhpd1f-fZrQlSK-iwnUa7II-R3oVlfCp84o_S9h3ZP0zoZR15RQ/p.jpeg"
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
                                            src="https://previews.dropbox.com/p/thumb/ACRB6ZeGMzk6zKbjY2zErH_mf2Hy0EohWpOoARWx7yokfvhHHKVfwCTsscf9nqFXJc-UaeJlDY4Iff-FHpQdm08ujHDVueIteex1PChDG1RQXo4eTUWzDdoRSESah3XgGWdVlqLTiii1C_beoDeU9iGcBD3oKnX5gLz8xZOkpFbfgHHmUv_RDnVuCjMUj9TC3Zjh1R6zlfho4UtxscLvXAKkGK6sB8zlP65dnsumIXyqs8U54irQfEwkASRRse-DySMMJGSuT4A0FCcy6j70tIVbMw0jBLSpMbKdJbvOWpZwKVmbweDsk5z2myBwh96JRZvnKCRAZnFiwbHkuCV0DJcv/p.jpeg"
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
                                            src="https://previews.dropbox.com/p/thumb/ACRKOVb5AgTSlsLCaZ7gLe5Y9SAAGYdCMqjBMzw0Vq_byXckhoylPqIzdwiyPRjwLgt8WfjbVBer3WEcf4PyPwTaELKfWt-S76ocJ0ocJnzSpRhbP_v88M--BINTji55fR-ixFYfZwtBGs_z3LlM0Pn9_62lwbvUjwt5ANQyyv59KotRW-DnQvupm3lwM-gfDJm3NnIyNuH1vGNTc3D1Lu_7yb9BmKGLVE-vRgjORG15aFbOPQc2ZJvErs2VBO0mepxtVehjfIhjJJbBlbkzlm8P2WLB0bITs9SMbCeTz1JWk9ZPwIzrd6OOTYXSjR1DkIN9_2g0TntqEsZ1Wegb3NfTRHhVh4-KR6yt42kmp43yIg/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Флорист</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('florist')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACM8bZ56ov3VqU5aqNtOVmtPPAlsYE2j94JtrlBFaDGbjAljaOHzbKIli6fM-FHQtxO_gBCjiWKVgb3ziSvExLocD4zd1-BrWXiwI6KU-MDwL3_fIKPkv1RvLrE0EqV0FTBgPAuLYdhoc5wqbJCSY_GY4IMRrY18UlZY1qQjv9ZXk53Egm6gePeE9j_qPsLMpMN5-N9ui086u9eu3cs7nUC42oxtHF7JSlI5j2GZUyjP9w3dFb4opP2B5JiXf5o53VUDtoYyKOnwUibE7_AFUNJ31ps_wITZd3G6gj9FzPGHvwz_I232bcBFkOqi2O_S2xdM_Rx5qkzNFlAW0bwVSIpdnxmuvZYnqB2X2r1ahvXHi8teyPMRw6YTnGKqCMnbh8E0k4eJtOBVm2_vzWiWwuFJBI87XZ2f7evRctxZ4FkqFQ/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Перукар (перукар-модельєр)</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('hair-master')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACR5WknzR7j2q2Wzq_h7B-JdA_Tz91sClf6hWeZPzVZEo3hSTdOMDmi5sLLbRZApEHLQYuqkteUNsg8fMml41KE2pV-iAKXlz3O-NSvoWlzU-RiB9teSGgLUGEfiezr0lLn9KfiG1lB1x2addMvi9yHV-erdTHyw9YeLrnyB7PDbhNNR6feg1fnJaH5YJsHlFaBFJWLHZ3gMnNPAdLtGkICs9-N1iqXtNnCGQ6kGSa5zboJyPvg1qX2FUAXDjNIN1nG57O_L7HzU6MNBU-BToAYSVaRMlkhZBbvsQe221nV7q9NRQWsZRDjWaCzMQeUz-d2y-RPP5tmUC6TzYtu2lGJ00qC-4VDKKx-VaBHmXfIXFbd7Onwn14wTJ42_DonHiW-L9Tsx4eXsRlkXiQDWwNs3ivZEXqZnCrJUtEu3GRuUvA/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Манікюрник. Педикюрник</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('nail-master')} >ДЕТАЛЬНІШЕ</p>
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
                                    <p className="news__card-more" onClick={() => handleOnClick('flowers-maker')} >ДЕТАЛЬНІШЕ</p>
                                </div>

                                <div className="news__card">
                                    <div className="news__card-pic">
                                        <img
                                            className="news__card-thumb"
                                            src="https://previews.dropbox.com/p/thumb/ACQwemMcAAYhEnVFf2we8qyRX53Fqb0NtzwpwSnxfRoQtAZ0G_SGHclQ22tkwDRK1K3AXh_MyjBrt4VEgyxldIc4dL_Vzd8_mq942nzdxyBBvUdMPIhII-taCe6U6-zLWMJHjcwzuuXjywIoOJW_FBlBfWNk9jspAxqCReZBh_Z3mU6fO7Dmk6JLb3zQeQpzd4rz3jkpUH1QJbuuf6F-oWntoTzBY4YKfZ09pflZ7kcYcK8r-xGiPNqz6iL_XminDt7ysbHeT8J6O8ofOiNTnll-MTp1aX57KQCWGiZMntXBchnagfePJMgwSC9-UUeIxU8kk-vJsSi6kReGAoLBbOQlbDGZ6x1GFELqTGxa9T0OLw/p.jpeg"
                                            alt="img"
                                        />
                                    </div>
                                    <h2 className="news__card-desc">Адміністратор. Агент з організації туризму</h2>
                                    <p className="news__card-more" onClick={() => handleOnClick('admin')} >ДЕТАЛЬНІШЕ</p>
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
