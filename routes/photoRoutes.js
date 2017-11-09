const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');


/* API CALLS */

// call method airportDetailController.search to search for Airports 
router.post("/photo/:photo", photoController.search)

// router.post("/latlong/:pic", photoController.picLoc)



module.exports = router;