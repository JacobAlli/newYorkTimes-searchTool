$("#search").on("click", function() {

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"+"6210d32b86a44b439f84ae9be6fc555c";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  var restults = result.data;

}).fail(function(err) {
  throw err;
});
	// In the top articles section it will need to display the #, name of article and author
});

        // .done(function(response) {
        //   var results = response.data;

        //   for (var i = 0; i < results.length; i++) {
        //     var gifDiv = $("<div class='item'>");

        //     var rating = results[i].rating;

        //     var p = $("<p>").text("Rating: " + rating);

        //     var personImage = $("<img>");
        //     personImage.attr("src", results[i].images.fixed_height.url);

        //     gifDiv.prepend(p);
        //     gifDiv.prepend(personImage);

        //     $("#gifs-appear-here").prepend(gifDiv);