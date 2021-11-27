import React from "react";
import { Link } from "react-router-dom";


export default function landing() {
  return (
    <div className={styles.land}>
      <div className={styles.conta}>
        <h1>Welcome To Countries</h1>
        <Link to="/home">
          <button className={styles.btn}>Ingresar </button>
        </Link>
      </div>
    </div>
  );
}