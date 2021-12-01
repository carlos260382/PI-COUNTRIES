import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.land}>
      <div className={styles.conta}>
        <h1>Welcome To Henry PI Countries</h1>
        <Link to="/home">
          <button className={styles.btn}>Ingresar </button>
        </Link>
      </div>
    </div>
  );
}