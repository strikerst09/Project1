
// This .on("click") function will trigger the AJAX Call
 $("#find-celebrity").on("click", function(event) {
    
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    // var celebrity = $("#celebrity-input").val();

    // Here we construct our URL
    var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/search?q=celebrities_born_on_January_01"

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of celebrity-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#celebrity-view").text(JSON.stringify(response));
    });

    // -----------------------------------------------------------------------

  });