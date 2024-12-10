//A recursive function is a function that calls itself - this mimics a loop

function sumTo(number)
{
    //condition to exit the loop
    if (number == 1)
    {
        return 1;
    }
    else
    {
        //if the number is more than 1, the function will keep calling itself
        return number + sumTo(number - 1);
    }

}

//let's say our number is 5, and we want to add all of the numbers that make up 5 together
//5 + 4 + 3 + 2 + 1 = 15

console.log("Sum of numbers from 1 to 5: " + sumTo(5));