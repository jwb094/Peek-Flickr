const rest = require('restler');
const to_json = require('xmljson').to_json;
const photoModel = require("../models/photoModel");



class FetchApiData {
    /** 
    This function calls an anpi which gather airports within a given miles radius 
    * @method getSearchedPhoto
    * @param {string} photo
    * @return {Promise}  return  data called from API => model
    */

    static getSearchedPhoto(photo) {
        let details;
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0e57f157ea48b90d141ea90ccec28d67&text=${photo}&extras=url_l`).on('complete', function (photoResult) {
                    if (photoResult instanceof Error) {
                        reject(photoResult);
                    } else {
                        to_json(photoResult, function (error, data) {
                            details = JSON.stringify(data);
                        })
                        let PhotoJSON = JSON.parse(details);
                        let arrayForPhotos = PhotoJSON.rsp.photos.photo;
                        let photoArray = [];
                        // for each item in API data photo
                        for (let i in arrayForPhotos) {
                            //console.log(arrayForPhotos[i].$.id);
                            try {
                                // pass the JSON object to the model function in photoModel => filter unneccesary data
                                let photodetails = new photoModel(arrayForPhotos[i].$);
                                // Once the validation of data has been approved insert the variable into the array
                                photoArray.push(photodetails);

                            } catch (e) {
                                console.log(`Error ${e.message}`);
                            }
                        }
                        resolve(photoArray);
                    }
                });
            })
    }
}
module.exports = FetchApiData;