"use strict"; // treat all JS code as newer version

// variables

const accountId =11221
let accountEmail = "Tejveer001@gmail.com"
var accountpass = "12345"
let accountCity = "meerut"

// console.log(typeof accountId);//number
// console.log(typeof undefined)//undefined
// console.log(typeof null) //object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Primitive data type (CallbyValue)
// 7 types : String , Number , Boolean , Null , undefiend,  symbol ,  BigInt



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Conversion Operation

let score  = 33
// console.log(typeof score)

let strToNumber =Number(score)
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

const id = Symbol('123')  //Symbol gives us a unique value
const anotherId = Symbol('123')
// console.log(typeof id);
// console.log(id === anotherId)//false

// const bigNumber = 328848384n
// console.log(typeof bigNumber)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Non-primitive (referencebyValue)
// Array, Objects , Functions

const heros = ["ironman", "spiderman" , "thor" , "hukl"];
// console.log(heros);

let myObj = {
    name: "tejveer",
    age: 22
};
// console.log(myObj);

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// typeof operators

// undefiend : "undefined"
// null : "object"
// boolean : "boolean"
// number : "number"
// string : "string"
// function : "function" || "object function "

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap(Non premitive)

let myName = "tejveerSingh";

let anotherName = myName
anotherName = "ghost"// it will provide the copy from the refrence

// console .log(myName);
// console.log(anotherName);

let userOne = {
    email : "user@google.com" , 
    name : "tejveer"
}

let userTwo = userOne ;

userTwo.email = "tejveer@google.com"; // it will take the reference form the original value

// console.log(userOne.email);
// console.log(userTwo);

