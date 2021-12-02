import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetal } from "./../../actions/index";
import { Button } from "..";
import styles from "./CountryDetal.module.css";
import s from "../addActivity/AddActivity.module.css";
import st from "../Button/ButtonHome.module.css";
import { NavLink, useParams } from "react-router-dom";

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function CountryDetal(props) {
  const  {id} = useParams();
console.log('este es el Id', id)
  const dispatch = useDispatch();

  const countryDetal = useSelector((state) => state.countryDetal);
  //console.log('detallado de paises', countryDetal)
  useEffect(() => { //el hook reemplaza las funciones de componentDidMount, componentDidUpdate, y componentWillUnmount en los componentes de clase.

    dispatch(getCountryDetal(id));// se monta el componente osea q se ejecuta getcountridetal q hace llamado a la api 
  }, [dispatch, id]);             //para traer los datos detallados del pais

  return (
    <div className={styles.container}>        {/* renderizado informacion del pais */}
      <div className={styles.section}>
        <h3>Detailed Country Information</h3>
        <img src={countryDetal.flag} alt="img not found" />
        <div></div>
        <p>Name: {countryDetal.name}</p>
        <p>Continent: {countryDetal.continent}</p>
        <p>Code: {countryDetal.id}</p>
        <p>Capital: {countryDetal.capital}</p>
        <p>Subregion: {countryDetal.subregion}</p>
        <p>
          Area: {numberWithCommas(Number(countryDetal.area))} Km<sup>2</sup>
        </p>
        <p>Population: {numberWithCommas(Number(countryDetal.population))}</p>
       

        <div>
          <h3>Activity Information</h3> {/* renderizado de actividad */}
          {countryDetal.activities?.length ? countryDetal.activities.map((activity) => (
            <div>
              <h4> {/* para poner la primera letra mayus y las otras minusc */}
                {" "}
                {activity.name.charAt(0).toUpperCase() +  
                  activity.name.slice(1).toLowerCase()}
              </h4>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration} minutes</p>
              <p>Season: {activity.season}</p>
            </div>
          )) : 
           <p>without tourist activities</p>}
        </div>

        <div className={s.btns}>
          <Button />
          <NavLink to="/activity" className={st.btn}>
            Add Activity
          </NavLink>
        </div>
      </div>
    </div>
  );
}