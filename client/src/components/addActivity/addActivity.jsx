import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity } from "../../actions";
import { Button, ValidationInput } from "../index";
import styles from "./AddActivity.module.css";
import s from "../Button/ButtonHome.module.css";

export default function AddActivity() {
  const countries = useSelector((state) => state.countries); //me traigo el state del store (esta F. reemplaza mapStateToProps en Comp. Class)

  const dispatch = useDispatch();    //reemplaza (mapDispatchToProps)en comp. class,      

  const [input, setInput] = useState({ //estado interno del componente
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [error, setError] = useState(""); 

  const handleChange = (evento) => {    
    setError(
      ValidationInput({
        ...input,
        [evento.target.name]: evento.target.value,
      })
    );

    if (evento.target.name === "countries") {
      
      setInput({
        ...input,
        [evento.target.name]: [...input.countries, evento.target.value], //si el event es countries me traigo estado countries
      });
    } else {
      setInput( (input)=> ({
        ...input,
        [evento.target.name]: evento.target.value}));
      
      
      // setInput({
      //   ...input,
      //   [evento.target.name]: evento.target.value,
      // });
    }
  };

  const handleclick = (e) => {
    e.preventDefault();
    dispatch(postActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    })
  };

  return (
    <React.Fragment className={styles.container}> 
     <form className={styles.form}>
        <fieldset>
          <legend>Register Tourist Activity</legend>
          <div className={styles.formGroup}>
            <label>Name </label>
            <input
              name="name"
              type="text"
              value={input.name}
              autoComplete="off"
              placeholder="Enter Activity"
              onChange={handleChange}
              className={error.name && styles.danger}
            />
            {error.name ? <p className={styles.danger}>{error.name}</p> : ""}
          </div>
          <div className={styles.formGroup}>
            <label>Difficulty (escriba de 1 a 5) </label>
            <select
              className={error.difficulty && styles.danger}
              onChange={handleChange}
              name="difficulty"
            >
              {["Seleccionar", 1, 2, 3, 4, 5].map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            {error.difficulty && (
              <p className={styles.danger}>{error.difficulty}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Duration (Hours) </label>
            <input
              name="duration"
              value={input.duration}
              onChange={handleChange}
              className={error.duration && styles.danger}
            />
            {error.duration && (
              <p className={styles.danger}>{error.duration}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Season: </label>
            <select
              className={error.season && styles.danger}
              onChange={handleChange}
              name="season"
            >
              {["Seleccionar", "Summer", "Autumn", "Winter", "Spring"].map(
                (el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                )
              )}
            </select>
            {error.season && <p className={styles.danger}>{error.season}</p>}
          </div>

          <div className={styles.formGroup}>
            <label>select countries: </label>
            <div>
              <select
                className={error.countries && styles.danger}
                name="countries"
                onChange={handleChange}
              >
                <option name="Seleccionar">Seleccionar</option>
                {countries.map((country) => (
                  <option
                    key={country.id}
                    name={country.name}
                    value={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
             
              <div>{input.countries.join(" ")}</div>
              {error.countries && (
                <p className={styles.danger}>{error.countries}</p>
              )}
            </div>
          </div>
          
          <div className={styles.btns}>
            <Button/>
            <button
              className={s.btn}
              onClick={handleclick}
              disabled={
                !input.name ||
                error.difficulty ||
                error.season ||
                error.countries
              }
            >
              Insert Activity
            </button>
          </div>
        </fieldset>
      </form>
   </React.Fragment>
  );
}

