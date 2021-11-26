const { Router } = require('express');
// Importar todos los routers;
const Country = require('./Country.js');
const Activity = require('./Activity.js');

const router = Router();

// Configurar los routers
router.use('/countries', Country);
router.use('/activity', Activity);

module.exports = router;
