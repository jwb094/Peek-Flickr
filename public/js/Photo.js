
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
             console.log(data);
              initMap(data)
            })
})

      function initMap(data) {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
 

    
});


 