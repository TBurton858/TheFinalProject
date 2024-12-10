//To define a class in JavaScript, use the keyword class
//Use a capital letter for you class name to help other developers know this is a class
//Class is like a blueprint when building a house - it is a plan
class Animal
{
    //Define the constructor (this lets us set up a class fairly easily)
    constructor(name, species, sound)
        {
            //Take the values passed in the constructor and we magically assign them to the class
            this.name = name; //name of teh animal
            this.species = species; //species of the animal
            this.sound = sound; //sound the animal makes
            //There are many properties we could set up
        }

        //Methods are the things the class can do, or how you can change the values of the properties
        //Typically, the properties will each have get/set methods
        //Get - what the current value of the property
        //Set - change the value of the property

        //This method will return a string with the animal info
        describe()
        {
            console.log(this.name + " is a " + this.species + " that makes a " + this.sound + " sound.")
        }

        makeSound()
        {
            console.log(this.name + " says " + this.sound)
        }
}

//Set up a few objects
//Objects are the houses built from a blueprint

var dog = new Animal("Xylon", "Dog", "Woof");

//Create a cat object based on Animal class
var cat1 = new Animal("Patches", "Cat", "Meow");

var cat2 = new Animal("Jette", "Cat", "Meow")

//Get the info on the dog
dog.describe();
cat1.describe();
cat2.describe();

//Call make sound method for each class
dog.makeSound();
cat1.makeSound();
cat2.makeSound();