const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db');

const router = Router();

async function creaActivity (req, res, next) {
    
    const {name,difficulty,duration,season, countries} = req.body;
try {

    const newActivities=  await Activity.create({
                    name,
                    difficulty,
                    duration,
                    season
                }) 
    let country = await Country.findAll({
        where : {
            id : countries
        } 
    }) 
    newActivities.addCountry(country)
    res.send(" Actividad turistica ingresada con exito")


} catch (error) { next (error)
    console.log(`Se produjo el siguiente error ${error}`)

}
}

router.post ('/', creaActivity)

router.get("/",async (req,res)=>{
    const activity= await Activity.findAll()
    res.send(activity)
})






module.exports = router;
