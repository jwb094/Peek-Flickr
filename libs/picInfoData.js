const rest = require('restler');
const to_json = require('xmljson').to_json;
const photoModel = require("../models/photoModel");

class FetchPicData {
    /** 
    This function calls an anpi which gather airports within a given miles radius 
    * @method getSearchedPhoto
    * @param {string} photo
    * @return {Promise}  return  data called from API => model
    */

    static getIndPhotoDetails(photo) {
        console.log("getIndPhotoDetails " + photo);
         let details;
        return new Promise(
            (resolve, reject) => {
            rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=71978388bebe441396682f0f606bb462&photo_id=${photo}&format=rest&auth_token=72157682924660055-8ce283bddf2792b1&api_sig=e99df09d722387ed59e21c0755f9331d`).on('complete', function (IndPhotoResult) {
                    //  rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=77791ca940bba36e3b8facb70e26d836&photo_id=${photo}&format=rest&auth_token=72157681994219616-6b4164bdc5de1fc7&api_sig=5e857f5610c1acce22c608b9674d86a8`).on('complete', function (IndPhotoResult) {
                    console.log("IndPhotoResult" + IndPhotoResult);
                    if (IndPhotoResult instanceof Error) {
                        reject(IndPhotoResult);
                    } else {
                        to_json(IndPhotoResult, function (error, data) {
                            details = JSON.stringify(data);
                            console.log("XML TO JSON" + details)
                        })
                        let PhotoJSON = JSON.parse(details);
                        console.log('getIndPhotoDetails' + PhotoJSON);
                        resolve(PhotoJSON);
                    }
                });
            })
    }
}
module.exports = FetchPicData;