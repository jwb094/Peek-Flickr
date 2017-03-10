class PhotoModel {

    constructor(obj) {
        if (!obj.id) {
            throw new Error("Photo does not have an id");
        } else {
            this.id = obj.id;
            //console.log(this.id);
        }

        if (!obj.title) {
            throw new Error("Photo does not have a title");
        } else {
            this.title = obj.title;
            // console.log(this.title);
        }

        if (obj.latitude == "0") {
            throw new Error("Cannot display photo without a valid latitude value");
        } else {
            this.latitude = obj.latitude;
             console.log(this.latitude);
        }

        if (obj.longitude == "0") {
            throw new Error("Cannot display photo without a valid longitude value");
        } else {
            this.longitude = obj.longitude;
            console.log(this.longitude);
        }

        if (!obj.url_l) {
            throw new Error("Cannot display photo without valid URL");
        } else {
            this.url_l = obj.url_l;
            //console.log(this.url_l);
        }
    }
    //OUTCOME
    /* obj = {
     * this.id = id,
     * this.title = title,
     * this.url_l = url_l,
     * this.latitude = latitude,
     * this.longitude = longitude
     * }
     */
}

module.exports = PhotoModel;