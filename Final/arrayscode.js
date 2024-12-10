//Function to add pizzas baked
function updateChefStats()
{
    //Get number of new pizzas
    var newPizzas = parseInt(document.getElementById("numPizzas").value);
    //Get the number of old pizzas
    var oldPizzas = parseInt(document.getElementById("spnTotalPizzas").textContent);

    console.log("newPizzas" + newPizzas);
    console.log("oldPizzas" + oldPizzas);
    
    //Add old and new pizzas together
    var totalPizzas = newPizzas + oldPizzas;

    //Update pizza counter with new value
    document.getElementById("spnTotalPizzas").textContent = totalPizzas;

    //This variabe will track the level of the chef based on how many pizzas they have baked
    var chefLevel = "";

    //Add some decision logic to check for the pizza chef level
    //If more than 500 pizzas baked
    if(totalPizzas > 500)
    {
        chefLevel = "Master Chef";
    }
    //If more than 300 pizzas baked
    else if(totalPizzas > 300)
    {
        chefLevel = "Expert Chef";
    }
    //If more than 100 pizzas baked
    else if (totalPizzas > 100)
    {
        chefLevel = "Skilled Chef";
    }
    //If nothing above, do this
    else
    {
        chefLevel = "Beginner Chef";
    }

    document.getElementById("spnLevel").textContent = chefLevel;
}

//create some toppings variabls
/*
var topping1 = "Pepperoni";
var topping2 = "Mushrooms";
var topping3 = "Olives";
var topping4 = "Sausages";
var topping5 = "Ham";
var topping6 = "Anchovies";
var topping7 = "Pineapple";
var topping8 = "Cinnamon";
*/

//document.getElementById("spnToppings").innerHTML = topping1 + ", " + topping2; goes on you get the point

//The array version
var arrToppings = ["Pepperoni", "Mushrooms", "Olives", "Sausages", "Ham", "Anchovies", "Pineapple", "Cinnamon"];

//Print out the toppings in the array using a loop
//When looping through an array, start off with the counter = 0
//Keep looking until the counter == the number of elements in the array
//Increase the counter by 1 each time the loop runs to work with each element in the array
for (var i = 0; i < arrToppings.length; i++)
{
    document.getElementById("spnToppings").innerHTML += arrToppings[i] + ", ";
}