
// variables
"use strict"; // treat all JS code as newer version

//Primitive data type (CallbyValue)
// 7 types : String , Number , Boolean , Null , undefiend,  symbol ,  BigInt

// const accountId =11221
// let accountEmail = "Tejveer001@gmail.com"
// var accountpass = "12345"
// let accountCity = "meerut"

// console.log(typeof accountId);//number
// console.log(typeof undefined)//undefined
// console.log(typeof null) //object

//Conversion Operation

// let score  = 33
// console.log(typeof score)

// let strToNumber =Number(score)
// console.log(typeof strToNumber)
// console.log(strToNumber)

// console.log('1' + 2);
// console.log('1' + (2 + 2));
// console.log(1 + 2 + '2' + 2);
// console.log(1 + 2 + '2');

// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true

//the reason is that an equality check == and comparison <> >= <= work differently.
//comparison convert null to a number, trating it as 0.
//that's why null >=0 is true and null > 0 is false.

// console.log(undefined == 0) //false
// console.log(undefined < 0) //false
// console.log(undefined >= 0) //false

// const id = Symbol('123') , Symbol gives us a unique value
// const anotherId = Symbol('123')
// console.log(id === anotherId)//false

// const bigNumber = 328848384n
// console.log(typeof bigNumber)

// Non-primitive (referencebyValue)
// Array, Objects , Functions

const heros = ["ironman", "spiderman" , "thor" , "hukl"];
console.log(heros);

let myObj = {
    name: "tejveer",
    age: 22
};
console.log(myObj);

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// typeof operators

// undefiend : "undefined"
// null : "object"
// boolean : "boolean"
// number : "number"
// string : "string"
// function : "function"