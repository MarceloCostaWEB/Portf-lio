
import React, { useState, useEffect } from "react";
import { data } from '../Data/infos'
import styles from './styles/home.module.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import ReactTypingEffect from 'react-typing-effect'
import AOS from 'aos';
import img from "../Data/images/WhatsApp Image 2023-03-28 at 11.44.09.jpeg"

export default function Home() {
  AOS.init();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Define um temporizador para atrasar a exibição do texto
    const timerId = setTimeout(() => {
      setShowText(true);
    }, 6000);

    // Cancela o temporizador ao desmontar o componente
    return () => clearTimeout(timerId);
  }, []); // Apenas executa uma vez no carregamento inicial

  return (
    <div className={styles.homeContainer} id="home" data-aos="flip-left">
      <div className={styles.home}>
        <div className={styles.iconContainer}>
          <a href={data.contats.linkedin} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          <a href={data.contats.github} target="_blank" rel="noreferrer"><AiFillGithub /></a>
          <a href={`mailto:${data.contats.gmail}`} target="_blank" rel="noreferrer"><AiOutlineMail /></a>
          <a href={data.contats.whatsapp} target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a>
        </div  >
        <div className={styles.infos}>
          <div className={styles.texto}>
            <ReactTypingEffect
              text={data.presentation.welcome}
              eraseDelay={50000000}
              speed={90}
            />
          </div>
          <div className={styles.divFotoPerfil }>
            <img src={img} alt="eu" className={styles.imgPerfil} />
          </div>
          <div>
           {showText && <ReactTypingEffect
              text={data.presentation.resume}
              eraseDelay={50000000}
              speed={80}
            /> } 
            <div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )

}