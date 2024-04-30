import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'

export const ScientificMethodicalWork = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <Header />
      <section className="benefits">
        <div className="benefits__wrap">
          <h2 className="benefits__title">Науково-методична робота</h2>
          <iframe src="https://www.symbaloo.com/embed/web-%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81%D0%B8%D0%B4%D0%BB%D1%8F%D0%BF%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B3%D1%96%D0%B2?" name="_symFrame" width="100%" style={{ padding: '20px' }} height="600px" frameborder="0"></iframe>
          <div className='wrapper'>
            <h3 className='news__card-desc'>Віртуальні дошки:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://www.educreations.com/'>EDUCREATIONS</a> – віртуальна дошка, класи, категорії, мультимедіа
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://popplet.com/'>POPPLET</a> – віртуальна стіна для роботи з мультимедіа об’єктами в групі
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://scrumblr.ca/'>SCRUMBL</a> –віртуальна дошка зі стікерами для групової роботи
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://www.twiddla.com/'>TWIDDLA</a> – віртуальна інтерактивна дошка для спільної роботи
              </li>
            </ul>

            <h3 className='news__card-desc'>Офісні сервіси:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://apps.google.com/intx/ru/products/docs/?utm_source=google&utm_medium=cpc&utm_campaign=emea-ua-ru-docs-bkws-all-trial-e_c&utm_term=google%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B&KWID=43700009068573780'>GOOGLE Документи</a> – онлайн створення текстових файлів, таблиць, презентацій
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://textcoworker.ru/'>TEXTCOWORKER</a> – сервіс для спільної роботи над документами
              </li>
            </ul>

            <h3 className='news__card-desc'>Графіка:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='http://anymaking.com/fun-photo-effects'>ANYMAKING</a> – прості інструменти для редагування фото, використання різних фотоефектів
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://avatan.ru/'>AVATAN</a> – різні ефекти для фото, створення фотоколажів
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://burner.bonanza.com/'>BACKGROUND BURNER</a> – сервіс для видалення фону з фотографії
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://www.befunky.com/'>BEFUNKY</a> – редагування фото, створення фотоколажів
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://calendarum.ru/'>CALENDARUM</a> – зручний, швидкий сервіс для створення візиток, календарів, конвертів
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://www.canva.com/'>CANVA</a> – сервіс для створення постерів, банерів, візиток
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://clippingmagic.com/'>CLIPPINGMAGIC</a> – видалення фону з фото
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://www.glogster.com/'>GLOGSTER</a> – створення мультимедіа постерів (глогів)
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://www.thinglink.com/'>THINGLINK</a> – створення інтерактивних зображень, плакатів (групова робота)
              </li>
            </ul>

            <h3 className='news__card-desc'>Презентації, публікації:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://www.emaze.com/ru/'>EMAZE</a> – створення презентацій з захоплюючим дизайном та тривимірною анімацією
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://fliphtml5.com/'>FLIPHTML5</a> – сервіс інтерактивних електронних публікацій
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://www.peardeck.com/'>PEAR DECK</a> – додаток для інтерактивних презентацій
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://prezi.com/'>PREZI</a> – створення «літаючих» презентацій
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://www.sparkol.com/'>SPARKOL</a> – скрайб-презентації
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://en.yumpu.com/'>YUMPU</a> – онлайн фліпбук
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://www.zyyne.com/site/'>ZYYNE</a> – електронні публікації у форматі html
              </li>
            </ul>

            <h3 className='news__card-desc'>Візуалізація:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://piktochart.com/'>PIKTOCHART</a> – створення інфографіки
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://www.zooburst.com/'>ZOOBURST</a> – анімаційні 3d публікації у вигляді історій, казок
              </li>
            </ul>

            <h3 className='news__card-desc'>Дидактичні ігри:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='http://www.classtools.net/'>CLASSTOOLS</a> – багатоінструментальний сервіс для дидактичних ігор
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://www.jigsawplanet.com/'>JIGSAW PLANET</a> – створення паз злів
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://learningapps.org/'>LEARNINGAPPS</a> – створення інтерактивних навчальних вправ
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://www.triventy.com/'>TRIVENTY</a> – колаборативні вікторини
              </li>
            </ul>

            <h3 className='news__card-desc'>Стрічки часу:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='http://www.tiki-toki.com/'>TIKI-TOKI</a> – створення інтерактивних 3d хронологічних стрічок
              </li>
            </ul>

            <h3 className='news__card-desc'>Карти:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='http://www.tripline.net/'>TRIPLINE</a> – створення інтерактивних карт-ілюстрацій для подорожей
              </li>
            </ul>

            <h3 className='news__card-desc'>Відеосервіси:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://www.youtube.com/'>YOUTUBE</a> – популярний відеохостинг з можливістю редагування відео, додавання інтерактивного контенту
              </li>
            </ul>

            <h3 className='news__card-desc'>Тести, опитувальники:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='http://master-test.net/uk'>MASTER TEST</a> – створення тестів, проведення тестування онлайн
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://quizlet.com/'>QUIZLET</a> – простий сервіс для створення тестів онлайн
              </li>
            </ul>

            <h3 className='news__card-desc'>Вебінари:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://www.anymeeting.com/'>ANYMEETING</a> – система організації вебінарів, відеоконференцій (до 200 учасників)
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://pruffme.com/'>PRUFFME</a> – платформа для вебінарів
              </li>
            </ul>

            <h3 className='news__card-desc'>Сайти:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://www.anymeeting.com/'>GOOGLE SITE</a> – створення сайту
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://pruffme.com/'>WIX</a> – створення і супровід flash-сайту
              </li>
            </ul>

            <h3 className='news__card-desc'>Безкоштовні дистанційні курси:</h3>
            <ul>
              <li>
                <a style={{ color: 'black' }} href='https://sites.google.com/site/edugservis/home'>«Сервіси Google у професійній діяльності викладача»</a>
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://dystosvita.mdl2.com/'>«Дистанційне навчання інформатики»</a>
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://onlainnavchanna.blogspot.com/'>Cтудія онлайн навчання для вчителів</a>
              </li>
              <li>
                <a style={{ color: 'black' }} href='http://interactive.ranok.com.ua/course/group/distantsyin-kyrsi-dlya-vchitelv'>Iнтерактивне навчання для педагогів</a>
              </li>
              <li>
                <a style={{ color: 'black' }} href='https://www.coursera.org/'>Oнлайн платформа масових відкритих онлайн курсів</a>
              </li>
            </ul>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
