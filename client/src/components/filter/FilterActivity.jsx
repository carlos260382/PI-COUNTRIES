import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, setCurrentPage } from "../../actions";
import { filterActivities } from "../../actions";
import styles from "./filter.module.css"

export default function Activity() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);//me traigo el estado de redux con todas las actividades que se van agregando
  let arrayAct = activities?.map((act) => act.name);

  const handleChange = (e) => {
    dispatch(filterActivities(e.target.value));
    dispatch(setCurrentPage(1))
  };

  return (
    <div className={styles.container}>
      <h5>Filter by Activity</h5>
      <select onChange={handleChange}>
        <option>to select</option>
        {arrayAct?.map((act) => (
          <option key={act} value={act}>
            {act.charAt(0).toUpperCase() + act.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
}