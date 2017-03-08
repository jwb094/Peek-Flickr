const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');


/* API CALLS */

// call method airportDetailController.search to search for Airports 
router.post("/photo/:photo", photoController.search)



module.exports = router;