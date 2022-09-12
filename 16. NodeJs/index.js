/* 
    - type node init in terminal to begin with a node package 
    - to incorpoprate an exteranl package use  
    - find packages here: https://www.npmjs.com/
    - npm install package name
    - example: npm install superheroes
    - this will install the package and add the dependency to the package.json file
    - use require function to include a package
*/

var superhero = require('superheroes');
// the above line of code includes the package superheroes 
for(let i=0; i<20;i++)
console.log(superhero.random());
// we are using an inbuilt method of the package which basically returns a superhero name