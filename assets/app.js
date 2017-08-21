// starting array of shows
var shows = ["the office", "friends", "Parks and Recreation","the simpsons", "planet earth", "Game of thrones" ]


function showGifs(){

    var gifs = $(this).attr(gifURL);

    // create queryURL to fill in later with search bar
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    show + "&api_key=42d38ab6ea2b49e7a6a5033675b813b7&limit=5";

    //AJAX request
    $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function (response) {
            console.log(response);
            console.log(queryURL);

          





        });
            

};

function makeButtons(){ 
    
    // prevents copies of buttons being added
    $("#newButtons").empty();

    // loops through shows array
    for (i=0; i<shows.length; i++){

        // stores a new button as a variable
        var btn = $("<button>");
        btn.addClass("gifs");
        btn.attr("data-name", shows[i]);
        btn.text(shows[i]);

        $("#newButtons").append(btn);
        
    }
};

$("#add-show").on("click", function(event) {
    event.preventDefault();

    var show = $("#search-input").val().trim();

    shows.push(show);

    makeButtons();

});

makeButtons();


    
 


