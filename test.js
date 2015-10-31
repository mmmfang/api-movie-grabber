$(function(){
  $('input').keyup(function () {
    console.log(this.data);
    var value = $(this).val();
    var promise = $.ajax({
      url:'http://www.omdbapi.com/',
      method: "GET",
      data: {
        s: value
      },
    });
    promise.done(function(data) {
      console.log(data);
      $('ul').html('');
       // $.unique(data.Search); //tried this Jquery method but this only works on dom elements so didn't work on my array of objects! leaving it in here to remind me there is this property
       
       data.Search.forEach(function (movie) {
        if (movie.Poster!== "N/A"){

         $('ul').append('<a href="http://www.imdb.com/title/'+movie.imdbID+'/"><img src="'+movie.Poster+' " /></a>') 
        }
        // else {
        //  $('ul').append('<li> Movie Title: '+ movie.Title + '</li>');            
        // }
       });
    });
    promise.error(function(error) {
      console.log(error);
    });
  });
});