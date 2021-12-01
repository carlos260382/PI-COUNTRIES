const { Router } = require('express');
const { Op }  = require ('Sequelize')
const { Country, Activity } = require('../db');
const  axios  = require('axios');
const { Sequelize } = require('sequelize');
//const { getdbInfo } = require('../controllers/getData' );

const router = Router();

const getApiInfo = async () => { 
  const countries = await Country.findAll({
    attributes: ["id", "name", "bandera", "continente", "capital", "subregion", "area", "poblacion"],
  });
  if (!countries.length) {
    var allCountry = await axios.get("https://restcountries.com/v3/all");
    allCountry = allCountry.data
    allCountry = allCountry.map((el) => {

      return {
            id: el.cca3,
            name: el.name.common,
            bandera: el.flags.find((e)=>e.includes('svg')),
            continente: el.region,
            capital: el.capital,
            subregion: el.subregion,
            area: el.area,
            poblacion: el.population,
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
            exclude: ["createdAt", "updatedAt"],
          },
        });
        return res.send(detailCountry);
      } catch (error) {
        res.status(404).send("Country detail not found");
      }
    };

router.get("/:idPais", getIdPais)  


// router.get("/", async (req, res, next) => {
//   const { name } = req.query;
//   const getApiInfoBd = await getApiInfo() 
//  try {
//       if (name) {
//       let country = await Country.findAll({
//           include: Activity, 
//           where: {
//               name: {
//               [Op.iLike]:"%" + name + "%",
//             },
//            },
//           order: [["name", "ASC"]],
//         });
//         return res.send(country);
             
//       } else if (!name) {
//         let country = await Country.findAll({
//           include: Activity,
//           order: [["name", "ASC"]],
//         });
//         return res.send(country);
//       }
//     } catch (error) {
//       res.status(404).send("Country not found");
//     }
//   });





  // const { name } = req.query;
    // try {
  // if (name){
  //   paisesName = await paisesAll.filter(eleme => eleme.name.toLowerCase().include(name.toLowerCase()))
  // paisesName.length ?
  // res.status(200).send(paisesName) :
  // res.status(400).send('pais no encontrado')
  // }else{
  //   res.status(200).send(paisesAll)
  // }
    
  // } catch (error) {
  //   res.status(404).send("pais no encontrado");
  // } 

  // })



  //   try {
  //     if (name) {
         
  //       let country = await Country.findAll({
  //         include: Activity, 
  //         where: {
           
  //           name: {
  //             [Op.iLike]:name + "%",
  //           },
            
  //         },
  //         order: [["name", "ASC"]],
  //       });
  //       return res.send(country);
       
        
  //     } else if (!name) {
  //       let country = await Country.findAll({
  //         include: Activity,
  //         order: [["name", "ASC"]],
  //       });
  //       return res.send(country);
  //     }
  //   } catch (error) {
  //     res.status(404).send("Country not found");
  //   }
  // });





module.exports = router;
