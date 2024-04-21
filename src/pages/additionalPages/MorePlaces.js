import React from 'react'
import { Header } from '../../components/Header';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../../components/Footer';

export const MorePlaces = () => {

    const images = [
        {src: 'https://previews.dropbox.com/p/thumb/ACNnS0nsn8zEMsgN1ZCORoMP20z9_tUwXzG0BL4zfoHPv1jymSbSCslgwXHjPyLOFKuoEMD6F4SdpzHXhxUV-iYhCoQeyEtIC9ea7-aDGAX_jANT0yAbqtPIwBWbfkGgMNwF6gUsPiQvq4Y8dlFWiVYC5s-oc_0pI_3xa6RwvCjGVxS62k8CDXSN5nB7pgilNwdCxXnbTMNXMUWUZOKujK3UDeJ23C5JE5iqVwFRjC3erKIrDf04yB1tabaK2jogkStbEI-UwcGUD0tGGGLaPLaWul8UfV555IHCV0JqXzhTYarCVHuxb2hyQ8U5YjiT_eDf3x3osYNP8tPfJV1UfgE99clgo9A82XnrbHZVNDH5tWzESSZHbE5476XLVHO-IeGyLFHdA7cedN1rzdIxD36nyjd7gm4d5Gm-mk3sCgSv0fVjDuOijnivOngybX-p2_3IL4dxtMW3KKD3aic6sasIrZ5vYlbZ7__n-M2lA1ocxQ/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACPDHVDv3YQO1kbD7yV0aFGsT-NrEMQkEUUtU9ZAjkjZZm_oVyNoHHsVZnstMT0MP7RLUGncCnmZZsb6DgQ836XKk3M1GZ69we4G0qXmSUnv1sBx7SaLGaQ6IRm1RbXhWgnLKoFo9CTMQrxMxaNUUIEDhLfvFwbrYa5F8rE7bIYf397l1YjDjG9xOPladgRAKg8UGxpfJw6yHDeEBqbIt_uGiSSOVo_IlucKuGaeGBVTBqJUh199mwDeecaMz-FxaMLBib-V9_RjlrHd2AuSiLXRsQSOGOnClbwEfHQsGy_VxryQomSYjpMrdB4AV3_VPP_c2JAkKmGWCfAfPIReZkWJTRiFBziQPRudKpmfGvsoNLZRIiSKKhWWtmaS03cyueXZ4jQUrqgsj2tCxgENons3_NqaV5z7gmjm55DkPVXmS_rKJVi27ZQ43jmlihNj2E5pLdhoymLYXSNaoE-dZzaGRT40amYF9mzNMqCEf4QBfA/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACMiKX4W_8BOIY77wGmdzt28yv237QMiBCBrWdIh8UM_0CpOYRU4dBnse7Go2y-QSCUMVYzumTZEoB0T1Gc2LpflYtVHuelDiWe9CSQNC-UdFtsad7FAmX4hdsf0lVTW7gRyr34oW_2T9RBI0C3y9Z2cWg7abBslfsCbp-okKP-h2qSvUhK93qDCyHgvzg1LkdrcLWYaUliHpZ2eIa6Hfz-LpnErqQDMoH58Hpv252p_4fCzZFg-BGPSlvWXVzWIpy7e1UJCSEu7eWwvTvVxN8z6WaC1gMcwfSWuReMJATUBRF_hytsOU3e-xv22CgBdZtHf39zxqSQ5taPJAkM_09N9YaA7Wwzg6WJqlB4S4kjwijqPRROsnQHrCf7anyijZHDEGmsgKo8yZC-cscrGn_ulPcaL22gRdVNnL8xuq1ely5ohmCUQi2s4Dh3R0kpSZpuOK7WmuG5N4QIHYFfnoo2MAHwco4UqJ_HqQ3EOWJRjng/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACP-2NjqPJNGOqpm7vqHwrgxFZ-c5alRfMAIDlWyu-Oz_3J6LcjXNXz0gbdYoy3Mrn_erIX-qATpf5zjWNUU4qEcsUqqkBS0TGf8Xrzkg3ARFKmXjkkpRVG0Wzc1MyxsIKqJgSuQm6VYbftmV_Ejkz3hjYwfU5rwkMfoq2y_7Za5yrcBpRMtpaes6Y1uXZ2AgIFcGiF4U2k6kvV9FXyeJ9uN7XykrffueW1DvWSRSxSZo4zTKd-unfuu5naZ2t--ypaV_pHco0f6ViSPEpDvFUWo-ljBlSW5nYerAhhNsXJt8R2O9a2JlIudyNNFb9zfgJwZPinQxlADr4AzmY4aopenpnz9U27q6kMcsbIvCK_QXneh9CT-wNCQHDp1A1fRARdf3D3YmrGUEQT1Ep3_-6DYw4R2x80JwqIrYwhnsYKzzw/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACPcTA81b2qwYoPBCEV8dYZ4R02ZIXVagCfchqPcb9Zfy36YJsZzQKg6fn7KN-aYTwiNguMTkev2Oh3bpe8Sbvlvhd2WhprMR1gULZVcBnL4EGl_SRJeqjHrAN2pUYouuyAoH_3nbTD00QJ8BSzvbXMsb6qhXggdnOQcvvaM0Ecw1Hk3YHEcwb3sKoloZhrV2QEr3EyiRKj8CVW4GjD-TIAdGBcosZsnqdxTjnLhjWwD7TzwA5e107Z-0Ou-zjKmBqjhF7KCT3AhEbykdoUO6CCQxI-IX9kxKscx_Acw_2Ujyw1_42Hxm9PQpydWHyhuBssOLisOk9k8wIWWzs1h1XLDMILR7YkzyuxD_q3lx00qqw/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACPFVzTyu_aSeOWFTA8roUouZIHDMUCfdW8URRef6Hk0Vyy_tOmhErTOWol1ZBRn3T4UuSgkL8u_pi4s-NVTn_xR-rCg1yUbMZYc2BgTQGSBEL9HCD64znQlgEIZm4eRQMJ09B1KSMw2lOehBLXMjqOTRUQ7alrnStyciLAHUUoJW7tCiWertsjmIUjk88Tv4CWKn3eSO8fGVyFgcWA5eLF4x3oO_Q0fCCro1DTmKfWyHSADiZxkrHktPgBM7l7PNzCojCMhiu0xiPzHlFotizaWujev4DoLonqt_hNlvkiVI1ycAERy_GWWFAzhkYWQ_zENr1GmYRpxaUkUR8rl7IKP-vyA7K0EFIgQi3N-iYLBCg/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACPXQgHhXnSQ3iwe5oFBRmGzw5g-I9NJv32oN9-D9o1XTDdk_W7mlxoW8dUcM-2fjUScLRuC3G5FJDurvHinTKcOCrVKqAKAxj-SkCa60f46vx4KLFvOALkyuuDpOxcExs6M2quAXgLhSbnCtZXc849DGHnnQ3ePQNgnpZneyEoCedyOET7okt8XnZe5ABIpATvhtl_Ye4jz0MbushKD8pL5w8vLkQU0zy92SxSaBG3kf94eedOG043XcdGu60ZvGe8E_CWamj4BClFvKLR3n-0hk_7yrJ6r_F95k2xAnqsKB6qX_ONL7Nh1TgbrCFJnD0f3GTCN4Ll0ln8RGYJ7i1Yl3LdkQYPt9AM6dc-g4IfyPA/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACNIUTpz2jIFydipbIW0eL7MDVpWBWB3DErgXwVDXHJSghNfYrJOxqgmF_TZYRNzSYuObILfbj78RbqN-SXjEsi2riNHfnJR8h8gOb3zIEAA9Seigy38kGnFrLGdfPf6gYSfdlJwabHYqI44KZPTCz6ZZxzFiCpoj1O80offy893Gj-_djpzhBa_RjyM44m91WpxMwIRWwS4WpWHRU-bc__7ckF0jYGDj-2Me1Yi5RnRmIjeISLgo224Mp7bY4otz3J1rNJg5k4xitHqNqL3wTmQxjEIOc7VjIDOLjfRoDkzn5LhjXXezpLqA6OEybc35s6qxfL3cS9aTPYCHeySQWcPXTe2oT7qbP7Xm219dYviMQ/p.jpeg'},
        {src: 'https://previews.dropbox.com/p/thumb/ACNjU_Afte9GSKDxe-l3hqzQnuORojRbxJglhMNiM_SVfQNgjKcGY-mPglAi96cpn1ryxQ1pE7KwWbjqQZHu7nZUiKIQ14CEp9tjJ6wSqujqawJa93ZzqrsgR5uQLKVJsQKEmVv6JcnFBu6QR0ZuQy2vs6Sag55g089AuuxgPpm8rqk7wQuIcSW81SICaiZq0HlYya3hclIRAtvm7kfXNmfQpW_OsP8V3PpQubwCp5oZ4v63v9J2Z9U7W9ZNxEGMKfunloVg-f-usFBMLr71W6pJ_TT-2k33OlQp4Rco-TGVVAHg50O9Wf4uuwTKNq4qIgezMCRIENi2qsm0fQxYyV9u3nG90SW5hThCkY2BlFD5kg/p.jpeg'},
    ];
  return (
    <div className="benefits">
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
            {/* <Footer /> */}
        </div>
  )
}
