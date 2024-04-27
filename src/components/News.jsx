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
              Разом з учнями та персоналом Дніпровського коледжу професійної освіти туристичного сервісу ми відзначили День вишиванки з особливим захватом та патріотизмом. Усі разом ми вдягнули національні вишиванки, щоб символізувати нашу національну єдність та гордість за нашу спадщину. Цей день став для нас не лише святом культури, але й дотриманням національних традицій, що об'єднує нас як спільноту.
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
              У Дніпровському коледжі професійної освіти туристичного сервісу ми щиро відзначили День волонтера з великою вдячністю та повагою до всіх, хто дарує свій час та зусилля для допомоги іншим. Цей день став важливим для нас, оскільки ми визнаємо та цінуємо внесок волонтерів у розвиток нашого суспільства та підтримку тих, хто потребує допомоги. Відзначаючи цей день, ми висловлюємо свою глибоку вдячність та підтримку всім волонтерам, які роблять світ кращим для нас усіх.
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
              У Дніпровському коледжі професійної освіти туристичного сервісу ми відзначили День козацтва з великою пишністю та відчуттям патріотизму. Цей день став для нас символом відданості національним традиціям та героїчним подвигам наших предків. Ми вшановуємо спадщину козацтва та віддаемо належне шанування тим, хто відстоював свободу та незалежність нашої держави. Відзначаючи цей день, ми відчуваємо гордість бути частиною великої історії та спадкоємцями величного козацького духу.
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
              У Дніпровському коледжі професійної освіти туристичного сервісу ми з глибоким усвідомленням відзначили День Конституції України як свято нашої демократії та незалежності. Цей день символізує важливість правового фундаменту нашої країни та нашу відданість цінностям демократії та прав людини. Ми відзначаємо Конституційний день з гордістю та повагою до нашої основного закону, який гарантує права та свободи кожного громадянина України. Це свято нагадує нам про нашу спільну відповідальність за майбутнє країни та підтримку демократичних цінностей.
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
              Наші студенти активно долучилися до підготовки та сервірування новорічного столу, використовуючи свої професійні навички та творчість. З великою увагою та любов'ю вони готували та прикрашали страви, представляючи найкращі традиції української кухні. Наші майстри готування зі студентів спеціальності туристичного сервісу виявилися не лише кулінарними експертами, але й майстрами гармонійного сервірування, додавши своїм творінням особливий шарм та вишуканість. Благодаря їхній працелюбності та творчості наш новорічний стіл став ще більш вражаючим та святковим.
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
              Разом зі студентами нашого коледжу ми відправились на захоплюючу подорож до Музею історії Дніпра, де ми дізналися багато цікавого про минуле та розвиток нашого міста. Унікальні експозиції та інтерактивні діорами дозволили нам поглибитися у важливі події, що вплинули на долю Дніпра від стародавніх часів до сьогодення. Ця подорож стала захоплюючим відкриттям для нас, і ми раді поділитися нашими враженнями з іншими студентами та викладачами коледжу. Запрошуємо всіх на подібні подорожі в світ історії та культури нашого міста!
              </p>
              <a href="" onClick={() => handleMoreNews('musei')} className="news__card-more">ДЕТАЛЬНІШЕ</a>
            </div>
          </div>
         </div>

      </section>


    </>
  );
};
