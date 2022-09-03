// -------------------------
// Arrays and its methods
// -------------------------

var myArray = [1, 2, 3, 4, 5, 6];
console.log("Initial Array: " + myArray);
myArray.shift(); //removes and element from the beginning
console.log("Remove front: " + myArray);
myArray.unshift(9); //adds and element to the beginning
console.log("Add front: " + myArray);
myArray.push(11); //adds an element to the end
console.log("Add last: " + myArray);
myArray.pop(11); //removes an element from the end
console.log("Remove last: " + myArray);

// -------------------------
// Functions
// -------------------------
// Syntax
/*
function functionName(parameters){
    body of the function
}
*/

function addNums(n1, n2) {
    console.log(n1 + n2);
    return n1 * n2; //returns the multiplication of n1 and n2
}
console.log(addNums(2, 5));  // prints the sum first and then prints the multiplication of the nums

// -------------------------
// globals
// -------------------------

var global = 10
function myfun() {
    var global = 5414  // same name as that of global shadows the local variable and changes are made to the global var
    console.log(global);
}
myfun()
console.log(global + " ");

// working with globals
num = 10
function add() {
    num += 4;  // this writes to the value of global variable
}
add()
console.log(num);

//---------------------------------
//  Queue implementation
//---------------------------------
function queue(arr, num) {
    arr.push(num)
    return arr.shift()
}
nums = [1, 2, 3, 4, 5, 4, 6]
console.log("Before: " + JSON.stringify(nums));
console.log("The element from the front is: " + queue(nums, 9));
console.log("After: " + JSON.stringify(nums));

// JSON.stringify(arr) is similar to Arrays.toString(arr) in java

// use == to compare only values 
// the above would return true for 3=="3"
// use === to compare values as well as datatype
// the above would return false for 3=="3"

// ----------------------------------------
// Objects
// ----------------------------------------
// these are just like dictionaries
/*
    syntax
    var obj={
        "property1":"value1",   
        "property2":value2,
        "property3":[value3,value4,....],
    };
*/
//property name can contain spaces them, in that case don't use . notation to access it instead, use bracket notation
var obj = {
    "name": "Casper",
    "age": 19,
    "friends": ["Lucifer", "Jake"],
    "mobile number": 8765783423
};
console.log(obj.name + " " + JSON.stringify(obj.friends) + " " + obj["mobile number"]);

// we can update object values with the follwoing syntax
// obj.property=new value
obj.name = "Mike"
console.log(obj.name);

// we can add new properties in the following manner
obj.hobbies = ["Programming", "Designing", "Book Reading"]
console.log(obj);

/* Output
{
  name: 'Mike',
  age: 19,
  friends: [ 'Lucifer', 'Jake' ],
  'mobile number': 8765783423,
  hobbies: [ 'Programming', 'Designing', 'Book Reading' ]
}
*/

// to delete a property use delete keyword followed by a obj.property statement
delete obj["mobile number"]
console.log(obj.hobbies[0]);

/* Output
{
  name: 'Mike',
  age: 19,
  friends: [ 'Lucifer', 'Jake' ],
  hobbies: [ 'Programming', 'Designing', 'Book Reading' ]
}
*/

// use obj.hasOwnProperty(propertyName) to check whether a property exists for an object or not


// --------------------------------------
// Nesting of objects
// --------------------------------------
var obj1 = {
    name: 'Mike',
    age: 19,
    friends: {
        "friend1": "Lucifer",
        "friend2": "mike",
        "friend3": "John"
    }
};
console.log(obj1.friends.friend2);

//   fancy way of js to copy an object
var myObjectCopy = JSON.parse(JSON.stringify(obj1));
console.log(JSON.stringify(myObjectCopy));

// Lets create a function which manipulates an object
var records = {
    '1': {
        "name": "Lovely",
        "age": 19,
        "friends": ['Om', 'Ankit'],
        'Mobile Number': 8765783423,
        "hobbies": ['Programming', 'Designing', 'Book Reading']
    },
    '2': {
        "name": "Omprakash",
        "age": 20,
        "friends": ['Rohan', 'Lovely'],
        'Mobile Number': 132456,
        "hobbies": ['Programming', 'Designing']
    },
    '3': {
        "name": "Ritesh",
        "age": 23,
        "friends": ['Piyush', 'Lalit'],
        'Mobile Number': 456891324,
        "hobbies": ['Football', 'Singing', 'Book Reading']
    }
}

var copyOfObject = JSON.parse(JSON.stringify(records));
function manipulateObject(id, prop, val) {
    records[id].prop = val
    return records
}
console.log("Before object manipulation: "+" "+JSON.stringify(copyOfObject));
console.log("After object manipulation: "+" "+JSON.stringify(manipulateObject(2,"age","24")));

// -----------------------------------
// Random numbers
// -----------------------------------
console.log(Math.random()); //This generates a random number between 0 and 1(excluding)
console.log(Math.floor(Math.random(10)*20)); //This generates a random number between 0 and 20(excluding)


// Variable declaration
/*
    We can declare vars using 
    1) var keyword
    2) let keyword
    3) const keyword
    -> the advantage of let over var is that it doesn't allow duplicate variable declaration
    -> the scope of var remains throughout the program whereas the scope of let remains inside the block in which it is declared
    -> const is declared once only and cannot be reassigned

    mainly use cosnt and let, because it's a good practice to do so
*/

// ---------------------------------------
// Object Mutation
// ---------------------------------------
// If we don't want to change or manipulate object values we can use Object.freeze(obj) method to prevent obejct manipulation
// If we declare an object as const it will still be manipulated
const MATH_CONSTANT={
    PI:3.14,
    e:2.71
}
// MATH_CONSTANT.PI=99;    // This will update the value of pi to 99
Object.freeze(MATH_CONSTANT)    // if this was written before this would have prevented the object mutation 
console.log(MATH_CONSTANT.PI);


// ---------------------------------------
// Exception Handling
// ---------------------------------------
/*
 * Syntax
    try{
        //code
    }catch(Exception){
        //code
    }
 */

try {
    MATH_CONSTANT.PI=99;  
} catch (error) {
    console.log(error);
}

// Anonymous Functions
// An anonymous functions does not have a name 
// This functions are concise way of writing functions which has single and short purpose
/*
    Syntax
    1) 1st way
        var variableName = function(){
            return something;
        }
    2) 2nd way
        const variableName = (parameteres if any) => something;  //this is called as an arrow function 
*/
const resultArray=(arr1,arr2)=>  arr1.concat(arr2);
let newArray=resultArray([2,3,4,5],[5,6,7,8]);
console.log(JSON.stringify(newArray));
// Output [ 2, 3, 4, 5, 5, 6, 7, 8]

// Variable arguments to a function
const sum = function(...arr) {return arr.reduce((a,b) => a+b,0)}
console.log(sum(4,5,6));

// creating copy of array
let arr=[1,2,3,4,5]
// arr[0]=10
let arr2=arr // this creates a shallow copy of array means if we change any content of arr it will reflect in arr2 also
console.log(arr2);
// instead use spread operator
arr2=[...arr]
arr[0]=10
console.log(arr2);

// --------------------------------------
// Strings, formatting and slicing
// --------------------------------------
const myname='Lovely'
const myString= `This string is formatted by ${myname}`
console.log(myString);

console.log(myname.slice(0,4));     // similar to java substring

console.log(myname.toUpperCase())   // to change the string to uppercase similarly you can do with the lowercase method



// ----------------------------------
//          Tasks
// ----------------------------------

// Task 1
// Create a function which prints the number of years months and days (other info too) of a person has lived based on age
function calculateAge(userAge){
    console.log("You have lived for "+userAge*12+ " months until now");
    console.log("You have lived for "+userAge*365+ " days until now");
    console.log("You have lived for "+userAge*365*24+ " hours until now");
    console.log("You have lived for "+userAge*365*24*60+ " minutes until now");
    console.log("You have lived for "+userAge*365*24*60*60+ " seconds until now");
}
calculateAge(21);


// Task 2
// Create a function to calculate the BMI of a user
function calculateBMI(weight,height) {
    return weight/Math.pow(height,2);
}
console.log("Your BMI is: "+calculateBMI(62,1.79));