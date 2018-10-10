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

$(document).on("click", "#submitBtn", function (event) {
    event.preventDefault();

    let movie = $("#myMovie").val().trim();
    let queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=5479d0ac";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        let title = response.Title;
        let year = response.Year;
        let genre = response.Genre;
        let rated = response.Rated;
        let actors = response.Actors;
        let rating = (response.Ratings[1].Source) + ": " + (response.Ratings[1].Value);
        let plot = response.Plot;
        let poster = response.Poster;

// note to change 
        logMovie.ref().push({
            title: title,
            year: year,
            genre: genre,
            rated: rated,
            actors: actors,
            rating: rating,
            plot: plot,
            poster: poster,


        })
        console.log(response)

        let movieDiv = $("<div>");
        movieDiv.attr("class", "container");
        let movieDiv2 = $("<div>");
        movieDiv2.attr("class", "col12-sm");
        movieDiv2.attr("class", "results");
        let moviePoster = $("<img>");
        moviePoster.attr("src", poster)
        moviePoster.attr("class", "moviePoster");
        let titleHeader = $("<h5>");
        titleHeader.text(title);
        let movieList = $("<ul>");
        let movieTitle = $("<li>").text(title);
        let movieYear = $("<li>").text(year);
        let movieGenre = $("<li>").text(genre);
        let movieRated = $("<li>").text(rated);
        let movieActors = $("<li>").text(actors);
        let movieRating = $("<li>").text(rating);
        let moviePlot = $("<li>").text(plot);

        movieList.append(movieTitle, movieYear, movieGenre,movieRated, movieActors, movieRating, moviePlot);
        console.log(response)

        movieDiv2.append(titleHeader); 
        movieDiv2.append(moviePoster);
        movieDiv2.append(movieList);
        movieDiv.append(movieDiv2);
        $("#resultsBox").prepend(movieDiv);
    })

    let queryURL2 = "https://api.giphy.com/v1/gifs/search?api_key=xTFrDsrxZIPCwPYTk6rmBA24QxOpfLCB&q=" + movie + "&limit=1&offset=0&rating=R&lang=en"
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        let gif = $("<img>");
        gif.attr("src", response.data[0].images.fixed_height_small.url);
        gif.attr("class", "gifClass");

        $("#gifsBox").prepend(gif);
    })

    $("#myMovie").val("");  
})

let counter = 1;

logMovie.ref().limitToLast(5).on("child_added", function(snapshot) {
    let recents = $("<div>");
    let eachRecent = $("<button>").text(snapshot.val().title);
    eachRecent.attr("counter", counter);
    counter++;
    eachRecent.attr("class", "srchBtn");
    recents.append(eachRecent);
    $("#recentSrchs").prepend(recents);
});

// It's Good.       

$(document).on("click", ".srchBtn", function (event) {
    event.preventDefault();
    console.log(this);

    let movie = $(this).text().trim();
    let queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=5479d0ac";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        let title = response.Title;
        let year = response.Year;
        let genre = response.Genre;
        let rated = response.Rated;
        let actors = response.Actors;
        let rating = (response.Ratings[1].Source) + ": " + (response.Ratings[1].Value);
        let plot = response.Plot;
        let poster = response.Poster;

        console.log(response)

        logMovie.ref().push({
            title: title,
            year: year,
            genre: genre,
            rated: rated,
            actors: actors,
            rating: rating,
            plot: plot,
            poster: poster,
        })

        let movieDiv = $("<div>");
        movieDiv.attr("class", "col12-sm results");
        let moviePoster = $("<img>");
        moviePoster.attr("src", poster)
        moviePoster.attr("class", "moviePoster");
        let titleHeader = $("<h5>");
        titleHeader.text(title);
        let movieList = $("<ul>");
        let movieTitle = $("<li>").text(title);
        let movieYear = $("<li>").text(year);
        let movieGenre = $("<li>").text(genre);
        let movieRated = $("<li>").text(rated);
        let movieActors = $("<li>").text(actors);
        let movieRating = $("<li>").text(rating);
        let moviePlot = $("<li>").text(plot);

        movieList.append(movieTitle, movieYear, movieGenre, movieRated, movieActors, movieRating, moviePlot);

        movieDiv.append(titleHeader);
        movieDiv.append(moviePoster);
        movieDiv.append(movieList);
        $("#resultsBox").prepend(movieDiv);
    })

    let queryURL2 = "https://api.giphy.com/v1/gifs/search?api_key=xTFrDsrxZIPCwPYTk6rmBA24QxOpfLCB&q=" + movie + "&limit=1&offset=0&rating=R&lang=en"
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let gif = $("<img>");
        gif.attr("src", response.data[0].images.fixed_height.url);
        gif.attr("class", "gifClass");

        $("#gifsBox").prepend(gif);
    })
})
