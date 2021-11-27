const { Router } = require('express');
const { Activity } = require('../db');

const router = Router();

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




//     if (!activity) res.send({
//         error: 500,
//         message: 'there is no information in the body'
//     });
//     try {
//         const creaActivity = await Activity.create(activity);
//         return res.send(creaActivity)
//     } catch (error) {
//         next(error);
//     }
// };


router.get ('/', (req, res, next) => {
    res.send('soy get Activity')
})

router.post ('/', creaActivity)


// router.get("/",async (req,res)=>{
//     const findActivity= await Activity.findAll()
//     res.send(findActivity)
// })




module.exports = router;
