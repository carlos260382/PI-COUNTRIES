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
setInput(evento.target.value)

    // setInput({ ...input, 
    //   [evento.target.name] : evento.target.value})
//console.log('hola soy Input search', input)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log('hola soy search', input)
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
          onChange={(evento)=> handleChange(evento)}
          
        />
        <button type="submit">Search Country
        <img src={buscador} alt="img no found" onClick={(evento)=>handleSubmit(evento)} />
        </button> 
        
      </form>
    </div>
  );
}