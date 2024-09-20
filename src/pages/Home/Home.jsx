import React from 'react'
import Hero from "../../assets/images/hero.jpg"
import styles from "./Home.module.css"

export default function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles.homeHeading}>Hey Muggle!</h1>
      
      <p className={styles.homeContent}>Sorry, but this shop isn't real- it's just to demonstrate my coding skills with react</p>
      <div className={styles.homeHero}>
      <img src={Hero} alt="magic owl in Hogwarts" ></img>

      </div>
    </section>
  )
}
