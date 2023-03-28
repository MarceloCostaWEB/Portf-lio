import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';
import { BsGithub } from 'react-icons/bs';

/* ESTILOS */
import styles from './styles/projetos.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* DATA */
import { data } from '../Data/infos';
import trybetunesPrint from '../Data/images/trybetunes-foto.png';
import trybewalletPrint from '../Data/images/trybeWallet.png';

import AOS from 'aos';

export default function Projetos() {
  AOS.init();
  const { trybeTunes, trybeWallet } = data.projetos;
  return (
    <div className={styles.container} id='projects' data-aos="flip-left">
      <div className={styles.projectContainer}>
        <section className={styles.section}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className={styles.element}>
                <a href={trybeTunes.githubLink}>Projeto trybeTunes <BsGithub /></a>
                <a href={trybeTunes.buildLink} target="_blank" rel="noreferrer">
                  <img src={trybetunesPrint} alt="trybetunes" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.element}>
                <a href={trybeWallet.githubLink}>Projeto trybeWallet <BsGithub /></a>
                <a href={trybeWallet.buildLink} target="_blank" rel="noreferrer">
                  <img src={trybewalletPrint} alt="trybewallet" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  )
}