import React from "react";
import Reset from "../components/Button/Reset";
import NavBar from "../components/navbar/Navbar";
import Countries from "../components/countries/Countries";
import Continent from "../components/filter/Continent";
import AlphaSortFilter from "../components/filter/AlphaSortFilter";
import Population from "../components/filter/population";
import FilterActivity from "../components/filter/FilterActivity";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar} >
        <NavBar />
      </nav>
      <section className={styles.filters}>
        <AlphaSortFilter/>
        <Population/>
        <Continent/>
        <FilterActivity/>
        <Reset/>
      </section>
      <section className={styles.countries}>
        <Countries />
        
      </section>
    </div>
  );
}