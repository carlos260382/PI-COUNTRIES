const { Router } = require('express');
const { Op }  = require ('Sequelize')
const { Country, Activity } = require('../db');
const  axios  = require('axios');
const { Sequelize } = require('sequelize');

const {
  getApiInfo,
  getIdPais
} = require("../controllers")


const router = Router();

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

router.get("/:idPais", getIdPais)


module.exports = router;
