
// $(document).ready(function(){

    function myFunction() {
        var x = document.getElementById("myDate").value;
        document.getElementById("myDate").innerHTML = x;
        console.log(x);
    
        var weeknumber1 = moment(x, "YYYY-MM-DD").isoWeek();
        alert(weeknumber1);
        console.log("example 1: " + weeknumber1);
    
      };
    
      function bdayFunction() {
        var y = document.getElementById("bday").value;
        document.getElementById("bday").innerHTML = y;
        console.log(y);
    
        var weeknumber2 = moment(y, "YYYY-MM-DD").week();
        console.log(weeknumber2);
        alert(weeknumber2);
        console.log("example 2: " + weeknumber2);
      };
    
      function myBday() {
        var z = document.getElementById("myBday").value;
        document.getElementById("myBday").innerHTML = z;
    
        console.log(z);
    
    
        var weekNumber3 = moment(z, "MM-DD-YYYY").isoWeek();
        console.log("example 3: " + weekNumber3);
        
        // var weekNumber3 = moment(z, "MM-DD-YYYY").isoWeek();
        // console.log("example 3: " + weekNumber3);
    
      };
    
    
    
    
    
      