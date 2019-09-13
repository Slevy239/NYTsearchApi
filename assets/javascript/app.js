

// APIKEY from the new york search developer app
var APIKEY = "9pCVN4K5GzuFggvtfVXmxsiCGCOOsuwC";

var articles = $('#top-articles').html();

var myURL;

// on click function to begin a search for when the user clicks search button
$('#search').on('click', function(event){

    event.preventDefault();

    // create a variable to store the users search string
    var searchTerm = $('#searchTerm').text();

    /* var articles = $('#top-articles').html(); */

    var searchTerm = 'cheeseburgers';
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+'&api-key='+APIKEY;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    
        console.log(response);

        myURL = response.response.docs[0].web_url;
        //console.log(myURL[0]);
        
    
        console.log(myURL);

    })


    $('#top-articles').append('<div>');
    $('#top-articles > div').text(myURL);

    
    


})

