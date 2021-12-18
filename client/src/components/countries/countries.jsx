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


  const paisesEnUnaPagina = 9;

  const ultimoIndice = paginaActual * paisesEnUnaPagina; //9
  const primerIndice = ultimoIndice - paisesEnUnaPagina; //0

  const currentCountries = filterCountries?.slice(primerIndice, ultimoIndice);

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