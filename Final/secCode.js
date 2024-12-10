//Variables, all of which are strings
var firstName = "Thomas"
var lastName = "Burton"
var zipcode = "00000"

    //This function makes two prompts. First the variable which will be what is put in the promt. This is then followed by what the display is. After the propts, run checkName function.
    function getName()
    {
        firstName = prompt("Please enter your first name: ")
        lastName = prompt("Please enter your last name: ")

        checkName()
    }

    //Safe thing as getName, but only one propt being zipcode. This is then followed by checkZip.
    function getZip()
    {
        zipcode = prompt("Please enter your zipcode: ")

        checkZip()
    }

    //This function adds the length of firstname and lastname. If it is greater than 20, run a display propt before running the getName function. If it is 20 or less, run the getZip function.
    function checkName()
    {
        if (firstName.length + lastName.length > 20)
        {
            alert("Name to long")

            getName()
        }
        else
        {
            getZip()
        }
    }

    //If zipcode.length is 5, run display. If it is not, run a display propt before running getZip function.
    function checkZip()
    {
        if (zipcode.length == 5)
        {
            display()
        }
        else
        {
            alert("Not a zip")

            getZip()
        }
    }

    //When ran, display the texts name, zip, and message with its corresponding values.
    function display()
    {
        document.getElementById("name").innerHTML = firstName + " " + lastName
        document.getElementById("zip").innerHTML = zipcode
        document.getElementById("message").innerHTML = "This is a message."
    }