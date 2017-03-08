const express = require("express");
const router = express.Router();


const homePageController = require('../controllers/displayPageController');

/* DISPLAY PAGES CALLS */

//home page 
router.route("/")
    .get(homePageController.homePage);


module.exports = router;