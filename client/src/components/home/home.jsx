import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions";

export function Home (){
const dispatch = useDispatch();
const allcountries = useSelector((state) => state.countries);

useEffect(()=>{
dispatch(getCountries())

}, [])

function handleClick(e){
e.preventDefault();
dispatch(getCountries());

}

return (
<div>
<link to = '/activity'> Crear Actividad</link>
<h1>Busca Tu Pais de Preferencia</h1> 
<button onClick= {e=>{handleClick(e)}}>
    Volver a Cargar Todos los Paises</button>
<div>
    <section>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
    </section>
    <section>
        <option value="continente">Filtrar Por Continente</option>
        <option value="actividad">Filtrar Por Actividad</option>
    </section>
</div>
</div>

)}