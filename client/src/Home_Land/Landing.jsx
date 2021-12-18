import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.land}>
      <div>
        <span><h1>Welcome To PI Countries</h1></span>
        <Link to="/home">
          <button className={styles.btn}>Start</button>
        </Link>
      </div>
    </div>
  );
}