import React from "react";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const navigate = useNavigate();

  const handleMoreNews = (idNews) => {
    navigate(`/news/${idNews}`);
  };

  return (
    <>
      <section className="news">
        <div className="wrapper-full">
          <h2 className="news__title section-title">
            Новини навчального закладу
          </h2>
          <div className="news__cards">
            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://previews.dropbox.com/p/thumb/ACOfQWaZdD6IsBWmWnsa5x_mFx9zWM-2quXfZ6f-TYIpwPKok0PpysvDyf5WJUZEzpSh5yCPSt8tM_IFzWFIsfCk7ZoR2zDbmWSWiRgDNB4LFu2aOKTbi4bDHKk85tl31Vp3CA7TTsD97XXYqCnYtBX4jyguAfPyTxdi7lleKMff2RWqeGpt1JkPaT0yY59mWRgNpKjj17B-NbODfUK5JmJx0JLVkOxob7zu8de0F3Plz0MQNjkXWjkdaXBXg3rby5Na92dhFzuXT0teYCdJNtofEq60dwriFmcZWfAQH1e4Jvs1WwKa-Ea70y8zOXDBUYiIOwjI1HYmD2oxHIvSvjxM445EIWqplwm-xlhVv4f7A7DefbjBgJb_fzLDdrTHblgEJc3RP4OnuzDJCOK4d4h-/p.png"
                  alt="img"
                />
                <div className="news__card-stats">
                  <h3 className="news__card-title">
                    День вишиванки
                  </h3>
                  <div className="news__card-date">
                    <span className="news__card-date-value">19.05.2022</span>
                  </div>
                </div>
              </div>
              <p className="news__card-desc">
                З нагоди 130 річниці від дня народження Миколи Хвильового –
                українського прозаїка, поета, публіциста, політичного діяча,
                одного з основоположників пореволюційної української прози з
                13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника».
              </p>
              <a href="#!" className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://previews.dropbox.com/p/thumb/ACNVCYXXi1g721eLRPLz0EnhZDXW5ldJ7BQRp5fpehHYdpnSmRXA6VY5UVvnvRKZRlswHCysfIHCvr4LxbOtqJ1d-6eNeCtXCXQxCdLXuSX6Y7-EK1GkiAuUZl-HnR-Wpi9yjCG68u_chavlqDZe2dvGc6BiC0apjCOazcYJeKOSs25GJAK5vTvKZpeK4vZyWZ8-DLwTtVK2-IpxDsYuK8h9WRm1dmKym6AvC3uMO5k5_BdfozhtHsOuL4uchpKSwn1GZXkHCtyPHKF-8AwsyLr6mCr11A_G4cmA-871PYTCmCGziqJVqSTR59QL0etMSkPlX0vMeYdVinbFSHQKNQnx/p.jpeg"
                  alt="img"
                />
                <div className="news__card-stats">
                  <h3 className="news__card-title">
                    День волонтера
                  </h3>
                  <div className="news__card-date">
                    <span className="news__card-date-value">05.12.2022</span>
                  </div>
                </div>
              </div>
              <p className="news__card-desc">
                З нагоди 130 річниці від дня народження Миколи Хвильового –
                українського прозаїка, поета, публіциста, політичного діяча,
                одного з основоположників пореволюційної української прози з
                13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника».
              </p>
              <a href="#!" className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://previews.dropbox.com/p/thumb/ACP61kaaA0-iGzKVRfKsvWc21unJoGj33-gL2DA7QnDmna9aeZ4FWIMyxpPvVFDk7MAKchCC_VvSV8_WT6gzQmVxlQNFFxHVIIXSnNdtA7CT-86p7sv7eYH9xMZhFfTp3JzHHGq7zCXwWWR2IhAlMOvWRUwuRMhsKEy-cHho9w8nSTlhdVw21XsL2WaHhGNJ-8fU5eykIonk4oAfONTeqvOzpM5tOmLMiN59rPyR0rk7n7RnnOxKcAizVGE0g3Gg6RthZigrBsgl9jNyMTPtulUrAQsX37Edk2LPN1VrEbhbwbIK_9yN0zxSeGrmBQcYo2LWClVPlHPPaA9XPa6HZ9-n/p.jpeg"
                  alt="img"
                />
                <div className="news__card-stats">
                  <h3 className="news__card-title">
                    День Козацтва
                  </h3>
                  <div className="news__card-date">
                    <span className="news__card-date-value">14.10.2022</span>
                  </div>
                </div>
              </div>
              <p className="news__card-desc">
                З нагоди 130 річниці від дня народження Миколи Хвильового –
                українського прозаїка, поета, публіциста, політичного діяча,
                одного з основоположників пореволюційної української прози з
                13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника».
              </p>
              <a href="#!" className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://previews.dropbox.com/p/thumb/ACMx3qrDGIkLHQnfJbIJU19Y_Nq85-ib5KTWUmFDpj4IdZ4kAA0oZfKgUdUKh_S9Tst-aYEAnwJCl9uVX9yUCjTk_ZWgIwfCB4qgyW7ARi-j9DVz_QAi8wjH2iBGQVnl0KULPA8FFbE6kw4c4yv4bM9iA2As6wEy-o86OMKUsZansKavGYlEPx6UuvCG71XqSTpUyTEkvyeuofY1goqPsxFTsSGNzVrikgUWodxf0afAxjXnuWtojkn4VT60yboRtVJs9XgDr5fVwOt35SkTKORkTu7IWcCMMRx2U95I34a1knfRgxe9nJXAUWCgbWiAOG4menHrwufm8UjZ8YuIbv0Vj26qLcLCxRBUy_xJJX3ZKV-DNuvAA0fuRl8IFau3XO4ZYhaQcd8818B962a6i-GR/p.jpeg"
                  alt="img"
                />
                <div className="news__card-stats">
                  <h3 className="news__card-title">
                    День Конституції України
                  </h3>
                  <div className="news__card-date">
                    <span className="news__card-date-value">29.06.2022</span>
                  </div>
                </div>
              </div>
              <p className="news__card-desc">
                З нагоди 130 річниці від дня народження Миколи Хвильового –
                українського прозаїка, поета, публіциста, політичного діяча,
                одного з основоположників пореволюційної української прози з
                13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника». 13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника».
              </p>
              <a href="#!" className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://previews.dropbox.com/p/thumb/ACNmbuYCE8wp6XEr4HdxAp2mJceQ6z-WG17ZwiCqKd2yuW8sxLklGfbifChA8TcJMECRQwJsO41aabRffq1x9x-MZjEa7SRnmb2plCbBTDSgcKx-mqRW9cqpnhmfTqqcJCLcpX2RGtDVAGdVWIOcGIkOqxnQdtOgzCQ_qMTV1H0kty79ufj-QKsiRRz5oPuBnVIfn1U4gCj3w2oyKGV0L0wWtpSTWl_zz3hj19kWw4bM6LumqlJ3Fotorq-coIqONawkts9Jo6L6DypYWgzoBkBZ4gQhSi7J9q7LX7iIw-ejAWdcr-0EuUNXNAgeeqUZ05pH2YccdyHjFp-oaIqoiNF-LJ6uaO0mlj-i5OHsRtbWXeVRLoIoY5LqWvFUR5nbyqZ_VeJfMOAXCONRXT1kjTMk/p.jpeg"
                  alt="img"
                />
                <div className="news__card-stats">
                  <h3 className="news__card-title">
                    Новорічний стіл в українських традиціях
                  </h3>
                  <div className="news__card-date">
                    <span className="news__card-date-value">31.12.2023</span>
                  </div>
                </div>
              </div>
              <p className="news__card-desc">
                З нагоди 130 річниці від дня народження Миколи Хвильового –
                українського прозаїка, поета, публіциста, політичного діяча,
                одного з основоположників пореволюційної української прози з
                13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника».
              </p>
              <a href="#!" className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://previews.dropbox.com/p/thumb/ACNImD121XiIz-Xx0TdfmcJ-hnoFM8iGJZCs9Rwn2Ty1Auzi4X9nHdSctr8RQj-s57xYh7XnyB92lycc7cMEcrFholbEWBzKd9-tuICbtMH4yy-J5NPZtPI9iAjW0KwyCJ6hxrdFgX7qZo2CNzfTIGoILcGKl_mrwCp6ArzLV9joHPoMhf4kLWw3qSxnpWWoK26L0zVTd1idp5iQ_19OsO5-_Mr77EeKLOemQkFeyrGtLia0bsF4BWn0KddBxcZ0g1ykSDZo9n48fDzbuR3JVXbCkVPrpQRz8zIcYScNjb7xBqhj2t7sxUrbmt9F3PW5gVaeMDHU80XRRnkDxXd-qFmDqIHzHQClQZYtWZFyrouggQ/p.jpeg"
                  alt="img"
                />
                <div className="news__card-stats">
                  <h3 className="news__card-title">
                    Подорож до музею історії Дніпра
                  </h3>
                  <div className="news__card-date">
                    <span className="news__card-date-value">06.01.2023</span>
                  </div>
                </div>
              </div>
              <p className="news__card-desc">
                З нагоди 130 річниці від дня народження Миколи Хвильового –
                українського прозаїка, поета, публіциста, політичного діяча,
                одного з основоположників пореволюційної української прози з
                13.12.2023 по 16.12.2023 року у Центрі проводиться «День
                письменника».
              </p>
              <a href="#!" onClick={() => handleMoreNews('musei')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>
          </div>
         </div>

      </section>


    </>
  );
};
