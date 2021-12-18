import React from "react";
import styles from "./Paged.module.css";

export default function Paged({ PaisesTodos, paisesEnUnaPagina, paginar, paginaActual, }) {
  const numeroPaginas = [];

  let totalPage = Math.ceil(PaisesTodos / paisesEnUnaPagina); //sacamos el total de paginas

  for (let i = 1; i <= totalPage; i++) {
    numeroPaginas.push(i);            //Vamos guardando el numero de paginas maximo q se necesita para renderizar todos los paises
  }

  return (
    <div className={styles.container}>
      {numeroPaginas && paginaActual > 1 ? (
        <button
          className={styles.navigate}
          onClick={() => paginar(paginaActual - 1)}
        >
          {" "}
          back{" "}
        </button>
      ) : null}

      {numeroPaginas?.map((Num) => (
        <button
          className={paginaActual === Num ? styles.btnselec : styles.btn}
          key={Num}
          onClick={() => paginar(Num)}
        >
          {Num}
        </button>
      ))}

      {numeroPaginas && paginaActual <= numeroPaginas.length - 1 ? (
        <button
          className={styles.navigate}
          onClick={() => paginar(paginaActual + 1)}
        >
          {" "}
          Next{" "}
        </button>
      ) : null}
    </div>
  );
}