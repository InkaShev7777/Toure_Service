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
                  src="https://i.ibb.co/0f9tBJX/IMG-2580.jpg"
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
              <a href="" onClick={() => handleMoreNews('emb_day')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://i.ibb.co/gjQSzFY/HRHG2935.jpg"
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
              <a href="" onClick={() => handleMoreNews('volonreer')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://i.ibb.co/yRWXY5k/IMG-20211012-113530.jpg"
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
              <a href=""  onClick={() => handleMoreNews('cossacks')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://i.ibb.co/2gcLs0m/IMG-2699.jpg"
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
              <a href="" onClick={() => handleMoreNews('constDay')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://i.ibb.co/0fMpdhT/IMG-2460.jpg"
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
              <a href="" onClick={() => handleMoreNews('newYear')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>

            <div className="news__card">
              <div className="news__card-pic">
                <img
                  className="news__card-thumb"
                  src="https://i.ibb.co/M77RgC3/IMG-2838.jpg"
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
              <a href="" onClick={() => handleMoreNews('musei')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>
          </div>
         </div>

      </section>


    </>
  );
};
