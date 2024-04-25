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
    const [buttonMore, setButtonMore] = useState();

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

    const imagesFlorist = [
        { src: 'https://previews.dropbox.com/p/thumb/ACNDsCBDSwgBkbDQEe8PCe6jTDuyzXvJQ6d8ZpE4BLGsuxDHakXTOmk9ccUJB5cd1l9ccdnx4tDTW7mWeO_5inA3kF40m7BzuEDCx5uUKKzH2ht_VrtFnLHXgXD1zba9lPo1zOkjQTMh1wHypuZ0NVffrhFhL_L3ge2gmBdNUbxq0CaBaBKy_mPHEqgwG2-5MISmt7hanWh4IQTCgrsNpywjwLCA_8Gq3rssCPjxASTl5lhQBlz_YApugahnwcHhJkNR2NYYnwM5I47w_waRWU7Ga_w4rlwCf_hHO4i8mKwvD7je6djw77BU5mWkAyK60lp9gfX3Ir7sRqV9feqvcA9qzI4sbvkyPkeX0Ts2Ed33cqpNt1NhDEtDgZwukxvma-OwXdYPIWHi2ZpYAtUtPNl3TgrcmmVlrnIe_TQ8M3nLGg/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACN8yfkf1s9_Ksjwc8qetCiNjeS8fCpoOyF3E_loCLaSxLVLjtPR2UqOq_cO1HDMfNS4aagHU7FusQsAD0_sn9qzmUGLZpHWHcb_6LbzfLv2wRQcqtow7VeJzLulc6ByCIRB9uPEommXrsxKQJw74_uQmvEqabq0Rqh4Gj2iy5-j0BIV1VLhmOx-SGP5NTN8P0YIZqnuhEO3uTQbjS0kHcUD1Ie1NHyGnBJHNBxb97b8nmEcbR5-coQX9I5rU7xMUZ5kiAsWT4qStw-NYGxUGjzmhJXqPoAoLVPM18CUVmxa5KUHVFjs8tprdrq1cXhPYvwV1StW1nnzTE6EgSNmoqsPLJtX-HOzjrNXysU7fiZBpI4RVm-OiKPnXcpU7yeMRDMR_f5ddDpY6p01wtdmqjTpp-C5M9dXc9yKL0e12jUrmg/p.jpeg' }
    ]

    const imagesHairMaster = [
        { src: 'https://previews.dropbox.com/p/thumb/ACPadqzDqarpaBxHkezzE99Rab3H9OKrrD48UhijRXml1b9oqduZA3QoeDw8Se8vYCJvLevOCU03ardE00JVdZ4yWHTH1Q5dxzNqsK9RaBUCx5F1hRxlXbm3I_CgPerhSw7WQSHYrzT-ji9wu3_3t78qXZniv9AnsnH7PU038tQf4fpkPQjHJryr_D7Sqt6iXBPC-k4IlxKrMLCipvix1zCGULZKqJEfMR0VE0eIgAr3vgxuG7SlWH3XSkuJ1CmVd39SMY51cilzYnERIXBODnqy3c2Gk1bq9JWsAcVdEZB2XzyUkA83PZ-b5pMK6Tb-B55rXXdEUxTyqGI9vsy85MkBFvMokTjQc_3Xc6d2w9ZqAvFjYjj-SSrLwb3byvdUK8boAzYaB0m5_tvxLz5gRZqw4UJMkdI6PGx8MxdtFgsVaA/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACOKRzm3UNGKBnOaPVxB26-t7Lj5Q0Ybv5HSnQvK9jakDfrlyl6IHJyYcJ3owYMVCZ5GkfBeaXsaeyvQ8Y9tE_A8wGRe4sn-npEQ9735UHvbknRs5yCcQwH6AQBmaHcxPtKFAErCVzKWm_r63uoHETSK2dicdBJDLkAqvKQK0OhxuU7jCEF1YpIf84eBfFd6m_etq84JGoNBb1HuyEcmtvjPHNDnn3VLMC5y0YP99giI3XfwcS2BtMByRMBW7VZZaRsb5K3mkYB6eXqMqqgdtgxOEoSPAHdTFg8A-biIO9snrgC4liOQvf-vgr9FJpap5Vo9odCLACUYAqP5lOFZTepReEG53nMfmZjs9Z2A8aXS9-ZQW3BxNejzU8MPZXBJHE-Nwj3Qu7HwUtmq1TZcBvxZ8gafKCb7VfqjgMBDR-Pm4Q/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACM8bZ56ov3VqU5aqNtOVmtPPAlsYE2j94JtrlBFaDGbjAljaOHzbKIli6fM-FHQtxO_gBCjiWKVgb3ziSvExLocD4zd1-BrWXiwI6KU-MDwL3_fIKPkv1RvLrE0EqV0FTBgPAuLYdhoc5wqbJCSY_GY4IMRrY18UlZY1qQjv9ZXk53Egm6gePeE9j_qPsLMpMN5-N9ui086u9eu3cs7nUC42oxtHF7JSlI5j2GZUyjP9w3dFb4opP2B5JiXf5o53VUDtoYyKOnwUibE7_AFUNJ31ps_wITZd3G6gj9FzPGHvwz_I232bcBFkOqi2O_S2xdM_Rx5qkzNFlAW0bwVSIpdnxmuvZYnqB2X2r1ahvXHi8teyPMRw6YTnGKqCMnbh8E0k4eJtOBVm2_vzWiWwuFJBI87XZ2f7evRctxZ4FkqFQ/p.jpeg' }
    ]

    const imagesNailMaster = [
        { src: 'https://previews.dropbox.com/p/thumb/ACN1l6jPvEXhyGvhzc5vMaUELXPo9labW77led8fC5IAYVCzDHByCl-wjkDrVh1oBioda0Z_g97N5pHwtrZv5Qz9S8_MWKsUtKI4-zfrvuMu_QBmykKxYflsmQIFazMUV1-jGwMbOHpepzEsiKrNUu6X9n1UhBGNVnK9olNIxXFkQL_Z0GgTtsi-BwSLpRv4zkVYutR_bnPw7Zaol9p1D6Z3LOe8VMjER1Q7uJ4GVYTo6VkT0hrWDSviu6e_8-9gXtUfVXJoH3oWFn-L-e-ZwXJrKWx-MdTfQ8hGMEQcHQtvVktH2XOyk8qMDRZE3j2ENF-3Yk7Yp2CkWL_geow8pRgDm5E22PdGDeldGnoHM6kvIjDbqopejXS_TsSJ9zvt-y0KSw_2XPhD1zJOVgTaYYmq6N2TJyPfkbPLMn9d5EGTtg/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACOafbEAQXbnB13Fklipms7-L-y5mhTgCaXPbtrvXp0ENx45t_fe1BhJs3e9qERncyajza4jugcn19GFeoVpeOlBqTCAYfS7aBVMPT64cU-DMUfo83oKy2kGjRrunQ3oVg2SkN-rD6sYEupwFsiDkXf2JjwfLmIQ7aFP0Jn9PNwfiThlGVKrCYoAgPWF2EQbritEK-F1AIjKmQSY6CkWR1JJT9mUK-dmQtj8Qa66Pm62OLSDIny6WhqjEYJRywNY_NCMm-4OfW9R14LopdRrlNy2vTzTFWKn18OMLRSkMxVse_hkbL5XlnO4cytWhaeDZuagS-AcZt9X7JrPHCxC4HK2bEV6QwsYtQQwmQ-8BBWfQlQ3EYqmddZ08px7dGAhehOI-au0Xw04PxN_whXgdN9_WOasNlejZnghcb_k1DQhBw/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACM_hVlq2PFPj0lE88yd37JN-Sg37QGYHdtW-G_JTEP06Mv88l9RyTjf5X37I3PD9w6e5vgzRF4ews1kNwRxXUCwMTF7UthQJMVnoL9E1I9Y8GC5-4JWmKaqgKiUhBwXnvl-3LIqs5DvkSadDN3C7bVPDrUuFSkqddD7rdhSMPDuDu3xPhs3miF7vZkOjV3UAfHa0QTHFHJF7yT_fTePHGFPnazRm4lPVWJmSRo1J5VTs81QbHITp0rDrsrO0nkQas-Wo7rgkXMe1vJKxVOSJU4bg_N50xpe6RjZ8JCAZVyH65UIYmx_WpRqhbpbyqbiJ5nsiG8P60pZdps2wD9p6t1q_XO-tFC6fJI9o5fU8FtXdKlnHRchHb3GG21Wo-sMAEX4TEp1klQysybun7l9rosRQgtdhNTiFKe_UisU7PhLVQ/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACOWdGCJtV1HCVQPGQvKA-ciBpeRoWxlWCIML3j5XZND5bJwD0ctEm8nE6QgrAs2llvcmSrk6-FkFD5s28Obea7Ta3VINuKYqWxuZBzOAbWYc1glloSNlyuDZxblL3-yekt-tCzUb0X6JQOoKIG4UrX-072MCTWT25ME6GTln0WgjBEALVti410osN2XAnTrtLa6nCTQBZxUMzYaN_aHeGMnvA46_vyaeBndSIZ8QjWR7VJ82kp3qJP4uH00xfDPZp2YQYulARAkI6OkTlyFVmm1vQGyyn7bbUNPnc9ImWcqQOpOVYqZGXnLvFRH9BRD1uL0pUq44nWRpkCQnzPPAUSIzZjeKWbOcW7-WwGldqHxxQEVn8b_ZiJscKCy-1TMBFkJlzIND2fd3-GoOOPhQKXl0j5t8hgxs3727VUO2t1NbA/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACN0SpPwPAeI5bJKk8I8v1Lw-5b_chx7ZkLQ8xDbs-l5LTXsWNPY7jPUSv9ROuXoEX08lIHaqBHufM7_Lpl_F-Wk47CdNeCzmIDydY-o0fKBBIbcsLBKakekAmy1DpTQPgfscNQNFmy4yAw6fHAxkuxzqQ_sQ5Zveb96jzNZjSMIZ4nucFyAr-X4N2QoPRtvr1dj7sQVrHCEkYNfxESuTPrAxB1-eNDtSvoh1q-DQPuQVLPKPfl6M3-3TbEFKxH3NsLowdztJPvVNOOYR2LM6M2vR2l316DOaDwurVBt_zebVP1lrkOdwdXMhzGJQCT_yJ71rlrxNfiu20Oj_WDTSIgyJ_-cm0bHNWymhimHUA9z3PLb_o0cECXqCqYgSdfHXfxmW3dSrHJ34T-KJiuMLNH7ldSOAZosFuuxdYuN7Pya8g/p.jpeg' }
    ]

    const imagesFlowersMaker = [
        { src: 'https://previews.dropbox.com/p/thumb/ACOMrQQkPAktsku5Zjjp6ybUr-geP6Dw1TJF0UjUZVpLl3tumi1E3cY82vjfLo2G9uNAkTRPpLJtHD7Hr9hc1nRR_TTmkR90aYKdmVsJ56Dlt0wGG1kOhWaJNqmGQubybY6OmDaZET_mhbkVtKquAQ2AfxX3Rr9nOc30vEtyVIrrMjkHSSEJZPlKSA5IjlhDDtNJC0vBiNeFcthSo6u1YvuaVDUpfkqMRyEmQYvrYwd8WM1CgyErftJxxT8Nsd-W8JNK83cYy_sBXCXjAlRgKpVhnekW6VR_TpKIe0orngynMNVBfzhgG9-YiYwiETtmJWaW_0Ftz0-tEHb3qcrWD7NIJMwW4G4l1w1WzdukFK0IrA/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACOm7RwjpZ2TvnOlu20doiOI6upKncvDaHlUeOddbp-zRFOGOCXoRpheatNaJ8ICRr0q0xlV7r7PRlOh42ysD_3lkQLxDE3LpPWC6PTQUO7mvRJbQejSq_Lmu5nLYR32536XKyYzOCnketwdq2hFHQANwWZ7zRLP5oahyC4M_BseNK-u-l2tqUUgzC-jQsbdpcfb3-iICz8HnO0GVuLFf2VfU9puiqdKMI82961Y_UhIFatTgV5h5csdH1ElGURoWS8SWHP9OFdior9MUJxG3I4TYpmVowXvUKBS4VBNHJty8QDVMSpqCpYEBKIul-LIgDsyDwwv1PkPkjdBlYELpwZtxE7dacvy5Rx40MWgMV4p_Q/p.jpeg' },
        { src: 'https://previews.dropbox.com/p/thumb/ACMlvW9KFe-W5sUVmMIYUZUjLAfnuNbIW9qH2p3phmEk3jkUi5oMdOsoyXpxEAA0PoEo2FI6NKgcN0U92z7UHc6k9vs-TG3bc6jH0Ac6oCeeKJcA6rTftcvovHk4cg5P40VJiYfolDw9-8v6DhwuK_pgUc1Cv-gZXWBVnbWW2ToZa39ZfovmaphZ4fh9tIbKNyR4R-pVZke6FzsQb43iV7tmLshg_aCfOj1zXEZ9Ey39ec_PXycFBRpIm5Sh7tNyS8iP0W0L-a-e7gT1Ue4ocHT4oh2_hEvcpRKNYAmwlFgNPV9ywkSIbX_vqFFmFeV6RIYgN3wtbCCIGhZaaWNxKj0N7L3zC4QCbx6QS8_-aKEdpA/p.jpeg' },
    ]


    useEffect(() => {
        window.scrollTo(0, 0);
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
                <a className="news__card-more" href='https://drive.google.com/file/d/1rOPFygZLkPBpXlMT5lvb6DwBfLUJ5hw0/view' target='blank'>ДЕРЖСТАНДАРТ</a>
                <br></br>
                <br></br>
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
                <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1ofVBsgT-9qrLicZR8IhYP1EXPHeqbwv-/view' target='blank'>ДЕРЖСТАНДАРТ "ОФІЦІАНТ"</a>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1Go1mSFD8VZxwbdyVKYzDRIKMrs8WP0Ol/view' target='blank'>ДЕРЖСТАНДАРТ "БАРМЕН"</a>
                </div>

                <br></br>
                <br></br>
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
                <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1K9bZQHpvGSIGASgBdqs03lw2nn1Ifm8a/view' target='blank'>ДЕРЖСТАНДАРТ "КУХАР"</a>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1NertFXcxWLvxMC8HUadImlQAzoCjwTPI/view' target='blank'>ДЕРЖСТАНДАРТ "КОНДИТЕР"</a>
                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
            setVideo(
                <div>
                    <div className='wrapper'>
                        <h3 className="places__title section-title">Професія "Кухар"</h3>
                    </div>
                    <div className="staff__wrapper">
                        <div className="staff__item">
                            <iframe className='staff__element' src="https://www.youtube.com/embed/RMXVDqxxaGA?si=WEBSbeFL_LHZxPuN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            );
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
                <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1LXWceV8cg7-wTeVLmk2x-3mbHiM5oNYj/view' target='blank'>ДЕРЖСТАНДАРТ "АДМІНІСТРАТОР"</a>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/15Y1FGoLDhqUEnvejCYqbUezvsXWUxcfG/view' target='blank'>ДЕРЖСТАНДАРТ "АГЕНТ З ОРГАНІЗАЦІЇ ТУРИЗМУ"</a>
                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
            setVideo(
                <div>
                    <div className='wrapper'>
                        <h3 className="places__title section-title">Професія "Адміністратор. Агент з організації туризму"</h3>
                    </div>
                    <div className="staff__wrapper">
                        <div className="staff__item">
                            <iframe className='staff__element' src="https://www.youtube.com/embed/VlEj2CakXVg?si=5uCBmSJ4RZl9FA7D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            )
        }
        else if (id == 'florist') {
            // 
            setTitle('Флорист');
            setImages(imagesFlorist);
            const desc_ = <div>
                <p className='news__card-desc'>З давніх давен до нашого часу квіти відігравали важливу роль в житті всіх народів. Бенкети й війни, похоронні церемонії, церковні свята, весілля та народження не обходилися без квіткового вбрання. Квіти виступали як символ вірності, печалі, щастя, розпусти, зв\’язку із загробним світом, самозакоханості, а також багато чого іншого. За допомогою кольорів люди і сьогодні висловлюють сильні почуття.</p>
                <p className='news__card-desc'>Як перетворити оберемок квітів на вишуканий букет? Як продовжити рослинам життя? Чи можна пофарбувати білі троянди? Які квіти приваблюють бджіл, а які – дівчат? На усі ці запитання знає відповіді флорист. Якщо ви бажаєте поринути з загадковий світ та відчуваєте нестримне бажання втілювати свої фантазії, створюючи оригінальні композиції на основі квітів, ми з радістю чекаємо на вас!</p>
                <h3 className='news__card-desc'>Після закінчення навчання ви будете вміти:</h3>
                <ul>
                    <li>готувати для роботи рослинний матеріал: квіти, гілки, плоди, листя тощо</li>
                    <li>створювати флористичні композиції</li>
                    <li>оформлювати свята, весільні церемонії, банкети, дні народження та ін.</li>
                </ul>
                <h3 className='news__card-desc'>Сфера професійного застосування:</h3>
                <p className='news__card-desc'>Bипускники можуть працевлаштовуватися у квіткові магазини, салони, студії, галереї.</p>
                <h3 className='news__card-desc'>КОРОТКОСТРОКОВІ КУРСИ:</h3>
                <p className='news__card-desc'>
                    <a href='https://drive.google.com/file/d/12Vf1D7SQy6Ik-DqFXZmfqpbM8rv1AhYP/view' target='blcnk'>Курс “Букети. Основи складання”</a>
                </p>
                <p className='news__card-desc'>
                    <a className='news__card-desc' href='https://drive.google.com/file/d/1DdX1_KWTIzWmSIrqja8fO_RxzOkm-TVV/view' target='blcnk'>Курс “Букети-іграшки. Основи складання”</a>
                </p>
                <p className='news__card-desc'>
                    <a className='news__card-desc' href='https://drive.google.com/file/d/1u5DGJALUJmoyHsOlox2_1GwpgU_xSeh9/view' target='blcnk'>Курс “Букети і композиції з використанням овочів, фруктів, солодощів”</a>
                </p>
                <a className="news__card-more" href='https://drive.google.com/file/d/1alx3zVsF3RHf6DdDOp9u6C-vg9oedXmn/view' target='blank'>ДЕРЖСТАНДАРТ</a>
                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
        }
        else if (id == 'hair-master') {
            setTitle('Перукар (перукар-модельєр)');
            setImages(imagesHairMaster);
            const desc_ = <div>
                <p className='news__card-desc'><b>Перукар (перукар-модельєр)</b> – це одна з найдавніших і поважних професій. В народі кажуть, що зробити людину красивою можуть два майстри – один з них кравець, а другий – перукар. І це правильно, адже вдало підібрана зачіска, вмілий макіяж можуть не тільки змінити зовнішній вигляд людини, але й поліпшити її внутрішній стан, зробити її на певний час щасливою. Кожне обличчя – загадка, і перукар повинен щоразу її розгадувати, знаходити єдність, гармонію між зачіскою та овалом обличчя, розрізом очей і загальним стилем людини. Роботи перукаря можна порівняти з творчістю художника. Ця професія належить до професії художнього типу.</p>
                <p className='news__card-desc'>Люди в усі часи прагнули бути красивими, і тому професія перукаря завжди була досить престижною, такою вона залишається й нині. Майстром перукарської справи може стати не кожний, тому вона вимагає від людини певних індивідуально-психологічних властивостей. Найбільше цей фах пасує людям комунікабельним, для яких спілкування з людьми не є обтяжливим, а приносить задоволення. Він має бути доброзичливим, витриманим, врівноваженим, уважним та акуратним. Справжнього майстра відрізняє бездоганний художній смак, образне мислення, творчій підхід до своєї справи, вміння переконати клієнта. Для майстра важливо і необхідно завжди мати хороший настрій, дарувати його своїм клієнтам.</p>
                <p className='news__card-desc'>Перукар – це фахівець в області створення стилю людини за допомогою зачіски. Однак він не лише стриже, фарбує, сушить і завиває волосся, але й майстерно використовує машинку й фен, знає особливості хімічних розчинів фарб і їх біологічний вплив на людину. Перукар може бути фахівцем з жіночих, чоловічих або дитячих зачісок, або перукарем-універсалом.</p>
                <h3 className='news__card-desc'>По закінченні навчання ви вмітимете:</h3>
                <ul>
                    <li>виконувати різні види стрижок, зачісок</li>
                    <li>виконувати фарбування, хімічну завивку і укладку волосся</li>
                    <li>доглядати і лікувати волосся</li>
                    <li>коригувати форму вус і бороди</li>
                </ul>
                <h3 className='news__card-desc'>Сфера професійного використання:</h3>
                <p className='news__card-desc'>Hаші випускники можуть працевлаштовуватися у салони краси, перукарні, косметичні центри тощо.</p>
                <a className="news__card-more" href='https://drive.google.com/file/d/14zvFEmEH6Au6Nf4QwE8xHTQcnt2ZSmPj/view' target='blank'>ДЕРЖСТАНДАРТ</a>
                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
            setVideo(
                <div>
                    <div className='wrapper'>
                        <h3 className="places__title section-title">Професія "Перукар (перукар-модельєр)"</h3>
                    </div>
                    <div className="staff__wrapper">
                        <div className="staff__item">
                            <iframe className='staff__element' src="https://www.youtube.com/embed/UlU5dgB-vf4?si=whBQqUiRpco5IPju" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            );
        }
        else if (id == 'nail-master') {
            setTitle('Манікюрник. Педикюрник');
            setImages(imagesNailMaster);
            const desc_ = <div>
                <p className='news__card-desc'>Є такі професії, без яких не змогла б обійтися жодна людина. Перукар, манікюрник, педикюрник – саме така. Це дуже цікава і прибуткова професія. За останні роки ця галузь краси бурхливо розвивається, і одночасно зростає потреба в компетентних фахівцях. Однак, тільки за умови того, що майстер досконало володіє всіма таємницями цього мистецтва, можна бути впевненим, що клієнт вибере саме Вас. Красиві доглянуті нігті – візитна картка сучасної людини. Доглянуті руки та ідеальні нігті додають впевненості у собі, підіймають настрій та неодмінно привертають увагу оточуючих, доставляючи усім естетичне задоволення. Тому ця професія зараз необхідна, престижна і чудово оплачувана.</p>
                <p className='news__card-desc'>Останнім часом робота манікюрниці стала більш різноманітною із застосуванням нових операцій. Серед послуг, окрім звичного манікюру, і європейський манікюр, при якому нігті обробляються за допомогою спеціальних приладів. З’явилися можливості для творчості. Сучасний майстер підбирає необхідний для створення задуманого образу колір, відтінок, вручну створює малюнок на нігті (рослинний орнамент, візерунки різних стилів). Застосовують також техніки аплікації й інкрустації.</p>
                <p className='news__card-desc'>Педикюр, постійний догляд за ногами – краща гарантія краси здоров’я. Доглянуті ніжки – це розкіш, а не засіб пересування, дозвольте собі бути красивими! У поєднанні із загальним гігієнічним доглядом за тілом манікюр і педикюр поліпшує стан організму, попереджує розвиток захворювань кісток рук, стоп і пальців ніг.</p>
                <h3 className='news__card-desc'>У нас ви навчитеся:</h3>
                <ul>
                    <li>обробляти, обпилювати ніготь для надання необхідної форми довжини</li>
                    <li>покривати лаком за всіма правилами виконання манікюрних робіт</li>
                    <li>нарощувати нігті на руках і ногах сучасними методами, акрилами, гелями</li>
                    <li>виконувати дизайн: ліпку акрилами, художній розпис лаками і акриловими фарбами</li>
                    <li>обробляти шкіру рук, ніг, проводити їх масаж</li>
                    <li>правильно виконувати дезінфекцію інструментів</li>
                    <li>застосовувати правила обслуговування, способи надання першої медичної допомоги</li>
                    <li>правильно використовувати існуючі інструменти, правильно їх зберігати</li>
                    <li>пізнати секрети виготовлення розчинів кремів, приготування комбінованих лаків різних кольорів , використання розчинників</li>
                </ul>
                <h3 className='news__card-desc'>Сфера професійного застосування випускника:</h3>
                <p className='news__card-desc'>Майстри працюють у перукарнях, салонах краси, косметичних кабінетах, на показах у великих магазинах, театрах тощо.</p>
                <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1AM_rYyL5szLcwrFiZQD3UXoTQjeEqoOK/view' target='blank'>ДЕРЖСТАНДАРТ "МАНІКЮРНИК"</a>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/11eqWCc8R-5PRP3UADTh49d8T_0B9mP_R/view' target='blank'>ДЕРЖСТАНДАРТ "ПЕДИКЮРНИК"</a>
                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
        }
        else if (id == 'flowers-maker') {
            setTitle('Квітникар. Декоратор вітрин');
            setImages(imagesFlowersMaker);
            const desc_ = <div>
                <p className='news__card-desc'><b>Квітникар</b> – це працівник, який вирощує квіти, кущі, дерева та доглядає за рослинами. Він має безпосереднє відношення до краси, оскільки завдяки його старанній та наполеглевій праці ми маємо можливість вибрати в магазині квіти чи замовити букет найближчим чи поважним людям в знак пошани, подарунка, подяки. Щоб виростити квіти різноманітних декоративних якостей і в будь-яку пору року, необхідно знати справу квітникаря.</p>
                <p className='news__card-desc'>Професія квітникаря передбачає навчання учнів оброблюванню та вирощуванню квітів і декоративно-листяних рослин. Вона дозволяє створити красивий ландшафтний дизайн вулиці, парку, бульвару, присадибної території, палісадника й балкону. А для створення цієї краси необхідно отримати знання про рослини, їх біологічні особливості, умови вирощування, про правила оформлення територій нових сучасних об’єктів, про нові напрямки моди в ландшафтному дизайні та декоративно-прикладному мистецтві. У зв’язку із пожвавленням у галузі будівництва й високими вимогами до екології навколишнього середовища велика увага приділяється озелененню. Тому попит на спеціалістів у сфері квітникарства зростає. Тож не зволікайте з отриманням перспективної професії!</p>
                <p className='news__card-desc'><b>Декоратор вітрин</b> – це не просто робота, що вимагає навиків або вигостреної техніки. Тут потрібний художній смак, відчуття краси і розуміння прекрасного. Декоратор вітрин повністю продумує оформлення приміщення магазину, салону чи ресторану: від розташування обладнання до кольорового рішення зали. Декоратор враховує вплив певних кольорів та їх поєднання на людину.</p>
                <p className='news__card-desc'>Він керується правилом, що зручне розташування обладнання та вдале кольорове рішення підвищують продуктивність праці сспівробітників, створюють гарний настрій у покупців. Історія цього виду діяльності бере свій початок в середині XIX століття і пов’язана з розвитком індустріального виробництва, що створив потреби в новій професії.</p>
                <h3 className='news__card-desc'>Після закінчення нашого навчального закладу ви навчитеся:</h3>
                <ul>
                    <li>виконувати допоміжні роботи, пов’язані з прибиранням клумб, рабаток бордюрів</li>
                    <li>забезпечувати робочі місця посадочним матеріалом, добривами інвентарем</li>
                    <li>очищати рослини в оранжереях, проводити обмивання обприскування водою</li>
                    <li> готувати квіткові рослини до викопування</li>
                    <li>складати плани художнього оформлення інтер’єру та вітрин на підставі комплексної програми реклами товарів та послуг, контролювати їх виконання</li>
                    <li>вибирати виразні засоби та розробляти технічні рішення для кожного типу вітрини, стилю викладення характеру рекламування товару (послуги)</li>
                    <li>здійснювати роботи з художнього та художньо-декоративного оформлення внутрішнього простору магазину (закладу харчування), малювати рекламні плакати, вивіски, щити, оформлювати стенди, настінні панно, внутрішньо- та зовнішньомагазинні вітрини</li>
                    <li>проектувати композиційні рішення вітрини та рекламного показу товарів (надання послуг) у внутрішньому просторі підприємства</li>
                    <li>розробляти та розміщувати у внутрішньому просторі магазину символи-покажчики товарних та функціональних відділів підприємства або окремих товарних комплексів обідніх залів та фойє закладів харчування</li>
                    <li>готувати для оформлення вітрини вітринну коробку та вітринний інвентар</li>
                    <li>викладати товари та монтувати декоративні елементи вітрини</li>
                    <li>надписувати та художньо оформлівати цінники на товари, що розміщені на експозиційних стендах та у вітринах</li>
                </ul>
                <h3 className='news__card-desc'>Сфера професійного використання випускника:</h3>
                <p className='news__card-desc'>Квітникарі можуть працевлаштуватися в будь-яких квіткових господарствах відкритого та закритого ґрунту; декоратори вітрин затребувані для художнього оформлення та декорування рекламно-інформаційного пристроїв інтер’єру, вітрин та торгівельно-вітринного обладнання торгівельного комплексу, виїзних ярмарок, виставок-продажу на таких видах підприємств: торговельні комплекси; заклади харчування; театри; готелі та ін.</p>
                <h3 className='news__card-desc'>КОРОТКОСТРОКОВІ КУРСИ:</h3>
                <p className='news__card-desc'>
                    <a href='https://drive.google.com/file/d/1P8jJb-Y7kKXyNXLX11-ydQjI2mN1c0A1/view' target='blcnk'>Курс “Цибулинні рослини”</a>
                </p>
                <p className='news__card-desc'>
                    <a className='news__card-desc' href='https://drive.google.com/file/d/1GfiDPur7ttZ8DVKdQhYnHO9dBkbay37W/view' target='blcnk'>Курс “Троянди. Висаджування, догляд, обрізування, боротьба з хворобами та шкідниками”</a>
                </p>
                <p className='news__card-desc'>
                    <a className='news__card-desc' href='https://drive.google.com/file/d/1_GQbcTKTn8XER2Dy51Pqc4K_rr80XVoW/view' target='blcnk'>Курс “Дворічники та однорічники. Особливості висаджування та догляду”</a>
                </p>
                <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/1eZ4xHlAgR6GGqP9rtOM1k193ggm5f1I8/view' target='blank'>ДЕРЖСТАНДАРТ "КВІТНИКАР"</a>
                    <a style={{width:'auto'}} className="news__card-more" href='https://drive.google.com/file/d/11OSasq2s52-3a2pH83IzuDQJrs5-qc6k/view' target='blank'>ДЕРЖСТАНДАРТ "ДЕКОРАТОР ВІТРИН"</a>
                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>
            setDesc(desc_);
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
