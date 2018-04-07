const rest = require('restler');
const to_json = require('xmljson').to_json;
const photoModel = require("../models/photoModel");
const api_key = process.env.API_KEY;


class FetchApiData {
    /** 
    This function calls an anpi which gather airports within a given miles radius 
    * @method getSearchedPhoto
    * @param {string} photo
    * @return {Promise}  return  data called from API => model
    */

    static getSearchedPhoto(photo) {
        let details;
        console.log(api_key);
        //console.log(process.env.API_KEY);
        return new Promise(
            (resolve, reject) => {
                //Calls the Flickr Api
                rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${photo}&extras=geo,url_l`).on('complete', function(photoResult) {
                    //if result is an error => reject the result of api call
                    if (photoResult instanceof Error) {
                        reject(photoResult);
                    } else {
                        //if result from api call then convert result data from XML -> JSON
                        to_json(photoResult, function(error, data) {
                                details = JSON.stringify(data);
                            })
                            //Convert data into JSON object notation
                        let PhotoJSON = JSON.parse(details);
                        // receieve the exact api call data within JSON object
                        let arrayForPhotos = PhotoJSON.rsp.photos.photo;
                        let photoArray = [];
                        // for each item in API data photo
                        for (let i in arrayForPhotos) {
                            try {
                                // pass the JSON object to the model function in photoModel => filter unneccesary data
                                let photodetails = new photoModel(arrayForPhotos[i].$);
                                // Once the validation of data has been approved insert the variable into the array
                                photoArray.push(photodetails);
                            } catch (e) {}
                        }
                        //take parameter back to promise chain
                        resolve(photoArray);
                    }
                });
            })
    }
}
module.exports = FetchApiData;