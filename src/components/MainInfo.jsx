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
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров
              </p>
              <a href="#!" className="benefits__card-more">
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
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров
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
              <h3 className="benefits__card-title">Професійна підготовка</h3>
              <p className="benefits__card-desc">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров
              </p>
              <a href="#!" className="benefits__card-more">
                ДЕТАЛЬНІШЕ
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
