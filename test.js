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
       data.Search.forEach(function (movie) {
        if (movie.Poster!== "N/A"){
         $('ul').append('<img src="'+movie.Poster+' "/>');
        } else {
         $('ul').append('<li> Movie Title: '+ movie.Title + '</li>');            
        }
       });
    });
    promise.error(function(error) {
      console.log(error);
    });
  });
});