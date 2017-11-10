const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');


/* API CALLS */

// call method photoController.search to search for photo by flickr users 
router.post("/photo/:photo", photoController.search)


module.exports = router;