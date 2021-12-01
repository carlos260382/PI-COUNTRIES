import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ButtonHome.module.css"


export default function Button() {
  return (
    <div>
      <NavLink to="/Home">
        <button className={styles.btn}>back home</button>
      </NavLink>
    </div>
  );
}