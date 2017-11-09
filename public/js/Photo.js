let map;
$(() => {

    //$('.modal').modal();
    //System recieves Request data from client side
    $("#submitSearch").click((e) => {
        e.preventDefault();
        let searchphoto = $('#search').val();
        $.ajax({
                url: `/photo/${searchphoto}`,
                method: 'POST',
                data: {
                    photo: $('#search').val()
                }
            })
            //System sends Response information
            //calls the method which requires information as parameter
            .then((data) => {
                console.log(data);
                initMap(data);
            });
        // .then((data) => {
        //     console.log(data.result);
        //     // initMap(data);
        //     for (let i in data.result) {
        //         console.log(data.result[i]);
        //         $('#picData').append(`<tr>
        //         <td> 
        //         <a name="picture" class="picInfo"
        //         data-id="${data.result[i].id}"
        //         data-title="${data.result[i].title}" 
        //         data-image="${data.result[i].url_l}"
        //         data-target="#modal1" href="#modal1">${data.result[i].title} </a></td>
        //         </tr>`)
        //     }

        // });
        // $('body').on('click', (event) => {
        //     console.log(event.target.name);
        //     if (event.target.name === "picture") {
        //         let title = $(event.target).attr('data-title');
        //         let image = $(event.target).attr('data-image');
        //         picModalDetails(title, image);
        //     }
        //     //picGeoData($(event.target).attr("data-id"));
        // });
    })

    //initialises the google map
    function initMap(data) {
        console.log(data);
        let markers = [];
        //centers the map to a specific location
        var uluru = { lat: 51.643173, lng: 0.050168 };
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: uluru
        });

        let markerData = data.result;

        for (let i in markerData) {
            console.log(markerData[i].latitude);
            var pos = new google.maps.LatLng(markerData[i].latitude, markerData[i].longitude);
            //When function is called pass in the image URL
            createMarker(pos, markerData[i].title, markerData[i].url_l);
        }
    }




    // $('#picData').on('click', (event) => {
    //     //console.log(event.target.name);
    //     if (event.target.name === "picture") {
    //         let picLatandLong = $(event.target).attr("data-id");
    //         console.log(picLatandLong);
    //         picGeoData(picLatandLong);
    //     }

    // });

    // function picGeoData(picLatandLong) {
    //     console.log(picLatandLong);
    //     $.ajax({
    //             url: `/latlong/${picLatandLong}`,
    //             method: 'POST',
    //             data: {
    //                 pic: picLatandLong
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data);

    //         });
    // }

});

//initialises the google map
function initMap() {
    var uluru = { lat: 51.5311716, lng: -0.1457836 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
}


// function picModalDetails(title, image) {
//     $('#modalHeader').html(`<h4>${title}</h4>`);
//     $('#modalText').html(`
//   <div class="row">
//     <div class="col s12 m12 l12"><img class="modalImg" src="${image}" width=75% height=75%/></div>
//      </div>`);
// }


//passing the photo image URL in this function
function createMarker(pos, t, url_l) {
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: t
    });

    let contentString = `<img src="${url_l}" />`;

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        //Trigger a Modal Window here showing the photo
        infowindow.open(map, marker);
    });

    return marker;
}