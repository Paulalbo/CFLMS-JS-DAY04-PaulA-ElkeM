
function showMessage(){
        let firstName = document.getElementsByName("firstname").tagName;
        let lastName = document.getElementsByName("lastname").tagName;
        let yourAge = parseInt(document.getElementsByName("age").value);

        document.getElementById("showfirstname").innerHTML = firstName;
        document.getElementById("showlastname").innerHTML = lastName;
        document.getElementById("showage").innerHTML = yourAge;

        if (firstName.length > 5) {
            document.getElementById("showfirstname").setAttribute("class", "aproved");
        }
        else{
            document.getElementById("showfirstname").setAttribute("class", "denied");
        }
        }
