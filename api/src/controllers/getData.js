const { Country, Activity } = require('../db');

// const getApiInfo = async (req, res)=>{
//     let paises = await axios.get('https://restcountries.com/v3/all')
//     let paisesAll = await paises.data.map( elem =>{
//         return {
//             id : elem.cca3,
//             name : elem.name.common,
//             bandera: elem.flags.map(elem => elem),
//             continente: elem.region,
//             capital: elem.capital.map(elem => elem),
//             subregion: elem.subregion,
//             area: elem.area,
//             poblacion: elem.population,
//         };
//     }); 
//     console.log(paisesAll)
//     return paisesAll; 
// };

function getdbInfo(req, res, next) {
    return Country.findAll()
        .then((data) => res.send(data))
        .catch((err) => next(err));
}

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

// const getAllPaises = async (req, res) => {
//     const apiInfo = getApiInfo();
//     const dbInfo = getdbInfo(); 
//     const totalInfo = apiInfo.concat(dbInfo);
//     return totalInfo;
// }

module.export = {
    //getApiInfo,
    creaActivity, 
    getdbInfo 
    //getAllPaises
}