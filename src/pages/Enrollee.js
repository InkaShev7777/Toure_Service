import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';

export const Enrollee = () => {
  return (
    <div>
      <Header />
      <section className="benefits">
        <div className="benefits__wrap">
          <h2 className="benefits__title">Абітурієнту</h2>
          <div className="achivements">
            <div className="wrapper-full">
              <div className="achivements__achievement-enrollee achievement">
                <div className="achievemt__pic">
                  <img
                    src="https://previews.dropbox.com/p/thumb/ACPxjW0LVNnpbOPHg7jiIaP4Kv7S5cBk0j6KyD_RCuMtmWdssEj73D8pISv0vjn0nNkUHT7GlFI3immLSS4mc1t55BgFqXSQNsI80phb5Vh5ZQFKULU80BLrh7L2nt9rPUlB2-Ty5fkLZc8-JQmQeReHp5B3RzRiMZPb8kQ8Q13iJsdMw5wWgD_4eRMuKp5wmmi2D6STdsCcWjcuxI8TPMjG5_ThkC6lssVK2X_tiRNbKmVsqG9vx-9F8RZeP4ZFQvSdXSFsUFgYNquzIPOqqNr37eBVZazzujQQHY_ZLah2OH9l1aRi8Tp8_R7nTygiUGPD68ckfRzvBWb7tAmU3hdP/p.jpeg"
                    alt="some img"
                    className="achivement__thumb-enrollee"
                  />
                   <img
                    src="https://previews.dropbox.com/p/thumb/ACN2RMOVeZKE8hESgcC2eU29akSJYqhOVlG7h_yf4Vmiga97zovZ86JgXfmbfcA40b5OzVslO8qiJz69R9F8OOIimFZ7gmL_GWha1KvSk4b7XJRqm9L9EWeMGmbL3nvoS9mJp2SCyWy5cTo-5mrg6lrtciE7NfGErkekSYkqxqhAsABYaJms03btO2JQU97BT1nNZNhWGXbHPfSYaQiSYEqg5DtglQeh4jHdyUBPiCz5aykywOI4UxwbbjjhTlQs9bjCOZ0xE7jwYzYQXvlTAC76wqNlOzW-Hp2KHETWrrHRN8gD5yFlY4QSQyJaWCMtVhMrnDsVqRY5CDm01-xIXYCY/p.jpeg"
                    alt="some img"
                    className="achivement__thumb-enrollee"
                  />
                </div>
                <div id="achivement" className="achivement__info">
                  <h3 className="achivement__title-enrollee">Документи для абітурієнта</h3>

                  <h3 className='achivement__desc-enrollee'>Перелік документів для абітурієнтів:</h3>

                  <li >Заява</li>
                  <li >Документ про освіту (оригінал свідоцтва чи атестата+додаток до них)</li>
                  <li >Медичні довідки:
                    <ul>
                      <li >лист щеплень (форма 063) – 1 копія</li>
                      <li >меддовідка (форма 086-У) – оригінал (у висновку має бути вказано “Навчатися та працювати за обраною професією може”)</li>
                      <li >проба Руф’є</li>
                      <li >приписне посвідчення (для юнаків 11 класів)</li>
                      <li >санітарна книжка (для професій “Перукар. Манікюрник. Педикюрник”, “Кухар. Кондитер”, “Офіціант. Бармен”, “Кухар. Майстер ресторанного обслуговування”).</li>
                    </ul>
                  </li>
                  <li>Фотокартка розміром 3х4 см – 6 шт.</li>
                  <li>Копії документів, що дають право на пільги:
                    <ul>
                      <li>діти шахтарів</li>
                      <li>чорнобильці</li>
                      <li>діти тих, хто загинув при виконанні обов’язку</li>
                      <li>діти учасників ООС</li>
                      <li>сироти</li>
                      <li>діти, позбавлені батьківського піклування</li>
                      <li>напівсироти</li>
                      <li>діти із багатодітних сімей</li>
                      <li>малозабезпечені</li>
                      <li>діти-інваліди</li>
                    </ul>
                  </li>
                  <li>Документ, що посвідчує особу та громадянство:
                    <ul>
                      <li>паспорт – 4 копії</li>
                      <li>довідка про реєстрацію місця проживання – 4 копії</li>
                    </ul>
                  </li>
                  <li>Ідентифікаційний номер – 4 копії</li>
                  <li>Письмова згода для обробки персональних даних (відповідно до Закону України «Про захист персональних даних»)</li>
                  <br></br>
                  <p>ДОДАТКОВО:</p>
                  <ul>
                    <li>Пластиковий конверт (формат А-5) – 1 шт.</li>
                    <li>Пластикова папка – 1 шт.</li>
                    <li>Файли – 10 шт.</li>
                    <li>Конверти з марками по Україні – 5 шт</li>
                    <li>Ксероксний папір (500 арк., 80 г/м2) – 1 упаковка.</li>
                  </ul>
                  <h3 style={{ textDecoration: 'underline', color:'red' }} className='achivement__desc-enrollee'>При собі мати оригінали документів !!!</h3>
                  <p>Посилання:</p>
                  <ul>
                    <li>
                      <a target='blank' href='https://docs.google.com/forms/d/e/1FAIpQLSeM4IouXpm4vCaZx5Pe27nl-F4exZ5i8Hs2v6-OUxQn0VAe3w/viewform'>Електронна заява вступника</a>
                    </li>
                    <li>
                      <a target='blank' href='https://drive.google.com/file/d/1KEzVwzo2O_DvwflaQ0zXeqZ0XB6dUgGG/view?usp=share_link'>Правила прийому</a>
                    </li>
                    <li>
                      <a target='blank' href='https://drive.google.com/drive/folders/1igKwX0qY6QPIGOx5rJl-A_kvhLBA4ooi?usp=share_link'>Додатки</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='wrapper'>
        <h3 className="places__title section-title">ЯКІ ПЛЮСИ НАВЧАННЯ У ПРОФТЕХУ, ЯКІ ПРЕДМЕТИ ТАМ ВИВЧАЮТЬ ТА ЯК ШВИДКО МОЖНА ЗДОБУТИ ПРОФЕСІЮ – МОН ЗАПУСКАЄ СЕРІЮ ВІДЕОРОЗ’ЯСНЕНЬ ДЛЯ ВСТУПНИКІВ</h3>
        <p className="news__card-desc">Міністерство освіти і науки створило серію відеороликів, де є відповіді на найпоширеніші запитання про вступ у заклади профосвіти. Цю тему коментує генеральний директор директорату професійної освіти МОН Ірина Шумік. Розділ з відеороз’ясненнями було створено на сайті МОН 29 квітня 2019 року.</p>
        <p className="news__card-desc">У роликах Ірина Шумік розповідає, чи потрібні для вступу в профтех паспорт чи сертифікати ЗНО, які предмети вивчають учні, скільки років треба навчатися, щоб здобути фах тощо. Наразі опубліковане перше відео про те, як обрати заклад профосвіти. Надалі розділ оновлюватиметься кілька разів на тиждень.</p>
        <p className="news__card-desc">“Цьогоріч ми намагаємося змінити формат комунікації зі вступниками і дати їм якомога більше потрібної інформації в зручному для них форматі. Наприклад, ще у лютому ми зібрали інформацію від областей про Дні відкритих дверей у профтехах і опублікували на сайті МОН. Також було підготовлено кілька блоків Q&A.  У них ми докладно пояснили найгостріші питання, які цікавлять абітурієнтів – щодо здачі ЗНО, отримання атестата про повну загальну середню освіту, перспективи працевлаштування тощо. Зараз частина цієї інформації презентується у форматі відео”, – зазначила Ірина Шумік.</p>
        <p className="news__card-desc">Вона також додала: якщо вступник не знайде відповіді на свої запитання ні в Q&A, ні у відеороз’ясненнях, то він може звернутися до приймальної комісії закладу, куди вирішив вступити, або в директорат профосвіти за номером (044) 287-89-14.</p>

      </div>
      <div className="staff__wrapper">
        <div className="staff__item">
          <iframe className='staff__element' src="https://www.youtube.com/embed/gGyljHwK0GY?si=ofE02twQSYaQ6qO3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Enrollee;
