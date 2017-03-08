class PageController {

  
    /**
   * This function render the home page for the search photo function
   */
  static homePage(req , res) {
    res.render("index")
    }
}

module.exports = PageController;