import React, { Component } from "react";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h3>PI-Countries</h3>
        <SearchBar />
        <span className={styles.activity}>
          <NavLink to="/activity">
            <button className={styles.btn}>Add Activity</button>

          </NavLink>
        </span>
      </div>
    )
  }
};

export default Navbar;