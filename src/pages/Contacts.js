import React from 'react';
import styles from './styles/contacts.module.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { data } from '../Data/infos';
import AOS from 'aos';

export default function Contacts() {
  AOS.init();
  const { linkedin, gmail, whatsapp, github, phoneNumber } = data.contats;
  return (
    <div className={styles.contacts} id='contacts' data-aos="flip-left">
      <div className={styles.container}>
        <section className={styles.section}>
          <ul className={styles.ul}>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <AiFillGithub className={styles.icon} />
                <span>{github}</span>
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <AiFillLinkedin className={styles.icon} />
                <span>{linkedin}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${gmail}`} target="_blank" rel="noreferrer">
                <AiOutlineMail className={styles.icon} />
                <span>{gmail}</span>
              </a>
            </li>
            <li>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp className={styles.icon} />
                <span>{phoneNumber}</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )

}