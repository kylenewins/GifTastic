$(document).ready(function(){
    //array of the gif buttons
    var gifButtons = ["Danny Devito", "Nicholas Cage", "Frogs", "Naruto"]

    // a function that renders the buttons, is run once at the beginning and then 
    // every time the add gif button is clicked
    function renderButtons(){
        //empties the button div
        $("#buttonDiv").empty();
    
        //for loop to render each item in the gifButtons array as a button
        for (var i = 0; i < gifButtons.length; i++){
            //creates a new button
            var b = $("<button>");
            //gives it the class "buttons" and then some bootstrap classes
            b.addClass("genButt btn btn-danger")
            //gives it an attribure of "data-name"
            b.attr("data-name", gifButtons[i]);
            //changes the text of the button to the text in the Array
            b.text(gifButtons[i]);
            //appends the button to the html div
            $("#buttonDiv").append(b);
        }
    }

        // This function handles events where the add gif button is clicked
    $("#add-gif").on("click", function(event) {
        //prevents default submit action of the button
            event.preventDefault();
            // This line of code will grab the input from the textbox
            var gif = $("#user-input").val().trim();
    
            // The input from the textbox is then added to our array
            gifButtons.push(gif);
    
            // Calling renderButtons which handles the processing of the gif array
            renderButtons();
    });

    function gifDump(){
        $("#gifBox").empty();

        var keyword = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        keyword + "&api_key=800ZAvdGZmzRlJARbz2BP0SqRUfB04b4&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var results = response.data;

            for (var i = 0; i < results.length; i++){
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var gif = $("<img>");
                var stillUrl = results[i].images.fixed_height_still.url
                var movingUrl = results[i].images.fixed_height.url

                gif.attr("src", stillUrl)
                gif.attr("class", "gif-dump")
                gif.attr("data-gif", movingUrl)
                gif.attr("data-index", i)
                gif.attr("data-still", stillUrl)
                
                
                gifDiv.prepend(p)
                gifDiv.prepend(gif)

                $("#gifBox").prepend(gifDiv);
            }
        })
          
    }

    
    $(document).on("click", ".genButt", gifDump);

    $(document).on("click", ".gif-dump", function(event){
        console.log("gif click")

        var currentIn = $(this).attr("data-index");
        var moveUrl = $(this).attr("data-gif");
        var stillUrl = $(this).attr("data-still");
        console.log(currentIn);

        if ($(this).attr("src") == stillUrl) {
            $(this).attr("src", moveUrl);
        }
        else if ($(this).attr("src") == moveUrl) {
            $(this).attr("src", stillUrl);
    };   

    })

    renderButtons();

    });
    