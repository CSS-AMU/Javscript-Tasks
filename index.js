"use strict";

//1. Ways to print in JavaScript
//console.log("Hello World");
//alert("me");
//document.write("this is document write");

//2. JavaScript console API
//console.warn("this is a warning");
//console.error("this is an error");
//console.clear();
//console.assert(1 == 5);

//3. JavaScript Variables
// Containers to store data values
var number1 = 25;
var number2 = 45;
console.log(number1 + number2);

// 4. Data types in JavaScript
//string
var str1 = "This is a string";
var str2 = "This is also a string";
//objects
var marks = {
  damon: 79,
  elena: 88,
  klaus: 63,
};
console.log(marks);

//Booleans
var a = true;
var b = false;
console.log(a, b);

// Contructor function and prototypes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const person = new Person("Ahwar", 2000);
console.log(person);

console.log(person instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const matilda = new Person("Matilda", 2012);
const jack = new Person("Jack", 1991);

jack.calcAge();
matilda.calcAge();

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jack, matilda);
