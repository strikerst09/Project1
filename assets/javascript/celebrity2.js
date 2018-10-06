function myFunction() {
  var x = document.getElementById("myDate").value;
  document.getElementById("myDate").innerHTML = x;

  console.log(x);
  console.log(this);
  

  // var weeknumber1 = moment(x, "YYYY-MM-DD").isoWeek();
  // console.log("example 1: " + weeknumber1);
  // var month = moment(x, "YYYY-MM-DD").format('MMMM'); 


};


// function myBday() {
//   var z = document.getElementById("myBday").value;
//   document.getElementById("myBday").innerHTML = z;

//   console.log(z);

//   var weekNumber3 = moment(z, "YYYY-MM-DD").week();
//   console.log("example 3: " + weekNumber3);


  // var weekNumber3 = moment(z, "MM-DD-YYYY").isoWeek();
  // console.log("example 3: " + weekNumber3);



// This .on("click") function will trigger the AJAX Call
$("#find-celebrity").on("click", function (event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    // var celebrity = $("#celebrity-input").val();

    // Here we construct our URL
    var queryURL = "https://ee.iva-api.com/api/Celebrity/Search/?BirthYear=2004&subscription-Key=8aa73eb924654c4d805e939a9faf40b1";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of celebrity-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      method: "GET",
      dataType: "json"

    }).then(function(event) {
      $("#celebrity-view").text(JSON.stringify(event));
      console.log(event.Hits);
    });

  });



    // -----------------------------------------------------------------------
