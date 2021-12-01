const { Router } = require('express');
const { Op }  = require ('Sequelize')
const { Country, Activity } = require('../db');
const  axios  = require('axios');
const { Sequelize } = require('sequelize');

const router = Router();

const getApiInfo = async () => { 
  const countries = await Country.findAll({
    attributes: ["id", "name", "flag", "continent", "capital", "subregion", "area", "population"],
  });
  if (!countries.length) {
    var allCountry = await axios.get("https://restcountries.com/v3/all");
    allCountry = allCountry.data
    allCountry = allCountry.map((elem) => {

      return {
            id: elem.cca3,
            name: elem.name.common ? elem.name.common : 'sin nombre',
            flag: elem.flags.find((e)=>e.includes('svg')),
            continent: elem.continents ? elem.continents[0] : 'sin continent',
            capital: elem.capital ? elem.capital[0] : 'sin capital',
            subregion: elem.subregion,
            area: Math.floor(elem.area),
            population: Math.floor (elem.population),
      }
    });
    await Country.bulkCreate(allCountry);
    return allCountry;
  } else {
    return countries
  }};


router.get("/", async (req, res, next) => {
  await getApiInfo()
  const { name } = req.query;
  try {
    if(name){
      let countryActivity = await Country.findAll({
        include: Activity,
        where: {
             name: {
             [Op.iLike]:"%" + name + "%",
              },
               },
        order: [["name", "ASC"]],
     });
     
     return res.send(countryActivity)
   }  
   else{ 
    let countryActivity = await Country.findAll({
    include: Activity,
  }) 
  return res.send(countryActivity)
}} catch (error) {
  res.status(404).send("Country not found")
}})


async function getIdPais(req, res, next) {
    try {
        const { idPais } = req.params;
        const detailCountry = await Country.findByPk(idPais.toUpperCase(), {
          include: Activity,
          attributes: {
            // exclude: ["createdAt", "updatedAt"],
          },
        });
        return res.send(detailCountry);
      } catch (error) {
        res.status(404).send("Country detail not found");
      }
    };

router.get("/:idPais", getIdPais)  


module.exports = router;
