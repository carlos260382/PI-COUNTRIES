import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "../country/Country";

import { getCountries, setCurrentPage } from "../../actions/index";
import { NavLink } from "react-router-dom";
import { Paged } from "../index";
//import styles from "../Countries/Countries.module.css";

export default function Countries() {
  const dispatch = useDispatch();

  const { currentPage, filterCountries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // 1) Defino la cantidad de CARD COUNTRY que quiero por página
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

  //esta constante me ayuda para el renderizado
  const paginate = (numPag) => {
    dispatch(setCurrentPage(numPag));
  };

  return (
    <div className={styles.container}>
      {currentCountries.length ? (
        <div className={styles.countries}>
          {currentCountries.map((country) => {
            return (
              <div key={country.id}>
                <NavLink to={"/home/" + country.id} className={styles.link}>
                  <Country
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}            
                    population={country.population}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.error}>Country Not Found, Try Another Name!</div>
      )}

      <div className={styles.pagination}>
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