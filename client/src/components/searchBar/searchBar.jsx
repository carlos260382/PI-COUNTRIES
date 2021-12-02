import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setCurrentPage } from "../../actions";
import buscador from '../../Imagenes/buscador.png'
import styles from "./SearchBar.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState();

  
  const handleChange = (evento) => {
    evento.preventDefault();
    setInput({ ...input, 
      [evento.target.name] : evento.target.value})
      console.log('hola soy handlesearch', input)
  }

  const handleSubmit = (evento) => {
    console.log('hola soy search', input)
    evento.preventDefault();
    dispatch(searchByName(input))
    setInput("")
   dispatch(setCurrentPage(1))
  };
  
  return (
    <div>
      <form className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search by name"
          autoComplete="off"
          onChange={handleChange}
          
        />
        <button type="submit">Search Country
        <img src={buscador} alt="img no found" onClick={handleSubmit} />
        </button> 
        
      </form>
    </div>
  );
}