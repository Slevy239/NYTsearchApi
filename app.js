




var APIKEY = "9pCVN4K5GzuFggvtfVXmxsiCGCOOsuwC";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+SearchTerm+'api-key='+APIKEY;




$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    
    console.log(response);


})