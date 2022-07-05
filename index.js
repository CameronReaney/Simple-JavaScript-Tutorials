// we use JS to implement berhaviour into a website
// The code bellow Logs in console "Hello World"
console.log('Hello World');

// variables - used to store data temporarily
// a varibale in JS cannot be a reserved keyword such as let
// a variable cannot start with a number
// cannot contain a space or hyphen (-)
let fName=  "Cameron";
let sName=  "Reaney";

console.log("My name is" , fName, sName)

// constants 
// THE VALUE OF A CONSTANT CANNOT CHANGE

// using a variable to define intrestRate allows the value to be chanegd to 1
let interstRate = 0.3;
interstRate = 1;
console.log(interstRate)
// using a constant to define intrestRate does not allow the vaue to be chanegd to 1
const constinterstRate = 0.3;
interestRate = 1;
console.log(constinterstRate)

//Primative Types
let name = 'cameron' // known as a String Literal
let age = 17; // known as a number literal
let isApproved = true; // Boolean Literal - Can be true and false (these are reserved keywords)
let selectedColor = null; // clearing the value of a variable

// dynamic typing 
// dynamic languages mean the type of a variable can be changed during runtime
// you can check the data type of a variable in the console by using typeof and then the name of the variable
 console.log(typeof isApproved) // is a boolean data type
 console.log(typeof selectedColor) // is an object

// Objects
// an object is a way to deal with multiple related varaibes and store them together
// object literals are defined by using { }
let person = {
    pName: 'Cameron', //  these are called propertys
    pAge: 17

};

// accessing propertys of an object:

// dot notation
person.pName = 'Cam'
console.log(person.pName)
// bracket notation
let selection = window.prompt("Enter The value you want to fetch")
person[selection] = 'Noremac';
alert(person.selection)

// Arrays
// [ ] are used to enitialise an array
let selectedColors = ['blue','orange'];
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
console.log(selectedColors.length);
// changing values in array
selectedColors[2] = 'red';
console.log(selectedColors[2]);
console.log(selectedColors.length);

// Functions
// a set of statements that preforms a task
// functions are initialized by using "function"
function greet(){
    //body of function
    console.log('This is a function')
    console.log('1','2','3','4')
}

greet();

// inputs in functions
function greetName(name, lastName){
    //body of function
    console.log('Hello ' + name + ' ' + lastName)
}
// cam is an argument to the greetName function
// name is a pramiter to the greetName function

greetName('Cam', 'rean');
