

$('#btn').on('click', function(e){
    e.preventDefault();
    let movie = $('#movie').val();
    let rating = $('#rating').val()
    $('<p class="added">').appendTo('body').text(`>> ${movie} - ${rating} / 10     `).$('<button/>').text('new button')
    
    if(rating > 10 || rating < 0){
        alert('Rating must be between 0 -10')
        $('.added').remove();
       }
    else if(movie.length < 2){
        alert('Movie Title Must Be More Than 2 Letters')
        $('.added').remove();
       }

 
    
    // $('<button class="remove">').appendTo('.added').text('- REMOVE MOVIE -' )
    $('#movie').val('');
    $('#rating').val('');


    $('.remove').on('click', function(){
        $('.added').remove();
    })

    
});


























