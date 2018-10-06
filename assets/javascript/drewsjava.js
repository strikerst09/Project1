// Initialize Firebase
let config = {
    apiKey: "AIzaSyAqLAr1M9lf33NZiJkhmDfR7vScc3-ayGE",
    authDomain: "project1-e22c8.firebaseapp.com",
    databaseURL: "https://project1-e22c8.firebaseio.com",
    projectId: "project1-e22c8",
    storageBucket: "project1-e22c8.appspot.com",
    messagingSenderId: "976823205196"
  };
  firebase.initializeApp(config);

let logMovie = firebase.database();

$("#submitBtn").on("click", function(event) {
    event.preventDefault();

    let movie = $("#myDate").val().trim();
    let queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=5479d0ac";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        let title = response.Title;
        let rated = response.Rated;
        let rating = response.Ratings[1];
        let plot = response.Plot;

        logMovie.ref().push({
            title: title,
            rated: rated,
            rating: rating,
            plot: plot
        })
    })

    let queryURL2 = "https://api.giphy.com/v1/gifs/search?api_key=xTFrDsrxZIPCwPYTk6rmBA24QxOpfLCB&q=" + movie + "&limit=1&offset=0&rating=R&lang=en"
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        let gif = $("<img>");
        gif.attr("src", response.data[0].images.fixed_height_small.url);

        $("#gifsBox").prepend(gif);
    })
})