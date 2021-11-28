import React from "react";
import {
  Continent,
  Reset,
  Countries,
  NavBar,
  AlphaSort,
  Population,
  Activity,

} from "../../components/index.js";
import styles from "../Home/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar} >
        <NavBar />
      </nav>
      <section className={styles.filters}>
        <AlphaSort/>
        <Population/>
        <Continent />
        <Activity />
        <Reset />
      </section>
      <section className={styles.countries}>
        <Countries />
        
      </section>
    </div>
  );
}