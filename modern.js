/* Features of ECMAScript 2015 also known as ES6
1) let vs const vs var
*/
/*var myname="devloper";
console.log(myname);
myname = "leader";
console.log(myname);*/


/*let myname="devloper";
console.log(myname);
myname = "leader";
console.log(myname);*/

// const myname="devloper";
// console.log(myname);
// myname = "leader";
// console.log(myname);  // it causes error because const value cannot be change

// var ==> function scope can be used inside function anywhere
// let and const =>Block scope cnnot be used outside the block


/*function biodata()
{
    var myname="devloper";
console.log(myname);
    if(true)
    {
      var  myLastName = "leader";
       console.log("inner " + myLastName);
       console.log("inner " + myname);
    }
    console.log("outer " + myLastName);
}
biodata();*/


//let
// function biodata()
// {
//     var myname="devloper";
// console.log(myname);
//     if(true)
//     {
//       let  myLastName = "leader";
//        console.log("inner " + myLastName);
//        console.log("inner " + myname);
//     }
//     console.log("outer " + myLastName);// let cannot be called outside the block scope
// }
// biodata();


// Template literals (Template strings)
// JavaScript program to print table for given number (8)?
// output 8*1=8
//        8*2=16
for(let n=1; n<10;n++)

{
    debugger;
    var tableOf=8;
   // console.log(tableOf  + " * " + n + " = " + tableOf*n);
   console.log(`${tableOf} * ${n} = ${tableOf * n}`);
}

for(let number=1; number<10;number++)

{
    debugger;
    var tableOf=9;
   // console.log(tableOf  + " * " + n + " = " + tableOf*n);
   console.log(`${tableOf} * ${number} = ${tableOf * number}`);
}

for(let num=1; num<10;num++)

{
    debugger;
    var tableOf=12;
   // console.log(tableOf  + " * " + n + " = " + tableOf*n);
   console.log(`${tableOf} * ${num} = ${tableOf * num}`);// template string
}


// Default Parameters
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed.
function mult(a,b)
{
    return a*b;
}
console. log(mult(5,2));

function mult(a,b)
{
    return a*b;
}
console. log(mult(5));//NaN

function mult(a,b=3)//b is default parameter
{
    return a*b;
}
console. log(mult(5));//15


// Fat Arror Function
// Normal Way of writing Function
// console. log(sum());
// function sum() {
// let a = 5, b=6;
// let sum = a+b;
// return `the sum of the two number is ${sum}`
// }
// How to convert in into Fat Arrow Function


// const sum = () => {
//     let a = 5, b=6;
// //let sum = a+b;
//  return `the sum of the two number is ${a+b}`;
// }
// console.log(sum());


const sum = () => {
   // let a = 5, b=6;

 return `the sum of the two number is ${(a=4)+(b=5)}`;
}
console.log(sum());