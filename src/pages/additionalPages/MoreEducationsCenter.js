import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Footer } from '../../components/Footer';

export const MoreEducationsCenter = () => {
    const { id } = useParams();
    const [isVideo, setIsVideo] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState();
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState();

    const imagesEltoro = [{ src: 'https://previews.dropbox.com/p/thumb/ACMbh6nvTNPxB75zxU4rVU92XTfxpfSQF_HYZC658GjYDW5q0aUL88pHaBEf1UsreFFR58ZtewxOVuJqwUrbntGDTvIroTts4pmfL5bpGx2GZDDbDO7s0ZptYuEyNp4ikB0CbPeamapI_DEHjpSrLWwvxDhicLcUUOtTscH592G8jQQ4C53C9ys9mwB4srbt2zCvKAspfNQUgqsZSFbqzhZcUf9UMd0VV7EOGipetsZYVWpQjSoTeVNSulJByDnxpKCXl5YchzkVAQ7-L9BE1CPDIvsP3A-u9RkmP2hoAN3q3s5O_1pdDR1lEmZFN5SxDG7_H6Ue6sb4ZIVrKOlx_UbG/p.png' }];
    const imagesStyleV = [{ src: 'https://previews.dropbox.com/p/thumb/ACPaEN_9h59povZIKTK_mbxhQSxfDlZ-V0ZCLfldvHRrOrdr4XdXcu2B2ccVccmdt_BXzQg8nLOuA7ZsZhpohSO12exKoN1Hwkd9yLkne3UUtDY3YEYuG73GXGXYL2sQ3tXT_8JLp-LVVoMpoTbMF_Pxe_-GHBU0CncIvoRrMmj6F6HF7w7z3L4xGtUKsbLK8PEY9VzeLCc31s_rS-ivMibvbCVAhpmPWd_gfH88eRaW_DQRgqWixWARUh_Vh1piV6ILi30rV6xMJYvuB5xEmu_cLrucj81BsvjK-9ybxGXK2xAJgSfcTTqR6bl7jIQuI-kzHuJI5wSzeHUtVxd4eqB7/p.jpeg' }];
    const imagesSoloha =
        [
            { src: 'https://previews.dropbox.com/p/thumb/ACNi91x53Ig0J-jPl-FHkwuERYypGGkSBtVOBa29ayeeQyDV5skBvzliis13ShR9ozV0DRiP0yb98ZP-g4Ifx0PyyOdMeBT94mxTBnjh0XLgMzotPz_lXbeTGqJEPz2JfTw-dduyuy42o3COSUyINU4mGF7GMDojBmq1hMV8tdWC7PuXJHG3VY11OIloGO3knw2z5ddST2OE-T_qWOcatJHiA6ttyaJmpUTO-_XoTHBXbKGf4IxVB0hDaeDGri4WNCFAs5hCkF1bCFwUMDePr-H2t2ftQZkUtJxm5l0c8-AOgnxk_lijgO6V34SBrtC4Jx8hxKjY5ytxbxLXgEzqXbY0/p.jpeg' },
            { src: 'https://previews.dropbox.com/p/thumb/ACN-HME7ZgkwkA_SVhS04o_wPDT_PZRsUzO7SZGYtSIaaECWzhLRKkrfG7bZvPjYKbl3BDA4OCZB6INeJGOTRDnLjHncpCO9AAz3SUtp9XrswEXn0IKX3hYJrLLSr75WjqTL0t4goF18u0My-E3tSn5T0QjlHnihZbR2uuBheHkHMJ5JIYxaYnMROV6TuZY2K_tu3CMy5s-4N1ZN1zdD09uuoWIIv4I79b9LCGeYqvkfR-FmA7-o2mHZukPnuclRLv38E72YYXakXSj_567MVZ1f2ZRYOW-nDMWZm80TII_6l7MQiiUBWqPnIeOKNtAkrXhBXn-fj9ZCNA5knnVI4M_N/p.jpeg' },
            { src: 'https://previews.dropbox.com/p/thumb/ACOiJPjEc22IbH4-rycr2j4tKT3Om4vvsaF9N-0w7LUhAnGf3by59U4VymPmPanIO3fDkVSzVVMA3uuc8cJRQBiILRgzrkiKrRNI-xJfqGrqxzHUa8SuISYKTe4h-ub9rSnOlZNtg9EmypKO8aLhbn7HSP5jaXUvMQHyxJaXkFUe-QdJu7-4P53DqhAuXWUbf9HShXB4sVm26tagXzWiT_iRBx-NIOs7A2mzIJexaGZ7pmPOGboZ-RKRJRY7MrboiOzAhM3Ne_vLoW7Z4ZKNO4jGie6Ji2wax3XLjjgZo_Pgh6l_T3IZK4SErKRRCNFsfO_mwZhIkqElGKhM9fa_zwOO/p.jpeg' },
            { src: 'https://previews.dropbox.com/p/thumb/ACPj5VUZA4xKPdwlt9eQYVmiGfNQ2YuE_1L4ak5GgtZp86S8MxcCElFg8StD3F4PFcye3j2w7BLFTYC1tC05JwGcT46lq-eiyY7DNMYjemdh6-9OUFxqCOJPq8nh1BYUkzIm6d_sV_dTzmrrb2k29O33o_Z8oIaJnyfHMsFleNeLJzrC7rdugfErG0W9GB_BCilCGxLsLRczTUMvXbxyqH1JNeOLEAe2piQjum0Jtn8XxQvTx27oxL6qgtkyzswOiwMiBYL2InP6DXgBpW9lFUzHJ9aZyiq6V4HenWpD7oAWpl4KuOx1N8NVQXEu--bgy3Q74Y3GXO7lswDMn5YS4k80/p.jpeg' },
            { src: 'https://previews.dropbox.com/p/thumb/ACMHW5KNKr7DqZ_-UqJ98Xf_2AeQ2STJzz26vw97rSwdiwLkRCJ15_NasHU2-uDTn5Lh6MYgTh5QMVR1WUyn6QnLhxqVrHrddTV0_G0Yfhl5n8ej2_tXP2Hic8eJX1Y9FweBd7rXaeTiDEXMnzQD1OTl5OZn2pvK4ook_-hFgoWHQhy4DnXHic4B0nY8cHW2dyosppxzCbuEKSh6lTWYczowZpiNcugGT1LkoaBAQhDP86gH6UUPK-8rSK96mRPKGjH1X0cYXKHAlIsyRWxv7XHs1SAwc9PFrdmXFcOS9pfnu2fl4Ph9653ttqkfj2cIoN3XHKr7Z5eP05Wy-jLPDHn0/p.jpeg' },
            { src: 'https://previews.dropbox.com/p/thumb/ACOuYMQW6k3YV_ZPLVSDlfdpPYpgcBqUBC4eZX4hPCe_lkhrvLtnk49CYOWzP0qkpkmsF4uBrnZRL4mz6reKTygPdWMgRKCAt4fouFTe-CeARNEmqx59FynGYBYncMlzTjA_tD7qX4svMxYEt5I_VjA_WxN-4O7WKl3zZbJgRYvac8OxWlAXNz-tvRuFi_CBgr48kiLYRJvETZCe4pdPudUh85A8yZNGMFAlBsTevEzw_nm44aPY-a7wj1WSp-MKCim2U7nVMUfJqXxQbg6NN1YIo3rZnwI9HkuNylkhfIr2n1J8hhO87bD5g35mLvQn7npnKbhEs7XyVso0F9qZ0lkD/p.jpeg' },
            { src: 'https://previews.dropbox.com/p/thumb/ACP9LtatTVu6eOwNz-13tTI2xEb_rv2GsDUgyEvquO7YZMgloYOHrfRsZ4Lswn_aFa1dcY8wrFyVK9IlaXBdwbrZ6XA8Fle2wu7cIJVIP7GVRIFDpATq_sY1WDn-oFTyLsmbSuV15NdvRjQqsB1aicz0f7uk_WreK4W215TPD5EYy0yL1Kyt7bgedjstN1bdNbImt5QcfZuPiki0LfKkxIxQfnhqYXwlc-yWf9-e8zw-DC_-hfcON01RijNTHa_VtyjtPcctzKf6RRuEdcR2Gpk0BEEVPgVxYh6-BM6QfpA2Nns6NNR--gwOn67giFzDXJVbELBvHqxWNwgPukuuoQ46/p.jpeg' }
        ]
    const imagesAcademy =
        [
            { src: 'https://previews.dropbox.com/p/thumb/ACN4dGx0nVegadKUdRw-y7xaxvBRPTEWOEdDrDBp3AaN4FNYsPMjxZ9BiA6Wz50tqBnQMP40DkCwJxJvDQBnw0kFkJYxMBjpYK88nDDn4BJf88ZaJF8zTPmyfig0N1HB3k3rdAhUHn3gtjEoQ4Beii-rFU0oNrwxb0BU_-qX92ZcojrVCyptxke_oALfMKFAWyHXTkHCsn1S00hwZ_3zOB3glryCpuVdiReW5OvvpgSpwRnKF94OA3x8pVdlKY00cIgaCae4q-4YHMeURawTqXue1TCcH8H9aQVw_RI4IrKfga6PP31nKkyJlsnLmaJMTfYu2B3iZ1tfwUyy1RDP5KhY/p.png' },
            { src: 'https://previews.dropbox.com/p/thumb/ACOn_sr8HQUSHJtiSwfAJNAVL6b7L6cHLoJQkUHHFJL2-Ah06hRnWfRLd_dRkH4ykUVxPdc-mf-PoCdCHCMK44f2fg4XbTTvttmR1q-lIWEMnaCsU6w10a7Dulu27dlZhdMjT_Au6W4QcNlH9RZPUU0dRvrqMt1K3U4FAz7P6nHX-vtOV1_KCZoL8Io_LogN3wtSyEPkewAQ5uqGKMgIOEN8osAc9BgvZzuJXobIG6XfQqA0P7FglZRnn2WhpHaA5wGRvlgvfW-XiaMnix0xhUzrLO1NDDXr-xJ96wtP-0p7ZnE_pViRP-EYJOotecGM8ujIxQG3EnXwzeyAN7NYOmvx/p.jpeg' }
        ];
    const imagesGloab = [{src: 'https://previews.dropbox.com/p/thumb/ACOCE_Ltmf_50ItwTEaSqa0x3DLs1A_RFLEM5lwchTzVL6uyzmAwJbeO4spPLm2WFKO_TF9dJGF2TSAagGjZRH6ofcHeJgc7tAfQbr2RF_MhX04pg42bVLfspT77Yg7W3GHDxknXs-0a8DeNfKbhe_wuZGuEQuPvLPQBr77Wk039AtAgG-TolH68KkrltYXBVuPjqRhmyREtYCUVNkKxX4Iq7f8T_KZriqW1AaMaOkMqqlzdIwITV3oXihTR02aIqhoW21rM-zNWOQUotv2DQA8jGZV-XmsDHjl72PtzdEPKbq65NIYkdwKPkrGUIXdCMJLXr_3A8kxMKimlPspJyTXU/p.png'},{src:'https://previews.dropbox.com/p/thumb/ACNPMAyicDPTM1qA48SNVZauAusyVSlHtmwkCvEIYpboWpS8GZcP_SDgwhZ3ZCekW4owXK123wpNlOlzSUa0NJPXfrSP5taQf_rHM6NBDfXi6oLxg2Okit6_oWmhS3koT4RF8h87Bpj8fgQAKcTh_UKhMPh0ya7SPe-ghohOUnUXtc-gITRDd6jMIlWUdOQg65htXQWypCbkBdgeQX8kXZkcNiCReG7BGmhU963Q-1LgjUlXltWsKbGmtaBEwBBJJYW5TgWCry1BYlFWEb4NUzZ2KgUS4t5ApD6S-SNvJqpyPecLHmPqF9ZcXaKYTA-zqhsOUVwt8_s7THaoKdfKRYRo/p.png'}]

    useEffect(() => {
        if (id == 'eltoro') {
            setTitle('Навчально-практичний Центр “Ельторо”');
            setImages(imagesEltoro);
            const desc_ = <p className='news__card-desc'>Навчально-практичний фітодизайнерський центр “Ельторо”, де учні на дослідних ділянках і за індивідуальними замовленнями висаджують дерева, кущі і квіти, вчаться правильно їх поєднувати. Вчаться створювати гармонійну, унікальну садову ділянку, щоб вона пасувала стилю її архітектурних будівель. Учні за індивідуальними замовленнями здійснюють озеленення офісів, інтер’єрів, приміщень, фітодизайн інтер’єра (прикрашають і декорують квітковими композиціями стіни, столи, фойє та будь-які приміщення).</p>
            setDesc(desc_);
        }
        else if (id == 'styleV') {
            setTitle('Навчально-практичний центр «Стиль-V»');
            setImages(imagesStyleV);
            const video_ =
                <div>
                    <div className='wrapper'>
                        <h2 className="news__title section-title">
                            Навчально-практичний центр перукарського мистецтва "Стиль-V"
                        </h2>
                    </div>
                    <div className="staff__wrapper">
                        <div className="staff__item">
                            <iframe className='staff__element' src="https://www.youtube.com/embed/yRrayh48hpg?si=NOXlvRjHA3onJ5xl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            setVideo(video_);
            setIsVideo(true);
            const desc_ = <div>
                <p className='news__card-desc'>Метою створення НПЦ стало вдосконалення теоретичної та практичної підготовки фахівців професійно-технічної освіти нового типу, конкурентоздатних в умовах ринкової економіки.</p>
                <p className='news__card-desc'>Це один із підрозділів закладу, головними завданнями якого є:</p>
                <li>вдосконалення практичної підготовки учнів та слухачів ПТНЗ</li>
                <li>підвищення кваліфікації</li>
                <li>підготовка та перепідготовка робітників підприємств, організацій, установ.</li>
                <p className='news__card-desc'>Для учнів тут створено 28  робочих місць, які забезпечено новітнім професійним обладнанням. Такі умови дозволять максимально ефективно взаємодіяти майстру виробничого навчання з учнями, а також максимально втілити в реальний освітній простір ідею безперервного розвитку освітньої мотивації учнів і на практиці реалізувати сполучення «успішний учень – успішний  майстер – успішний навчально-практичний центр»</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Професія, за якою здійснюється підготовка</th>
                            <th>Категорія слухачів, для яких ведеться підготовка</th>
                            <th>Чисельність слухачів</th>
                            <th>Термін навчання</th>
                            <th>Вартість навчання 1 слухача</th>
                            <th>Обсяг навчальних годин, всього:</th>
                            <th>Документ, що отримає випускник</th>
                            <th>Наявність соціальних умов</th>
                        </tr>
                        <tr>
                            <td>5141 Перукар (перукар-модельєр)</td>
                            <td>Фізичні особи Безробітні, направлені центром зайнятості</td>
                            <td>7 осіб</td>
                            <td>5 місяців</td>
                            <td>8174, 9 грн.</td>
                            <td>759,25 годин</td>
                            <td>Свідоцтво</td>
                            <td>Можливість харчування у їдальні; можливість проживання у гуртожитку</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </div>
            setDesc(desc_)
        }
        else if (id == 'soloha') {
            setTitle('Навчально-тренувальний центр “Солоха запрошує”');
            setImages(imagesSoloha);
            const desc_ = <div>
                <p className='news__card-desc'>Центр створений професіоналами ресторанного бізнесу і має державну акредитацію. Наші програми створені і адаптовані до потреб ринку. Навчання проходить в добре обладнаних умовах, які відповідають останнім сучасним тенденціям ресторанного бізнесу. При навчанні слухачів використовуються авторські програми, засновані на досвіді кращих профільних навчальних закладів м. Москви і м. Києва; тут проводяться практичні роботи на сучасному устаткуванні (професійні барна і кавова станції, обладнаний в кращих українських традиціях зал, що імітує зал ресторану з використанням професійної сервіровки). Лабораторно-практичні роботи проводяться з використанням дегустаційного матеріалу ведучих світових виробників (горілки, текіли, джина, віскі, коньяку, рому, кашаси, лікерів, сиропів, кави італійських ростерів, чаю і тізани Китаю, Африки, Америки, Індії і Шрі-Ланки, а також вина Франції, Італії, Іспанії, Чилі, Аргентини, Австралії, США і вітчизняних виробників). При навчанні слухачів використовуються авторські інтерактивні методики з використанням навчальних відеоматеріалів.</p>
                <p className='news__card-desc'>Навчання проводиться за наступними спеціальностями:</p>
                <li>Продавець-консультант елітних спиртних напоїв (кавист)</li>
                <li>Офіціант</li>
                <li>Винний стюард</li>
                <li>Бармен</li>
                <li>Барист</li>
                <li>Бармен зі знанням вин</li>
                <li>Адміністратор</li>
                <li>Адміністратор зі знанням вин</li>
                <li>Тренінги для менеджерів ресторанів, барів, кав’ярень і пабів</li>
                <p className='news__card-desc'>Після закінчення навчання видаються дипломи, посвідчення і сертифікати державного зразка. Крім того, проводяться тренінги по вищезгаданих спеціальностях з видачею сертифікатів.</p>
                <p className='news__card-desc'>При колективних замовленнях від організацій можлива розробка спеціальних програм навчання з виїздом викладачів на місце навчання. Слухачам на час навчання надається житло (за додаткову платню).</p>
                <br></br>
            </div>
            setDesc(desc_);

            const video_ = <div>
                <div className='wrapper'>
                    <h2 className="news__title section-title">
                        Ресторан в українському стилі "Солоха запрошує"
                    </h2>
                </div>
                <div className="staff__wrapper">
                    <div className="staff__item">
                        <iframe className='staff__element' src="https://www.youtube.com/embed/fSHsZ4-TAG0?si=4kBStfL-XMxewX3S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            setVideo(video_);
        }
        else if (id == 'academy') {
            setTitle('Навчально-тренувальний центр “Академія гостинності”');
            setImages(imagesAcademy);
            const desc_ = <div>
                <p className='news__card-desc'>Центр створений професіоналами ресторанного бізнесу і має державну акредитацію. Наші програми створені і адаптовані до потреб ринку. Навчання проходить в добре обладнаних умовах, які відповідають останнім вимогам ринку. При навчанні слухачів використовуються авторські програми, засновані на досвіді кращих профільних навчальних закладів України. При навчанні слухачів проводяться практичні роботи на сучасному устаткуванні (професійні барна і кавова станції, добре обладнаний зал, що імітує зал ресторану з використанням професійної сервіровки). Лабораторно-практичні роботи проводяться з використанням дегустаційного матеріалу ведучих світових виробників (горілки, текіли, джина, віскі, коньяку, рому, кашаси, лікерів, сиропів, кави італійських ростерів, чаю і тізани Китаю, Африки, Америки, Індії і Шрі-Ланки, а також вина Франції, Італії, Іспанії, Чилі, Аргентини, Австралії, США і вітчизняних виробників). При навчанні слухачів використовуються авторські інтерактивні методики з використанням навчальних відеоматеріалів. Навчання проводиться за наступними спеціальностями:</p>
                <li>Продавець-консультант елітних спиртних напоїв (кавист)</li>
                <li>Офіціант</li>
                <li>Винний стюард</li>
                <li>Бармен</li>
                <li>Бариста</li>
                <li>Бармен зі знанням вин</li>
                <li>Адміністратор</li>
                <li>Адміністратор зі знанням вин</li>
                <li>Тренінги для менеджерів ресторанів, барів, кав’ярень і пабів</li>
                <p className='news__card-desc'>Після закінчення навчання видаються дипломи, посвідчення і сертифікати державного зразка. Крім того, проводяться тренінги по вищезгаданих спеціальностях з видачею сертифікатів.</p>
                <p className='news__card-desc'>При колективних замовленнях від організацій можлива розробка спеціальних програм навчання з виїздом викладачів на місце навчання. Слухачам на час навчання надається житло (за додаткову платню).</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Професія, за якою здійснюється підготовка</th>
                            <th>Категорія слухачів, для яких ведеться підготовка</th>
                            <th>Чисельність слухачів</th>
                            <th>Термін навчання</th>
                            <th>Вартість навчання 1 слухача</th>
                            <th>Обсяг навчальних годин, всього:</th>
                            <th>Документ, що отримає випускник</th>
                            <th>Наявність соціальних умов</th>
                        </tr>
                        <tr>
                            <td>5123 Бармен</td>
                            <td>Фізичні особи Безробітні, направлені центром зайнятості</td>
                            <td>7 осіб</td>
                            <td>6.1 місяців</td>
                            <td>7589,34 грн.</td>
                            <td>840,25 годин</td>
                            <td>Свідоцтво</td>
                            <td>Можливість харчування у їдальні; можливість проживання у гуртожитку</td>
                        </tr>
                        <tr>
                            <td>5123 Офіціант</td>
                            <td>Фізичні особи Безробітні, направлені центром зайнятості</td>
                            <td>7 осіб</td>
                            <td>5,8 місяців</td>
                            <td>7550,14 грн.</td>
                            <td>859,25 годин</td>
                            <td>Свідоцтво</td>
                            <td>Можливість харчування у їдальні; можливість проживання у гуртожитку</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </div>
        setDesc(desc_);
        }
        else if(id == 'globe') {
            setTitle('Навчально-тренувальний Центр «Глобус»');
            setImages(imagesGloab);
            const desc_ = <div>
                <h2 className='news__card-desc'>Навчально-тренувальний центр «Глобус» – це:</h2>
                <li>Педагогічний колектив високої професійної майстерності.</li>
                <li>Координаційний центр співробітництва державних закладів, громадських, дитячих і молодіжних організацій, технікумів та ВНЗ.</li>
                <li>Школа розвитку особистості, надбання навичок здорового способу життя, працелюбства.</li>
                <li>Науково-методична база для проведення занять, екскурсій, походів.</li>
                <h3 className='news__card-desc'>У центрі працюють:</h3>
                
                <p className='news__card-desc'>Гуртки:</p>
                <li>Пішохідного та лижного туризму</li>
                <li>Туристів-скаутів</li>
                <li>Спортивного орієнтування</li>
                <li>«Школа виживання»</li>
                <li>Туристів-краєзнавців</li>
                
                <p className='news__card-desc'>Клуби:</p>
                <li>Спортивний клуб «Грація»</li>
                <li>Клуб «Дебют»</li>

                <p className='news__card-desc'>Традиційно центр проводить туристично-спортивні та краєзнавчі заходи:</p>
                <li>Змагання зі спортивного орієнтування «Полярна зірка», «Осінній лист»</li>
                <li>Туристичні змагання</li>
                <li>Туристично-краєзнавчі масові акції «День туризму», «День землі», «День здоров’я та спорту»</li>
                <li>Навчально-тренувальні походи, наметові табори</li>
                <li>Тематичні лекторії:
                    <ul>
                        <li>археологічний</li>
                        <li>історичний</li>
                        <li>етнографічний</li>
                    </ul>
                </li>

                <p className='news__card-desc'>В умовах навчально-тренувального центру учні вчаться надавати:</p>
                <li>Послуги агентсько-операторської фірми</li>
                <li>Організація екскурсій</li>
                <li>Страхування життя клієнта</li>
                <li>Перевезення туристів</li>
                <li>Розміщення клієнта</li>
                <li>Матеріальні послуги (додатково)</li>
                <li>Розробка й вибір туристських програм</li>
                <li>Екскурсійні маршрути</li>
                <li>Тури на відпочинок</li>
                <li>Автобусні тури</li>
                <li>Комбіновані маршрути</li>
                <li>Зимові тури</li>
                <li>Тури для школярів і студентів</li>
                <li>Бізнес-тури</li>
                <li>Бронювання місць в готелях</li>
                <li>Замовлення авіа- та залізничних квитків</li>
                <li>Екскурсійне та транспортне обслуговування</li>
                <li>Послуги гідів</li>
                <li>Замовлення квитків на культурно-масові заходи</li>
                <li>Організація і проведення конференцій і інших ділових заходів</li>

                <p className='news__card-desc'>Ми навчаємо учнів працювати оперативно, бути максимально ввічливими і уважними.</p>
                <br></br>
            </div>
            setDesc(desc_);
        }
    }, []);
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
