import React from "react";
//import styles from "./Pagination.module.css";

export default function Paged({
  countriesAll,
  countriesPerPage,
  paginate,
  currentPage,
}) {
  const pageNum = [];

  let totalPage = Math.ceil(countriesAll / countriesPerPage); //sacamos el total de paginas

  for (let i = 1; i <= totalPage; i++) {
    pageNum.push(i);            //Vamos guardando el numero de paginas maximo q se necesita para renderizar todos los paises
  }

  return (
    <div className={styles.container}>
      {pageNum && currentPage > 1 ? (
        <button                              //boton para devolver
          className={styles.navigate}
          onClick={() => paginate(currentPage - 1)}
        >
          {" "}
          back{" "}
        </button>
      ) : null}

      {pageNum?.map((Num) => (
        <button
          className={currentPage === Num ? styles.btnselec : styles.btn}
          key={Num}
          onClick={() => paginate(Num)}
        >
          {Num}
        </button>
      ))}

      {pageNum && currentPage <= pageNum.length - 1 ? (
        <button
          className={styles.navigate}
          onClick={() => paginate(currentPage + 1)}
        >
          {" "}
          Next{" "}
        </button>
      ) : null}
    </div>
  );
}