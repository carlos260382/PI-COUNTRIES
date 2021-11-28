import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, setCurrentPage } from "../../actions";
//import styles from "./Filter.module.css"

export default function FilterByContinent() {
  
  const dispatch = useDispatch();
  
  const countries = useSelector((state) => state.countries);

  let arrayCont = countries?.map((cont) => cont.continent); //obtengo un array con todos los continentes
  let uniqueContinent = [...new Set(arrayCont)]; //guardamos el valor unico
  
   
  const handleChange = (evento) => {
    dispatch(filterByContinent(evento.target.value));
    dispatch(setCurrentPage(1))
  };
 
  return (
    <div className={styles.container}>
      
      <h5>Filter by Continent</h5>

      <select onChange={handleChange}>

        <option value="All">All</option>
        {uniqueContinent?.map((el, index) => ( //si hay algo en el array de continentes lo mapeo 
          <option value={el} key={index}>
            {el}
          </option>
        ))}

      </select>
    </div>
  );

}