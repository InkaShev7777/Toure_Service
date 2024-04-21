import React from "react";

export const Places = () => {
  return (
    <>
      <section className="places">
        <div className="wrapper-full">
          <div className="places__caption">
            <h2 className="places__title section-title">
              Навчальні майстерні та кабінети Центру та гуртожиток
            </h2>
            <a href="/rooms" className="places__view-all">
              ДЕТАЛЬНІШЕ
            </a>
          </div>
          <div className="places__cards">
            <figure className="places__card places__card_size_lg">
              <img
                className="places__card-pic places__card-pic_size_lg"
                src="http://centr-tur.com/uploads/posts/2014-11/1416809841_kopiya-img_3562.jpg"
                alt="cook"
              />
              <figcaption className="plces__card-title">
                Кабінет організації обслуговування в барах і ресторанах
              </figcaption>
              <a href="#!" className="places__card-link"></a>
            </figure>
            <figure className="places__card places__card_size_lg">
              <img
                className="places__card-pic places__card-pic_size_lg"
                src="http://centr-tur.com/uploads/posts/2014-06/1403774460_306-1.jpg"
                alt="flowers"
              />
              <figcaption className="plces__card-title">
                Навчально-виробнича майстерня з професії “Флорист”
              </figcaption>
              <a href="#!" className="places__card-link"></a>
            </figure>

            <figure className="places__card places__card_size_sm">
              <img
                className="places__card-pic places__card-pic_size_sm"
                src="http://centr-tur.com/uploads/posts/2014-06/thumbs/1403774529_309.jpg"
                alt="flowers"
              />
              <figcaption className="plces__card-title">
                Навчально-виробнича майстерня з професії “Кухар”
              </figcaption>
              <a href="#!" className="places__card-link"></a>
            </figure>
            <figure className="places__card places__card_size_sm">
              <img
                className="places__card-pic places__card-pic_size_sm"
                src="http://centr-tur.com/uploads/posts/2014-06/thumbs/1403774513_402.jpg"
                alt="flowers"
              />
              <figcaption className="plces__card-title">
                Кабінет іноземної мови
              </figcaption>
              <a href="#!" className="places__card-link"></a>
            </figure>
            <figure className="places__card places__card_size_sm">
              <img
                className="places__card-pic places__card-pic_size_sm"
                src="http://centr-tur.com/uploads/posts/2014-06/1403774460_403.jpg"
                alt="flowers"
              />
              <figcaption className="plces__card-title">
                Кабінет санітарії та гігієни
              </figcaption>
              <a href="#!" className="places__card-link"></a>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
