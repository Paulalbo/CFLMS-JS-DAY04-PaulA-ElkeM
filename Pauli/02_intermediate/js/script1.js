let min = 1; 
let max = 10;
var randomNum1 = Math.floor(Math.random() * max)+ min;
var randomNum2 = Math.floor(Math.random() * max)+ min;
var randomNum3 = Math.floor(Math.random() * max)+ min;



var hotel1 = {
   hotelName: 'Hilton',
   numberOfNights: randomNum1,
   address: 25,
   image: true,
    }

var hotel2 = {
   hotelName: 'Ritz',
   numberOfNights: randomNum2,
   address: 25,
   image: true,
    }

var hotel3 = {
   hotelName: 'Grand Hotel',
   numberOfNights: randomNum3,
   address: 25,
   image: true,
    }



function insertText() {
   document.getElementById("hotel1").innerHTML = "<strong>" + randomNum1 + "</strong>";

   document.getElementById("hotel2").innerHTML = "<strong>" + randomNum2 + "</strong>";

   document.getElementById("hotel3").innerHTML = "<strong>" + randomNum3 + "</strong>";

}

function showavail (){
    let numberofnights = document.getElementById("numbernights").value;
    if (randomNum1 < numberofnights) {
            document.getElementById("available1").innerHTML = "NO";
            document.getElementById("button1").innerHTML = "<button class=\"notavailable\">Not vailable</button>";
        }
        else{
            document.getElementById("available1").innerHTML = "Yes";
            document.getElementById("button1").innerHTML = "<button class=\"available\">Availables</button>";
        }

    if (randomNum2 < numberofnights) {
            document.getElementById("available2").innerHTML = "NO";
            document.getElementById("button2").innerHTML = "<button class=\"notavailable\">Not vailable</button>";
        }
        else{
            document.getElementById("available2").innerHTML = "Yes";
            document.getElementById("button2").innerHTML = "<button class=\"available\">Available</button>";
        }

    if (randomNum3 < numberofnights) {
            document.getElementById("available3").innerHTML = "NO";
            document.getElementById("button3").innerHTML = "<button class=\"notavailable\">Not vailable</button>";
        }
        else{
            document.getElementById("available3").innerHTML = "Yes";
            document.getElementById("button3").innerHTML = "<button class=\"available\">Available</button>";
        }
}
