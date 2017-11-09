const flickrPhoto = require("../libs/photoApi");
// const flickrIndPhoto = require("../libs/picInfoData");
//const picGeo = require("../libs/picGeoData");

class PhotoController {

    /**
     * this function get photos
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

    // static picLoc(req, res) {
    //     console.log(req.body.pic);
    //     flickrIndPhoto.getIndPhotoDetails(req.body.pic)
    //         .then(result => {
    //             console.log("getIndPhotoDetails" + result);
    //             res.status(200).send({
    //                 result: result
    //             });
    //         })
    //         .catch(err => {
    //             res.status(400).send(err);
    //         })
    // }

    //      static photoLatandLong(req, res) {
    //         flickrIndPhoto.getIndPhotoDetails(req.body.pic)
    //             .then(result => {
    //                 console.log(result);
    //                 picGeo.getInfo(result)
    //                 .then( result =>{
    //                 res.status(200).send({
    //                     result: result
    //                 });
    //             })
    //             .catch(err => {
    //                 res.status(400).send(err);
    //             })
    //     }
    // }

}



module.exports = PhotoController;