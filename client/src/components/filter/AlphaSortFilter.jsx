import React from 'react'
import { useDispatch } from 'react-redux';
import { Sort } from '../../actions';
import styles from "./filter.module.css"

export default function AlphaSortFilter() {
    const dispatch=useDispatch();
    
    const handleChange=evento=>{
       evento.preventDefault();
       dispatch(Sort(evento.target.value))//cuando el usuario selecciona Ascendente el evento.target.value="ASC"

    }
    return (
        <div className={styles.container}>
            <h5>Alphabetical Order</h5>
            <select onChange={handleChange}>
                <option>to select</option> 
                <option value="ASC">sort from a to z</option> 
                <option value="DESC">sort from z to a</option>
            </select>
        </div>
    )
}