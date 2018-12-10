# GifTastic
<h1> This is my Gif Generator Page!</h1>

<p> This javascript that runs this app is essentially a frankenstein of three different sources:<p>
    <ul> 
        <li> Activity #10 - The Working Movie App </li>
        <li> Activity #13 - Button Triggered Ajax </li>
        <li> this stack overflow page that I referenced for the static/moving click events: https://stackoverflow.com/questions/47799310/need-onclick-to-toggle-between-image-and-gif-from-giphy-api-call </li>
    </ul>

<p> The app functions as follows: </p>

<p> When the page is initialized, the renderButtons function runs. This function goes through the gifButtons array and transfers the text data to buttons. Another important task this function completes is assigning an attribute of "data-name" to each button that is identical to the buttons text. It then appends these buttons into the buttonDiv html element <p>

<p> The next function I wrote is a click event for the #add-gifs button. This function grabs the user input from the textbox, pushes that string into the gifButtons array, and then runs renderButtons again, essentially re-rendering all of the default buttons plus the new one<p>

<p> The next function, gifDump, is the meat and potatoes of the app. In order, it accomplishes the following tasks:</p>
    <ol>
        <li> empties the html gifBox element </li>
        <li> defines a variable of "keyword" that grabs the individual "data-name" attribute that was defined in the renderButtons function</li>
        <li> builds an endpoint URL to the Giphy API that factors in the keyword variable (ie data-name) as the search criteria</li>
        <li> runs an ajax function that gets JSON data from the queryURL that was just built and then uses that data to make an individual div, corresponding rating data, and img element for EACH gif that is returned</li>
        <li> it then assigns attributes to each gif like its non-moving and moving urls, its default src (stillUrl), class (to be grabbed later by click function), "data-gif" attribute which stores its unique moving url, it's data index (so that all the gifs can work separately), and finaly stores the stillUrl as an attribute seperate from src so that it can be called again later</li>
        <li> Then it prepends all of that into the corresponding divs so it can be displayed</li>
    </ol>

<p> Finally, I wrote 2 document-scaled click events<p>
<ul>
    <li> The first one runs the gifDump function any time any of the page's "genButt"(generated buttons) are clicked</li>
    <li> The second one runs a function that discerns whether the image is still or moving, and then switches it to the opposite whenever a gif is clicked. (grabbed from the CLASS ".gif-dump" that is given to each gif inside the gifDump function)</li>
</ul>

<p> That's It!</p>

    
    

