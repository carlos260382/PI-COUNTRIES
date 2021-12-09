import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity, getCountries } from "../../actions";
import { Button } from "../index";
import styles from "./AddActivity.module.css";
import s from "../Button/ButtonHome.module.css";

export default function AddActivity() {
  const countries = useSelector((state) => state.countries); 

  const dispatch = useDispatch();    

  const [input, setInput] = useState({ 
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries())

  }, [dispatch])

   const handleChange = (evento) => {
   if (evento.target.name === "countries") {
      setInput({
        ...input,
        [evento.target.name]: [...input.countries, evento.target.value], //si el event es countries me traigo estado countries
      });
    } else {

      setInput((input) => ({
        ...input,
        [evento.target.name]: evento.target.value
      }));
    }
  };

  const handleClick = async (evento) => {
      evento.preventDefault();
if(ValidationInput()) {
   dispatch(postActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    })}
    else {
			alert("Los campos deben estar completos")
		}
	};
 
  function ValidationInput() {
    if (input.name.length === 0) {
      return false;
    } else if (/\d/.test(input.name)) {
      return false;
    } else if (input.difficulty === "") {
      return false;
    } else if (input.duration === "") {
      return false;
    } else if (input.season === "") {
      return false;
    } else if (input.countries.length === 0) {
      return false
    }
    return true
  };

  return (
    <div className={styles.container}> 
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
              onChange={(evento)=> handleChange(evento)}
              />
           
          </div>
          <div className={styles.formGroup}>

            <label>Difficulty (escriba de 1 a 5) </label>
            <select
              onChange={(evento)=> handleChange(evento)}
              name="difficulty" >
              {["Seleccionar", 1, 2, 3, 4, 5].map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
            </div>
          <div className={styles.formGroup}>

            <label>Duration (Hours) </label>
            <input
              name="duration"
              type="number"
              value={input.duration}
              onChange={(evento)=> handleChange(evento)}
              />
            </div>
          <div className={styles.formGroup}>


            <label>Season: </label>
            <select
             onChange={(evento)=> handleChange(evento)}
              name="season">
              {["Seleccionar", "Summer", "Autumn", "Winter", "Spring"].map(
                (el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                )
              )}
            </select>
          
            </div>
          <div className={styles.formGroup}>

            <label>select countries: </label>
            <div>
              <select
               name="countries"
                multiple
                onChange={(evento)=> handleChange(evento)}>
                <option name="Seleccionar">Seleccionar</option>
                {countries?.map((country) => (
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
            </div>
          </div>
          
          <div className={styles.btns}>
            <Button/>
            <button
              className={s.btns}
              onClick={(evento)=> handleClick(evento)}
             >
              Insert Activity
            </button>
          </div>
        </fieldset>
      </form>
   </div>
  );

}

