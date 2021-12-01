const { Router } = require('express');
const { Country, Activity, country_activity } = require('../db');

const router = Router();

router.get("/",async (req,res)=>{
    const activity= await Activity.findAll()
    res.send(activity)
})

async function creaActivity (req, res, next) {
    
try {
    const {name,difficulty,duration,season,idActivity} = req.body;

    const newActivities=  await Activity.create({
                    name,
                    difficulty,
                    duration,
                    season
                })
    await newActivities.addCountry(idActivity)
    res.send("Actividad turistica añadidad con exito")


} catch (error) { next (error)
    console.log(`Se produjo el siguiente error ${error}`)

}
}


router.get ('/', (req, res, next) => {
    res.send('soy get Activity')
})

router.post ('/', creaActivity)



module.exports = router;
