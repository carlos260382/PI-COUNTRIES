import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Country from "../country/Country";

import { getCountries, setCurrentPage } from "../../actions/index";
import { NavLink } from "react-router-dom";
import { Paged } from "../index";
import styles from "../countries/Countries.module.css";

export default function Countries() {
  const dispatch = useDispatch();

  const { paginaActual, filterCountries } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  // 1) Cantidad de CARD COUNTRY por página
  const paisesEnUnaPagina = 9;

  //2) Indice del ultimo pais
  const ultimoIndice = paginaActual * paisesEnUnaPagina; //9

  //3)Indice del primer pais
  const primerIndice = ultimoIndice- paisesEnUnaPagina; //0

  //Paises que se van a ver por pagina,
  //esto me devuelve un arreglo = [p1,p2,p3...,p9]
  const currentCountries = filterCountries?.slice(
    primerIndice, //0
    ultimoIndice //9
  );

console.log('estos son todos los paises', filterCountries) 
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
          PaisesTodos={filterCountries.length}
          paisesEnUnaPagina={paisesEnUnaPagina}
          paginar={paginate}
          paginaActual={paginaActual}
        />
      </div>
    </div>
  );
}