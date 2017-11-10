const flickrPhoto = require("../libs/photoApi");

class PhotoController {

    /**
     * this function get photos from requested data
     * @method search
     * @param {String} req - req.body.name string
     * @param {String} res -  string
     * @return {Promise} return JSON Object OF Photos
     */

    static search(req, res) {
        flickrPhoto.getSearchedPhoto(req.body.photo)
            .then(result => {
                res.status(200).send({
                    result: result
                });
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }
}

module.exports = PhotoController;