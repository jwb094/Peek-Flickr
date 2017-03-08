
$(() => {
    let map;
   
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
           .then((data) => {
                initMap(data);
            });
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
            console.log(markerData[i]);
            var pos = new google.maps.LatLng(markerData[i].latitude, markerData[i].longitude);
            //When function is called pass in the image URL
            createMarker(pos, markerData[i].title, markerData[i].url_l);
        }
    }

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

        google.maps.event.addListener(marker, 'click', function () {
            //Trigger a Modal Window here showing the photo
            infowindow.open(map, marker);
        });

        return marker;
    }

});


 