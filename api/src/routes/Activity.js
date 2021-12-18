const {
    addActivity,
    getActivity
} = require("../controllers")

const {
    Router
} = require('express');


const router = Router();

router.post('/', addActivity)
router.get('/', getActivity)


module.exports = router;
