import React from "react";
import { useDispatch } from "react-redux";
import { Sort } from "../../actions";
//import styles from "./Filter.module.css"

export default function PopulationSort() {
  const dispatch = useDispatch();


  const handleChange = (evento) => {
    evento.preventDefault();
    dispatch(Sort(evento.target.value));
    
  };

  return (
    <div className={styles.container}>
      <h5>Sort By Population</h5>
      <select  onChange={handleChange}>
        <option name="Seleccionar">To Select</option>
        <option name="Population Asc." value="Population Asc.">
          Population Asc.
        </option>
        <option name="Population Desc." value="Population Desc.">
          Population Desc.
        </option>
      </select>
    </div>
  );
}