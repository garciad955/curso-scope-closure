// variables 

var a; // declarando variable a
var b = 'b'; // declaramos y asignamos
v = 'bb';  // reasignación 
var a = 'aa'; //redeclaración

//Global scope 

var fruit = 'Apple';
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'colombia';  // de esta manera se declara global
    console.log(country);
}

countries();
console.log(country);