import React from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const MainInfo = () => {
  return (
    <>
      <section className="benefits">
        <div className="benefits__wrap">
          <h2 className="benefits__title">ГОЛОВНЕ</h2>
          <div className="benefits__cards">
            <div className="benefits__card">
              <div className="benefits__card-pic">
                <FontAwesomeIcon
                  className="benefits__card-thumb"
                  icon={faBriefcase}
                />
              </div>
              <h3 className="benefits__card-title">Професії</h3>
              <p className="benefits__card-desc">
              Вибери професію майбутнього разом із Дніпровський центр професійно-технічної освіти туристичного сервісу, де ти розкриєш свій потенціал та зможеш здійснити мрію про успішну кар'єру в обраній галузі. Отримай професійні навички, необхідні для досягнення успіху у своїй професійній діяльності та стань експертом у своєму ділі разом із нашим коледжем.
              </p>
              <a href="/profession" className="benefits__card-more">
                ДЕТАЛЬНІШЕ
              </a>
            </div>
            <div className="benefits__card">
              <div className="benefits__card-pic">
                <FontAwesomeIcon
                  className="benefits__card-thumb"
                  icon={faUser}
                />
              </div>
              <h3 className="benefits__card-title">Абітурієнту</h3>
              <p className="benefits__card-desc">
                Поглиби свої знання у світі туризму з Дніпровський центр професійно-технічної освіти туристичного сервісу, де ти відкриєш для себе нові горизонти та зможеш ступити до мрії про кар'єру в галузі туристичного сервісу. Обери професійну освіту, яка допоможе тобі досліджувати та збагачувати світ туризму разом з нами!
              </p>
              <Link to='/enrollee' className="benefits__card-more">ДЕТАЛЬНІШЕ</Link>
            </div>
            <div className="benefits__card">
              <div className="benefits__card-pic">
                <FontAwesomeIcon
                  className="benefits__card-thumb"
                  icon={faGraduationCap}
                />
              </div>
              <h3 className="benefits__card-title">Профорієнтація</h3>
              <p className="benefits__card-desc">
              Отримай відповіді на всі свої питання щодо майбутньої кар'єри разом із Дніпровський центр професійно-технічної освіти туристичного сервісу, де ми допоможемо тобі зрозуміти та обрати найбільш відповідну професію для твоєї успішної майбутньої кар'єри. Довірся нашому досвіду та підтримці в пошуках своєї шляху в професійній сфері та долучися до спільноти успішних випускників!
              </p>
              <a href="prof-training" className="benefits__card-more">
                ДЕТАЛЬНІШЕ
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
