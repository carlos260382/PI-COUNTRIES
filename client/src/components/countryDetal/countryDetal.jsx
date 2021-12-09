import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetal } from "./../../actions/index";
import { Button } from "..";
import styles from "./CountryDetal.module.css";
import s from "../addActivity/AddActivity.module.css";
import { NavLink, useParams } from "react-router-dom";

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


export default function CountryDetal() {
  const  {id} = useParams();
  const [loading, setLoading] = useState(true);

  
  const dispatch = useDispatch();

  const countryDetal = useSelector((state) => state.countryDetal);
  
  useEffect(() => { 
    
    dispatch(getCountryDetal(id));// se monta el componente osea q se ejecuta getcountridetal q hace llamado a la api 
    setTimeout(() => {
    setLoading(false)      
    }, 100); 
  
  }, [dispatch, id]);       

  return (
    <div className={styles.container}>
     {loading ? (<div>
       <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
       
       </div>): (
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
          <h3>Activity Information</h3>
          {countryDetal.activities?.length ? countryDetal.activities.map((activity) => (
            <div>
              <h4> {/* para poner la primera letra mayus y las otras minusc */}
                {" "}
                {activity.name.charAt(0).toUpperCase() +  
                  activity.name.slice(1).toLowerCase()}
              </h4>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration} Hours</p>
              <p>Season: {activity.season}</p>
            </div>
          )) : 
           <p>No Activities</p>}
        </div>

        <div className={s.btns}>
          <Button />
          <NavLink to="/activity" className={styles.link}>
            Add Activity
          </NavLink>
        </div>
      </div>
       ) }
           
      
    </div>
  );
}