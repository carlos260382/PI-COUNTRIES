const { Router } = require('express');
//const { creaActivity } = require('../controllers/getData' );

const router = Router();

async function creaActivity (req, res, next) {
    const activity = req.body;
    if (!activity) res.send({
        error: 500,
        message: 'there is no information in the body'
    });
    try {
        const creaActivity = await Activity.create(activity);
        return res.send(creaActivity)
    } catch (error) {
        next(error);
    }
};


router.get ('/', (req, res, next) => {
    res.send('soy get Activity')
})

router.post ('/', creaActivity)


// router.get("/",async (req,res)=>{
//     const findActivity= await Activity.findAll()
//     res.send(findActivity)
// })

// router.post("/",async (req,res)=>{
//     try {
//         const {name,difficulty,duration,season,countries}=req.body;

//         const newActivity=  await Activity.create({
//             name,
//             difficulty,
//             duration,
//             season
//         })
       
//         await newActivity.addCountry(countries) //countries es el id del pais
        
//         res.send(" Se añadió actividad turistica con exito")

//     } catch (error) {
        
//         console.log(`Se produjo el siguiente error ${error}`)
//     }
    
// })



module.exports = router;
