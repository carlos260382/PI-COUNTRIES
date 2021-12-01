const { Country } = require('../db');
const  axios  = require('axios');
const { Sequelize } = require('sequelize');

async function getApiInfo (req, res, next) {
    try {
        
        const paises = await axios.get('https://restcountries.com/v3/all')
        const aresp = paises.data.map( (elem) => {
            return { 
                    id : elem.cca3,
                    name : elem.name.common ? elem.name.common : 'sin nombre',
                    bandera: elem.flags ? elem.flags[1] : 'sin bandera',
                    continente: elem.continents ? elem.continents[0]: 'sin continente',
                    capital: elem.capital ? elem.capital[0] :'no tiene capital',
                    subregion: elem.subregion, 
                    area: Math.floor(elem.area),
                    poblacion: Math.floor(elem.population),
                    } 
                });
                
        res.send(aresp)
       await Country.create(aresp) 


    } catch (error) { next(error)
     
    }   }        
module.export = getApiInfo;
    