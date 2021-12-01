import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <h3>PI-Countries-Henry</h3>
      <SearchBar />
      <NavLink to="/activity" className={styles.activity}>
        Add Activity
      </NavLink>
    </div>
  );
}