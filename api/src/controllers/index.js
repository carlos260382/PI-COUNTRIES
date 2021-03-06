const { Country, Activity } = require('../db');

async function addActivity(req, res, next) {
    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;
    try {
        const newActivities = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        let country = await Country.findAll({
            where: {
                id: countries
            }
        })
        newActivities.addCountry(country)
        res.send(" Actividad turistica ingresada con exito")
    } catch (error) {
        next(error)
        console.log(`Se produjo el siguiente error ${error}`)
    }
};


async function getActivity(req, res, next) {
    const activity = await Activity.findAll()
    res.send(activity)
}


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
                flag: elem.flags.find((e) => e.includes('svg')),
                continent: elem.continents ? elem.continents[0] : 'sin continent',
                capital: elem.capital ? elem.capital[0] : 'sin capital',
                subregion: elem.subregion,
                area: Math.floor(elem.area),
                population: Math.floor(elem.population),
            }
        });
        await Country.bulkCreate(allCountry);
        return allCountry;
    } else {
        return countries
    }
};

async function getIdPais(req, res, next) {
    try {
        const {
            idPais
        } = req.params;
        const detailCountry = await Country.findByPk(idPais.toUpperCase(), {
            include: Activity,
        });
        return res.send(detailCountry);
    } catch (error) {
        res.status(404).send("Country detail not found");
    }
};


module.exports = {
    getActivity,
    addActivity,
    getIdPais,
    getApiInfo
};