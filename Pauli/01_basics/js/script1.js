
function showMessage(){
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let yourAge = parseInt(document.getElementById("age").value);

        document.getElementById("showresult").innerHTML = "Hi <strong>" + firstName + " " + lastName + "</strong> you are <strong>" + yourAge + "</strong> years old";



if (firstName.length > 3) {
            document.getElementById("firstname").setAttribute("class", "aproved");
        }
        else{
            document.getElementById("firstname").setAttribute("class", "denied");
        }

if (lastName.length > 3) {
            document.getElementById("lastname").setAttribute("class", "aproved");
        }
        else{
            document.getElementById("lastname").setAttribute("class", "denied");
        }




if (document.getElementById('profession1').checked) {
  it = document.getElementById('profession1').value;
}

if (document.getElementById('profession2').checked) {
  hospitality = document.getElementById('profession2').value;
}

if (it == "it") {
            document.getElementById("bodyid").setAttribute("class", "it");
        }

if (hospitality == "hospitality") {
            document.getElementById("bodyid").setAttribute("class", "hospitality");
        }




}
