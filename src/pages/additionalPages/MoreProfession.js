import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const MoreProfession = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState();
    const [video, setVideo] = useState();

    const imagesRestMaster = [
        { src: 'https://previews.dropbox.com/p/thumb/ACOXfWC634Ock50S9sffZ52kc5iIJDyewkRlfKWrI9quoHl7qtOOZJdXyAlfMjivr1fxp57hSyyo7-W1USR80ToqIZBgpSEKc1fi4LB5pGiXouqtgdu0FTFCxfjcwwa54Yfn781425y6zXYi3R808CJ0_Vcfwa5aeN8LAA4PnH_zsJepXSL-25O31wvNkd-esk-bwjo8Se3cNS4YXT_WxrAauOO5UCqKEwr-sWR2yNXV_qFeqUbP1cgCLZjrU_p6yERv1ifZPdu40r7oieshEUOllOISaBP-e7jTrFwIgUZZ2F-Dn9mTg6f8qGSlQnGSqC1XvDYF6kshQrYDaMikvccoPBNNLlLtl54RgiWBSeMBQPwyZvLCNKYDxvkk5-EjnahSuHMki_pvTsk6aM79TNAMpKSJUgIibs4ga8rfhrPc0g/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACM4YifdygEyhQDoueItuUWLThyVKtkMmArGiHZTsx39mpPWeIHWsFXQ4dtFn1VCeQDevatKiKNWc-vkHUv3FccNKm75maRW_y6n2OgotTrBDFNR-EVJ_xi4DpazLaiWbDOazpx2V3GtGWINRsmAmXkcqkvFLrzVRa_BUNva36byUd0IdugiPVDNV4aHUKwW0ax4oQgbrQxvDBwu6f78G56wJqjG_IXBKGT94E_t9h8AwAvH_gaZH8Qc-4ZOLtksTxHmJifOgHyCzCEWcA2pc_r-JdnN9nS3sVsY9G37TdJBWeQtVEPiWukz7j0F_vFxKYAhh0ua6X6F11Ios_3K9eD0oQG50XF2nmPNk9ijeimrH-LDR0oKoKhdnoOmB3tKP7VDdBTQN0OHhPFXXfGpzq7hYuNtJevnFUnUfQjMpuXyZA/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACO_VWdlSsFy0iUywHWYPuDMn3_kaf-I7QN8m2NmQ-MOgr4xGT3ApDYMAthFAlMvrpJHUbkx2N1e3Z_Jg5OSWEmBg-1i_0i0EHbSQM00EKNvyGCa2LQQY5nscONi5TBQ6VF0AMDZUqS71zgcvvzJFEEf2XUwKR5sVaTfYmgzjSs1uat5zVw9BSfYZWAOdYyjdktnALAcbaxcUuyqOKXzkgCLY4BpW9AN1VI_nK0qm_mGMDQKlZbFcFTJJCupa7Eeo2oL_XlHKAV1vgOctgso1XBH1t2svg9hVrkEjXs7-yOR8P8aYtG-X4GpkWSwp8fm4BirbvedQjLxTMxn8lawNeDrtGQmDuczDwnLQKLhSd1IhhrZGgSzzQAOS1h5yqztYMnrtwVDhtBDb5BKWEXO2AYvvWCQOTrc_ci-RVvFjzctfw/p.jpeg' }
    ]

    const imagesWaiterBarmenAdmin = [
        { src: 'https://previews.dropbox.com/p/thumb/ACN8kfAsA7FJjpm5gqqfo_6fXkLQPTvLcPb7ZO8nMG4Guuj3FKEWfAOVxlqC3pRPhKsR4NVDabdN6Mng1UDwq32ryOws3e6RiBM-TTQ5zIF7mf7LAnpUOAKMiKRddjRrbeiO5jc3Ezxq0DqizVAny-qO2Pxv_v3lC2UGL41r_QLx6TpepBxkCNBOIQUo7VXXLYybZiWuSZ9bTl0_ldUg6FEzJoYx2fRmuHnWlucVSoBbKJC84lPUJzQ5XCWowa5tn6TRyyrjFEOwkZ_lGKiiwyXpM8Lo7y4jSyFCRwmq6EYtyb92VlBqiFCxXSRKQroYm1sbgph5auYB6OUCXFmPjOlqybb7Km66P0HJGLoQYw-wXhGmmiXy0-UKclNW5aT12TQkhzUOINAj9IqBkmC5XEqVPF7689w0tpPVr38g82_rzw/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACNGN_DnID38S_tpimjd9yoXFjm5pt7qeRi_WHka0ZB8TBK4ANEBROAN6oMVw4kuy6rAR5Jw7GDsG197rJnhXn3ReVDr-Ix_W9FQKg6PnBiIVc-H-IOgPExOb_vq7-paE2flSVsAF6glqPWgRk3t56jfIAzVzLXf1_rmHMK6dRSCkJSuhVGHlguExdSCvcI7_K6VgHrDC6pErBaOcpyRpt_YyA9ZPECa1S4aXB43t7Lumf18lkXLG-qXoHctf-VbDxgz_2uggiiZB6jz0p00VQD6JIW1gnZLx-a94D9RJk18a64NQLpSij1oHzhK1z_vu766O_YTSD1O-mRiNJlvMjP2x7k1b7Y4Si4tA4EawpFXNZ5kv3SDeRO2t8sifWUE1EGkfiwHexmNlNZBgwStgPCAQAgxMes0hOCDCqWNxqN1WQ/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACNNOywuBoD2jjTBnam5FNPWm3aLT6tuGrerA18E06y1qN4Gf2voFT1dnsIEYA5x1ZoqCHWlgXkxraNT4v3Y3N4FzqCTS3vIQo7YpGaD5GFL3iPotysL63s2mNJTWeTLvyjeQbbKTu7LY49UaBiySmOKniXfQvNj3VqB1GCwo7DEqsnKYgjO7vD1HBaOckZZ1B7qnEEjHE_HZyZ53nqW3iP9516rW955Ae2tKYKvMci_H3IJiKJs05pszmoscg5gAmBgXXTyiatgYClEJS-Bo7VtcMj7JTKVG42SZj64mNGZApdTFb5vltKQhIQyH4_qQXWNpGt31HxExzePycO11G3i6cnMVpyZmPqqTuwFDdNgyA/p.jpeg' },
    ]

    const imagesConfectioner = [
        { src: 'https://previews.dropbox.com/p/thumb/ACPzi3Hk3Gc-rI50IE2e6OVi7Yr8IV4Ac1WKxze3qe_xLN3Lx2vNIU_MxjkJO0dqUozzG1GYXB16suJFAxCezVhxWZuGl6ot7bGQcbzyfnDni5QZhEuKDmdKOKuvuhbjbJquPp1SqQG_RGJVU3UaG8rxnN12hHsRQmdfObo5PuCbWO_05v9YB4jj-dDxXuUpFo-N8G9fENTjSAhkeMjC-3Mm43OBdtrhxeSGLckQIXd_IVg_992Qgmvs2LikcUExKLXFXxnxulJehaTmLIfTc1XiJMI8EgL9Idk-6vytNJ0u_F151RgBkySsPsHm2UcqB-Te4fUZnJ-Y0NzwBmweamslV0w1Ua_chr0Xv0lbdUA6DS_gPsrkNf_dAYucoqMhd9UQyAlRfp8t2tp0ZgbyBBvT_8qa3csjms2GqrDFT1XHBQ/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACMcBBHPoq_4ebmw3rqOrVDD09MN5vpha6cxzlue7TcxMB5PjlxRIsoK-EH0sJC2bgx6hjl1Id-jwqMCcuFcgBNwpWlP8bw3_88OOJOjg7fUcGqpjSEFt3ONcbDkTV7Gwm8F7o_QBLv6QBHmRKZFBI6y8mmwB9L0yEy6d5VVnr7JMsYuO5gmzRwjPSEAzP-Ekr9lFiY1dNM8aDmwwQCmwa8asM2WO9n0c0E280rS7hpKyZJ0pYNoXYGqsoNgX5s2aZr5JpaZnoHpXEpiJSu7DWMslHT1WYM1_Ai3PG5-PFAjUmrTJBVUIzYLPr0ln5z9FqS3MKTTjbY7nTeF8kQ2InSP/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACMgzABKhfZ7Dq6Z7cccOxwiR_idXmPklGBdYXsA3FGun4gAZ9yA8Xxn58YqNDCcWhbtNJMvgn0VV8kBvkKx1UEZuZ3FSWx0yFilHpmyx57q4rCeKwpYK2ZWLwWdeYrHvDDVk3pbI2GRx-B4DTSB1l2J-4NKXmLa6pqiu79FHaE5TWli2-buuGYrtmzx3rxVc8_HbTYu-kc8wKdSt4A6dcYIGCPu1SHZ-HAt-REdX6nHdczATd8fnNKlgR8_iXc54w5W5lnMNy0JKaJAzg3ZiLzQ14-xjTZH1iffFC1HUsSTvpWPS7BZMiZXLWi2MLty0SknGknCMLcRHaSKkzg0F40W/p.jpeg' }
    ]

    const imagesAdmin = [
        { src: 'https://previews.dropbox.com/p/thumb/ACPD8CJQbiI4SjmOZ4C3XRhaRbxLKqolZleG2W0Z4oP4OrgVBr6i0_vstxp3xYatjsN5C2aQcP0d5rCB2Wj3KgfHHtUS0LgzZv5_qPcVVMCNc1il9lXcUnw35kTRcFW_zNZMmKV_Qk_pnTzUZLcxRUwFxFDfvZa1s2Yhbtqar1zhC8yoQYfGm11DSvBOvoTnOaPd2CzVMQ9BYO3fPL-aLujfILk8oSC72kYan2A1Wf89kWcESgZtZAyIXv94O5oGU0T8XcnTFasTUm9gNQjwCKGgUF2NAs8AvZle5TeX0toUurEqLzAU9Vl3p3zACZxV1lRtGjEymDF6LTuzrGUVJffi5pEs9BSRwWgD-fjYuah9qp35c0CthWJF9s5EI9B7gI6Ga5zvwFEpTgDNuHNopRsScJoMGSZfT8RIYgRFWHtngQ/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACN2m12ZTChVg7hyprL57S4Go9IRMA6OoJofpyexbA0A0inO1XflFI2QuGvbGwfXrqa2ZT5CRXmi8yi82lSOlOWOe0W8XLr0lhYS19LYTpWj3y9Vqhw0zMmuWsRxM05Uk_nZf0RhgDq339Ud-2NRQF3tkS7kXetF7qhO16ehbuvEyOAIY9VXdCTxHrNg8UqFbcbTRNqDIL_Bk8nVHqobsHkwc7kiDGIBsd0C7ngLXBUOvDQN39Ds7CQHcKnciaa10vyNVunpNEvLVG5PqOFFiqLznnUwhQKodACfU56ywXcJuP0l75gSsLsDih2vyZxVv0pW-byjv21juh2-RDhvaIKQ/p.jpeg' }
    ]


    useEffect(() => {
        if (id == 'rest-service-master') {
            setTitle('Майстер ресторанного обслуговування');
            setImages(imagesRestMaster);
            const desc_ = <div>
                <p className='news__card-desc'>Відвідування кафе чи ресторану дає людині можливість відпочити, поспілкуватися з друзями, скуштувати страви, які важко або неможливо приготувати у домашніх умовах. Місця, які подобаються, клієнти із задоволенням рекомендують іншим, збирають там цілі компанії і навіть відзначають урочисті події. Як правило, привабливість таких місць полягає не у чомусь одному (смачній їжі, стильному інтер’єрі, ввічливому обслуговуванні, живій музиці), а у сукупності цілого ряду складових, яку прийнято називати атмосферою. За тим, щоб заклад функціонував бездоганно, їжа була вишуканою і смачною, а в усіх відвідувачів був гарний настрій, повинен слідкувати майстер ресторанного обслуговування. Саме в його обов’язки входить завдання забезпечення належного сервісу.</p>
                <p className='news__card-desc'> <b>Майстер ресторанного обслуговування</b> – комплексна професія, яка синтезує у собі обов’язки офіціанта, бармена, кухаря, хостес, адміністратора, управлінця, обліковця, маркетолога. Це фахівець, що у разі потреби може самостійно управляти будь-якими процесами у ресторані, кафе, барі, ситуативно замінити відсутнього працівника.</p>
                <h3 className='news__card-desc'>В нашому Центрі Ви навчитеся:</h3>
                <ul>
                    <li>складати меню та прейскуранти</li>
                    <li>оформлювати рекламу</li>
                    <li>приймати відвідувачів, знайомити їх з меню, прейскурантом</li>
                    <li>риймати замовлення, обслуговувати відвідувачів в залі та за барною стійкою</li>
                    <li>обслуговувати банкети і прийоми тематичних заходів, іноземних туристів</li>
                    <li>вести облікову документацію, товарно-касову книгу, книгу обліку розрахункових операцій</li>
                    <li>здавати виручку в касу підприємства, виручку на розрахунковий рахунок в банк</li>
                    <li>складати графіки виходу на роботу</li>
                </ul>
                <h3 className='news__card-desc'>Сфера професійного використовування випускників:</h3>
                <p className='news__card-desc'>Випускники знаходять використання при виконанні робіт, пов’язаних із обслуговуванням відвідувачів у закладах ресторанного господарства різних типів і класів. При цьому можуть не тільки технологічно правильно виконувати дані операції, але й уміють аналізувати, прогнозувати наслідки своєї діяльності та приймати правильні раціональні рішення в процесі виконання виробничого завдання. Випускнику по завершенню присвоюють кваліфікацію “кваліфікований робітник” за професією “Майстер ресторанного обслуговування” IV розряду.</p>
                <br></br>
            </div>
            setDesc(desc_);
        }
        else if (id == 'waiter-barmen-admin') {
            setTitle('Офіціант. Бармен');
            setImages(imagesWaiterBarmenAdmin);
            const desc_ = <div>
                <h2 className='news__card-desc'>ОФІЦІАНТ</h2>
                <p className='news__card-desc'>Сьогодні професія офіціанта є однією з найбільш популярних професій у нашій країні. Робота офіціанта полягає не тільки в обслуговуванні відвідувачів (прийому замовлень, подача на стіл блюд і грошовий розрахунок). Офіціант – публічна професія, він представляє кафе, бар або ресторан. Чим вище рівень ресторану, тим більші обов\’язки і відповідальність у офіціанта. Однак, щоб опинитися в елітному закладі, який обслуговує прийоми на найвищих рівнях, необхідно пройти жорсткий відбір, продемонструвавши себе в повній бойовій готовності. Офіціант повинен досконало володіти всіма тонкощами етикету, за лічені хвилини вміти сервірувати стіл. А знати специфіку приготування та подачі фірмових, національних та звичайних страв просто необхідно. Офіціанту також потрібно прекрасно орієнтуватися в меню та карті вин. А гострий розум, почуття гумору та широкий кругозір будуть тільки додатковим бонусом при відборі офіціантів.</p>
                <p className='news__card-desc'>При навчанні використовуються авторські інтерактивні методики з використанням навчальних відеоматеріалів.</p>
                <h3 className='news__card-desc'>Вас навчать:</h3>
                <ul>
                    <li>готувати зал до обслуговування споживачів</li>
                    <li>отримувати посуд, прибори, столову білизну</li>
                    <li>полірувати посуд, прибори</li>
                    <li>складати серветки різними способами</li>
                    <li>здійснювати попередню сервіровку столів</li>
                    <li>приймати замовлення від споживачів</li>
                    <li>отримувати страви в роздавальні та в буфеті</li>
                    <li>подавати страви і напої;</li>
                    <li>обслуговувати неофіційні банкети</li>
                    <li>оформляти рахунки і розраховуватися по них зі споживачами</li>
                    <li>прибирати використаний посуд та прибори</li>
                    <li>замінювати столову білизну</li>
                </ul>
                <h2 className='news__card-desc'>БАРМЕН</h2>
                <p className='news__card-desc'>Дуже популярною серед молоді є й професія бармена. Це й не дивно, адже матеріальна забезпеченість – одна з переваг цієї роботи. Ми звикли до того, що бармен – це людина, яка красиво наливає в келих пиво або інші алкогольні напої. Він продає спиртне, стоячи за барною стійкою, і обслуговує відвідувачів. Сьогодні професія бармена одержала новий виток в розвитку. Тепер бармен – це не людина з міркою для рідини в руці. Культура розпивання спиртних і безалкогольних напоїв змінюється разом з рівнем і достатком населення. В столицях різних країн бармен «окультурює», робить саму процедуру розпивання приємнішою. Сьогодні робота барменом – це мистецтво. Мистецтво, якому навчають. Молодих людей – бармен в основному професія для чоловіків – запрошують на різноманітні тренінги, семінари і лекції, які підкріплюються практикою. Тож для досягнення вершин цієї справи, почніть з найменшого – з навчання. В нашому Центрі висококваліфіковані педагоги нададуть вам всі необхідні професійні знання за спеціальністю «Офіціант. Бармен. Адміністратор».</p>
                <h3 className='news__card-desc'>По закінченню навчання бармен уміє:</h3>
                <ul>
                    <li>обслуговувати споживачів: пропонувати, показувати, реалізовувати готові до споживання алкогольні, безалкогольні, слабоалкогольні напої (міцні, десертні, ігристі, гроги, глінтвейни, дейзі тощо)</li>
                    <li>змішувати компоненти напоїв в шейкері, крюшонницях, блендері, збивати їх за допомогою інструментів</li>
                    <li>готувати холодні та гарячі закуски: з грибів, сандвічів, канапе, сосисок, ковбаси, шинки, фаршированих яєць, овочів, фруктів, ягід тощо</li>
                    <li>зустрічати споживачів, ознайомлювати їх з асортиментом і рецептурою напоїв, які реалізуються в барах</li>
                    <li>організовувати роботу і керувати барменами, які мають нижчу кваліфікацію</li>
                    <li>забезпечувати додержання порядку розрахунків із споживачами, ведення необхідного обліку, складання та здавання товарних звітів, виручки, чеків</li>
                </ul>
                <h3 className='news__card-desc'>Сфера застосування професійних якостей випускників:</h3>
                <p className='news__card-desc'>Випускники нашого Центру після закінчення навчання зможуть працевлаштовуватися в сферу торгівлі, заклади ресторанного господарства.</p>
                <br></br>
            </div>
            setDesc(desc_);
        }
        else if (id == 'confectioner') {
            setTitle('Кухар. Кондитер');
            setImages(imagesConfectioner);
            const desc_ = <div>
                <h2 className='news__card-desc'>КУХАР</h2>
                <p className='news__card-desc'>Мистецтво куховарити – одне з найдавніших. Справжній кухар – це талант, яким володіє не кожна людина. По суті, кухар повинен мати особливий кулінарний смак, рухливість рук, адже протягом дня постійно щось чистить, ріже, при цьому пробує страву в момент приготування. Завдяки фантазії та вмінню професійних кухарів, кондитерів ми маємо змогу насолоджуватися незрівнянними стравами, які задовольняють не тільки наш апетит, але й естетичні вподобання. Оволодіти всіма таємницями надзвичайно популярної в наші дні професії Вам допоможе наш Центр.</p>
                <h3 className='news__card-desc'>У нас Ви навчитеся:</h3>
                <ul>
                    <li>здійснювати процеси первинної кулінарної обробки сировини</li>
                    <li>здійснювати допоміжні роботи з виготовляння страв та кулінарних виробів</li>
                    <li>формувати та панірувати напівфабрикати</li>
                    <li>готувати страви та кулінарні вироби, потребують нескладної кулінарної обробки: варити, смажити, запікати та випікати вироби</li>
                    <li>виготовляти страви з концентратів</li>
                    <li>порціонувати (комплектувати), роздавати страви масового попиту</li>
                </ul>
                <h2 className='news__card-desc'>КОНДИТЕР</h2>
                <p className='news__card-desc'>Східні рахат-лукум и халва, австрійський яблучний штрудель, французька тарталетка й відома шарлотка, англійські трюфелі… Так, це професія кондитера. Майстри з приготування солодощів цінувалися в будь-які часи. А рецепти знаменитих блюд зберігалися в суворій таємниці, передавалися в спадок від батька до сина.</p>
                <p className='news__card-desc'>Попит на професію «кондитер» і на сьогодні дуже великий. Цей рід діяльності має своєю умовою майстерне виготовлення різноманітних борошняних та цукрових кондитерських виробів. Вафлі, печиво, торти, кекси, шоколад, желе, морозиво, варення – це далеко не повний список усіма улюблених солодощів, якими може порадувати кондитер. Людина цієї професії готує за рецептами різні види тіста, начинки, крема. Окрім того, до його обов’язків входить і приготування напівфабрикатів, з яких потім печуться різноманітні вироби.</p>
                <p className='news__card-desc'>Однією з особливістю професії кондитера є те, що багато специфічної роботи йому доводиться робити вручну. Наприклад, прикрашати та розписувати торти кремом. Професія «кондитер» – складна і потребує не лише естетичного смаку та художніх здібностей від робітника, але багатьох знань та вмінь. У нашому навчальному закладі Ви зможете оволодіти цими знаннями та навичками.</p>
                <h3 className='news__card-desc'>Після навчання Ви вмітимете:</h3>
                <ul>
                    <li>готувати прості масові торти, тістечка та поштучні кондитерські та хлібобулочні вироби з нанесенням трафаретного малюнка за еталоном фарбою або з нескладним поєднанням фарб різних видів сировини (борошняної, сирної маси або морозива)</li>
                    <li>виготовляти види тіста, кремів, начинок, фаршів</li>
                    <li>готувати, штампувати напівфабрикати, формувати та викладати вироби на листи</li>
                    <li>оздоблювати вироби помадкою, марципаном, шоколадом, кремом тощо</li>
                    <li>передавати на гартування вироби з морозива</li>
                    <li>випікати (смажити) вироби</li>
                </ul>
                <h3 className='news__card-desc'>Сфера використання професійних навичок випускника:</h3>
                <p className='news__card-desc'>По закінченню навчання наші випускники зможуть працювати на підприємствах громадського харчування (в ресторанах, кафе, їдальнях), в кондитерській промисловості (хлібокомбінатах, пекарнях тощо).</p>
                <br></br>
            </div>
            setDesc(desc_);
            setVideo(<div className="staff__wrapper">
                <div className="staff__item">
                    <iframe className='staff__element' src="https://www.youtube.com/embed/RMXVDqxxaGA?si=WEBSbeFL_LHZxPuN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>);
        }
        else if (id == 'admin') {
            setTitle('Адміністратор. Агент з організації туризму')
            setImages(imagesAdmin);
            const desc_ = <div>
                <h2 className='news__card-desc'>АДМІНІСТРАТОР</h2>
                <p className='news__card-desc'>Професія адміністратора передбачає здійснення роботи з ефективного та культурного обслуговування відвідувачів. Адміністратор – багатогранна спеціальність, з доволі широким переліком професійних якостей. Професія користується стабільним попитом на ринку праці – адміністратор потрібен майже у всіх галузях – від салону краси до великого виробничого підприємства.</p>
                <h3 className='news__card-desc'>У нас Ви навчитеся:</h3>
                <ul>
                    <li>забезпечувати роботу з ефективного культурного обслуговування відвідувачів</li>
                    <li>створювати для них комфортні умови</li>
                    <li>здійснювати контроль за збереженням матеріальних цінностей</li>
                    <li>консультувати відвідувачів з питань наявних послуг</li>
                    <li>вживати заходів щодо запобігання конфліктних ситуацій</li>
                    <li>розглядати претензії, пов’язані з незадовільним обслуговуванням відвідувачів, вживати відповідних організаційно-технічних заходів</li>
                    <li>здійснювати контроль за раціональним оформленням приміщень, стежити за оновленням станом реклами у приміщеннях на будівлі</li>
                    <li>забезпечувати чистоту порядок в приміщеннях на прилеглих до них територіях</li>
                    <li>контролювати додержання робітниками підприємства, установи, організації трудової виробничої дисципліни, правил норм охорони праці, вимог виробничої протипожежного захисту</li>
                    <li>інформувати керівництво підприємства, про наявні недоліки в організації обслуговування відвідувачів, вживати заходів щодо здійснювати контроль за виконанням працівниками вказівок керівництва підприємства</li>
                </ul>
                <h2 className='news__card-desc'>АГЕНТ З ОРГАНІЗАЦІЇ ТУРИЗМУ</h2>
                <p className='news__card-desc'>Подобається подорожувати, цікавишся культурою інших народів і при цьому бажаєш отримати престижну професію? Тоді спеціальність агента з організації туризму саме для тебе!</p>
                <p className='news__card-desc'>Багато людей люблять мандрувати, проводити свою відпустку у туристичних подорожах. Щоб відпочинок або подорож були цікавими та зручними, варто скористатися послугами туристичних фірм, агенцій, де можна отримати вичерпні відповіді на запитання щодо конкретної подорожі чи туристичної поїздки. Тут можна дізнатися про вартість подорожі, умови, що пропонує туристична фірма (транспорт, побут, харчування, екскурсійне обслуговування) тощо. Дати відповідь на ті питання та допомогти людям найбільш повно задовольнити свої бажання може агент з організації туризму.</p>
                <h3 className='news__card-desc'>В нашому навчальному закладі ви навчитесь:</h3>
                <ul>
                    <li>виконувати роботи, пов’язані з реалізацією комплексу туристичних послуг</li>
                    <li>бути представником суб’єкта туристичної діяльності виступати його</li>
                    <li>діяти відповідно до законодавства України про туризм та інших нормативних актів органів виконавчої влади в галузі</li>
                    <li>працювати керівництвом професіонала з туристичної діяльності</li>
                    <li>вивчати вітчизняний та зарубіжний ринки туристичних послуг, характеристики обертів туристичної</li>
                    <li>робити аналіз змісту, вартості, особливостей послуг готелів, музеїв, транспортних підприємств</li>
                    <li>брати участь у розробці внутрішніх та міжнародних маршрутів</li>
                    <li>самостійно здійснювати підготовку даних для складання кошторисів турів або екскурсій</li>
                    <li>виконувати рекламну діяльність з метою залучення громадян до оздоровлення, раціонального використання вільного часу, проведення змістовного дозвілля, ознайомлення з історико-культурною спадщиною, природним середовищем</li>
                    <li>надавати повну інформацію про обсяг, умови та якість туристичних послуг, що пропонуються суб’єктом туристичної діяльності</li>
                    <li>самостійно вести облік заявок договорів на проведення турів або екскурсій складати документи звітності</li>
                    <li>брати участь в оформленні угод споживачами туристичних послуг, туристичних ваучерів, путівок, маршрутних книжок, інших документів, що визначають статус туристів основою для здійснення туру або екскурсії</li>
                    <li>забезпечувати своєчасне придбання проїзних документів для груп туристів, виконувати обов’язки, покладені на нього суб’єктом туристичної діяльності</li>
                    <li>виконувати роботу з посольствами та консульськими відділами для отримання віз</li>
                    <li>використовувати комп’ютерну та офісну техніку</li>
                </ul>
                <h3 className='news__card-desc'>Сфера професійного використання:</h3>
                <p className='news__card-desc'>Aгент з організації туризму буде запитуваний у туристичних агенціях, без адміністратора не обійтися у готельно-ресторанній сфері, туристичних комплексах, салонах краси, великих магазинах, приватних освітніх центрах, клініках, у розважальних центрах, спортивних закладах тощо.</p>
                <br></br>
            </div>
            setDesc(desc_);
            setVideo(<div className="staff__wrapper">
            <div className="staff__item">
                <iframe className='staff__element' src="https://www.youtube.com/embed/VlEj2CakXVg?si=5uCBmSJ4RZl9FA7D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>)
        }
    }, [id]);

    return (
        <div>
            <Header />
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">{title}</h2>
                    <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false}>
                        {images.map((image, index) => (
                            <div className="carousel-container" key={index}>
                                <img src={image.src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='wrapper'>
                        {desc}
                    </div>
                </div>
            </section>
            {video}
            <Footer />
        </div>
    )
}
