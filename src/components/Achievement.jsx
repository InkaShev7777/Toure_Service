import React from "react";

export const Achievement = () => {
  return (
    <>
      <div className="achivements">
        <div className="wrapper-full">
          <div className="achivements__achievement achievement">
            <div className="achievemt__pic">
              <img
                src="http://centr-tur.com/uploads/posts/2014-11/1415107128_img_0413_1.jpg"
                alt="some img"
                className="achivement__thumb"
              />
            </div>
            <div className="achivement__info">
              <h3 className="achivement__title">НАГОРОДИ</h3>
              <p className="achivement__desc">
                Нагороди – це визнання досягнень та заслуг. Вони мотивують людей
                до нових висот, а також слугують символом пошани та вдячності.
                Існують різні типи нагород: державні, міжнародні, галузеві,
                громадські. Їх вручають за видатні успіхи в науці, мистецтві,
                спорті, бізнесі, волонтерській діяльності та інших сферах.
              </p>
              <a href="#!" className="achivement__more">
                ДЕТАЛЬНІШЕ
              </a>
            </div>
          </div>

          <div className="achivements__achievement achievement">
            <div className="achivement__info">
              <h3 className="achivement__title">НАВЧАЛЬНО-ПРАКТИЧНІ ЦЕНТРИ</h3>
              <p className="achivement__desc">
                Під девізом «Якісно! Професійно! Гостинно!» працюють
                навчально-практичні центри, для яких підготовка
                конкурентоспроможних кадрів стала закономірним наслідком
                вкладання сил, натхнення і душі педагогічного колективу
                Дніпровського центру професійно-технічної освіти туристичного
                сервісу.
              </p>
              <a href="#!" className="achivement__more">
                ДЕТАЛЬНІШЕ
              </a>
            </div>
            <div className="achievemt__pic achievemt__pic_mob-first">
              <img
                src="http://centr-tur.com/uploads/posts/2015-08/1441007982_npc.jpg"
                alt="some img"
                className="achivement__thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
