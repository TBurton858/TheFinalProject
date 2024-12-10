var arrEmployees = 
[
    ['John Doe', 'HR', 'Generalist'],
    ['Jane Smith', 'Sales', 'Lead Generator'],
    ['Emily Davis', 'IT', 'Network kAdministrator'],
    ['Fred Jones', 'Management', 'Ceo']
];

//function to build the data and the 
function displayData()
{
    //Create the pointer/nickname/shortcut to the HTML table element
    var table = document.getElementById("tblData");

    //Loop through the 2-d arrEmployees
    for (var i = 0; i < arrEmployees.length; i++)
    {
        //Set up a variable to hold the employee info array
        var employee = arrEmployees[i];

        //Build the table row
        var row = document.createElement("tr");

        //Nested loop to build the columns / table data
        for (var j = 0; j < employee.length; j++)
        {
            //Create a column/table data for each piece of information about our employee
            var column = document.createElement("td");
            //Add the piece of information to the td
            column.textContent = employee[j];

            //need to add this new column to the table row created in the outer loop
            row.appendChild(column);
        }

        //Add this new row with the 3 columns of information to the table
        table.appendChild(row);
    }
}

//Call the function to display the data
displayData();