import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Amishi</h1>
            <p className={styles.description}> I'm a 4th year AI and CS student with a knack for coding and a love for all things AI. Join me on my tech adventure as I blend the worlds of software development and artificial intelligence to create the future, one line of code at a time! </p>
            <a className={styles.contactBtn} href="mailto:gangwaramishi@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero