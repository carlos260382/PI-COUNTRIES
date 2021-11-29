const { Router } = require('express');
const { Country, Activity } = require('../db');
const  axios  = require('axios')
//const { getdbInfo } = require('../controllers/getData' );

const router = Router();


function getApiInfo (req, res, next) {
    
        const paises = axios.get('https://restcountries.com/v3/all')
        .then((response)=>{
        
        const aresp = response.data.map( (elem) => {
            let country = { 
                    id : elem.cca3,
                    name : elem.name.common ? elem.name.common : 'sin nombre',
                    bandera: elem.flags ? elem.flags[1] : 'sin bandera',
                    continente: elem.continents ? elem.continents[0]: 'sin continente',
                    capital: elem.capital ? elem.capital[0] :'no tiene capital',
                    subregion: elem.subregion, 
                    area: Math.floor(elem.area),
                    poblacion: Math.floor(elem.population),
                    } 
        Country.create(country) 
        return country
    });
                
        return res.send(aresp)
        })
        .catch((err)=> next(err))
};


// if (name){
//     let paisesName = await paisesTotal.filter(elem => elem.name.toLowerCase().includes(name.toLowerCase())) 
//     paisesName.length ?
//     res.status(200).send(paisesName):
//     res.status(404).send('pais no encontrado')
// }else{
// res.status(200).send(paisesTotal)
// }
// }); 



function getdbInfo(req, res, next) {
    return Country.findAll()
        .then((data) => res.send(data))
        .catch((err) => next(err));
}

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

router.get ('/', getApiInfo) 

router.get("/", async (req, res) => {
  const { name } = req.query;
 
    try {
      if (name) {
         
        let country = await Country.findAll({
          include: Activity, 
          where: {
           
            name: {
              [Op.iLike]:name + "%",
            },
            
          },
          order: [["name", "ASC"]],
        });
        return res.send(country);
       
        
      } else if (!name) {
        let country = await Country.findAll({
          include: Activity,
          order: [["name", "ASC"]],
        });
        return res.send(country);
      }
    } catch (error) {
      res.status(404).send("Country not found");
    }
  });





  // const { name } = req.query;
  // const paisesAll = await getApiInfo();
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

router.get("/:idPais", getIdPais)  




module.exports = router;
