//function validate the user input
function validateForm()
{
    //set up nickname to our form values
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var zip = document.getElementById("zip").value;

    //new string that is full name
    var fullName = firstName + " " + lastName;

    console.log("first name = " + firstName);
    console.log("last name = " + lastName);
    console.log("zipCode = " + zip);
    console.log("full name = " + fullName);

    if (fullName.length > 20 || fullName.length == 1)
    {
        document.getElementById("logInStatus").innerHTML = "Please be valid name"
        //alert("Enter valid name");
    }
    else if (zip.length != 5)
    {
        document.getElementById("logInStatus").innerHTML = "Please be valid zip"
        //alert("Enter valid zipCode");
    }
    else
    {
        document.getElementById("logInStatus").innerHTML = "Welcome, " + fullName + ". Secret word."
        //alert("Welcome, " + fullName + ". Secret word.")
    }

    //don't want page to submit to server page, prevent from happening
    return false;
}