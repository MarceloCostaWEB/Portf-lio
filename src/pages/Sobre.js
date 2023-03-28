
import React from 'react'
import { data } from '../Data/infos'
import styles from './styles/sobre.module.css';
import AOS from 'aos';

export default function About() {
    AOS.init();
    const { text, tools: { focus } } = data.about;
    return (
      <div className={styles.test} id='about' data-aos="flip-left">

        <div className={styles.about}>
          <div className={styles.aboutContainer}>
            <h1>Sobre mim</h1>
            {text.map((te, index) => (
              <div key={index + 1}>
                <p>{te}</p>
                <br />
              </div>
            ))}
          </div>
          <div className={styles.skills}>

            <section className={styles.hardSkills}>
              <h2>Hard Skills:</h2>
              {focus.map(({ name, img }) => (
                <section key={name}>
                  <p>{name}</p>
                  <img src={img} alt={name} />
                </section>
              ))}
            </section>
          </div>
        </div>
      </div>
    )
  }