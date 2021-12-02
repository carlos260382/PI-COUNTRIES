import React from "react";
//import { numberWithCommas } from '../utils'
import styles from "./Country.module.css"



function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

export default function Country({ name, flag, continent, population }) {
  
    return (
        <div className={styles.container}>
            <img src={flag} alt="img not found" />
            <h4>Name: {name}</h4>
            <p>Continent: {continent}</p>
            <p>Population: {numberWithCommas(Number(population))}</p>
            
        </div>
    )
}