
$(() => {
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
             
            })
})




    
});
