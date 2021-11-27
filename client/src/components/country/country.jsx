import React from "react";
import { numberWithCommas } from '../utils'
//pendiente revisar codigos
export function Country (){
    export default function Country({name,flag,continent,population}) {
  //pendiente revisar
        return (
            <div className={styles.container}>
                <img src={flag} alt="img not found"/>
                <h4>Name: {name}</h4>
                <p>Continent: {continent}</p>
                <p>Population: {numberWithCommas(Number(population))}</p> 
            </div>
        )
    }}