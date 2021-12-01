import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "../country/Country";

import { getCountries, setCurrentPage } from "../../actions/index";
import { NavLink } from "react-router-dom";
import { Paged } from "../index";
import styles from "../countries/Countries.module.css";

export default function Countries() {
  const dispatch = useDispatch();

  const { currentPage, filterCountries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // 1) Cantidad de CARD COUNTRY por página
  const countryInPage = 9;

  //2) Indice del ultimo pais
  const lastIndex = currentPage * countryInPage; //9

  //3)Indice del primer pais
  const firstIndex = lastIndex- countryInPage; //0

  //Paises que se van a ver por pagina,
  //esto me devuelve un arreglo =[p1,p2,p3...,p9]
  const currentCountries = filterCountries?.slice(
    firstIndex, //0
    lastIndex //9
  );

 console.log('estos son los paises', filterCountries) 
console.log('paises', currentCountries)
  //esta constante me ayuda para el renderizado
  const paginate = (numPag) => {
    dispatch(setCurrentPage(numPag));
  };

  return (
    <div className={styles.container}>
      {currentCountries.length ? (
        <div className={styles.countries}>
          {currentCountries.map((c) => {
            return (
              <div key={c.id}>
                <NavLink to={"/home/" + c.id} className={styles.link}>
                  <Country
                    name={c.name}
                    flag={c.flag}
                    continent={c.continent}            
                    population={c.population}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.error}>The country was not found</div>
      )}

      <div className={styles.Paged}>
        <Paged
          allCountries={filterCountries.length}
          countriesPerPage={countryInPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}