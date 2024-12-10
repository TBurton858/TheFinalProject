function checkPalindrome(wordToTest)
{
    //Remove all spaces in the string that is passed
    var cleanedWord = wordToTest.replace(/\s/g, "").toLowerCase();

    /*Alternatively - 
    var cleanedWord = wordToTest.replace(/\s/g, "");
    cleanedWord = cleanedWord.toLowerCase
    */

    //Take our cleaned word with non spaces and all lower case and reverse it
    var reversedWord = cleanedWord.split("").reverse().join("");

    //If the clearned and reversed words are the same, the function returns true
    //If they are different, the function returns false
    return cleanedWord == reversedWord;
}

console.log("radar = " + checkPalindrome("radar"));
console.log("tag = " + checkPalindrome("tag"));
console.log("A man a plan a canal Panama = " + checkPalindrome("A man a plan a canal Panama"));

//bContinue will track if the user wants to keep entering words
var bContinue = true;

//loop to keep running the code for as long as the user wants
do
{
    //get a word from teh user
    var userInput = prompt("Enter a word to test if it is a palindrome: ");

    //test the variable the user entered
    var isPalindrome = checkPalindrome(userInput);

    //show the user a message based on the true/false value returned from the function
    //if isPalindrome is true, the if statement will run
    if(isPalindrome)//same as isPalindrome == true
    {
        alert(userInput + " is a palindrome!");
    }
    else
    {
        alert(userInput + " is not a palindrome!");
    }

    //ask the user if they want to continue testing palindromes
    var answer = prompt("Do you want to continue? (y/n)");

    if(answer.toLowerCase() == "n")
    {
        bContinue = false;
    }
}
while(bContinue);//While bContinue is true, keep running the loop