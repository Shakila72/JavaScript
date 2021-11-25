//***********************************************
 //          Arrays in JavaScript
 //*********************************************
 //storing multiple values in one variable
 // we have arrray class in Javascript and array is prototype of this class

// let classA=['a','b','c','d'];
// console.log(classA);
// //console.log(classA.lenght());

// console.log(classA)


// var myskills=['excel','seo','c','c++','html','css','javascript',true, 90,'female'];
// //Dislpaying elements

var myskills=['excel','seo','c','c++','html','css','javascript'];
console.log(myskills[1]);
console.log(myskills[0]);
console.log(myskills[2]);
console.log(myskills[3]);
console.log(myskills[4]);

//check lenght
console.log(myskills.length);// length is a property length is 7 arrays size is 6 0-6
//accessing last element
console.log(myskills[myskills.length-1]);
//we use loop to navigate
for (var i=0;i<myskills.length;i++)
{
    console.log(myskills[i]);
}

// After ES6 we have for in and for of loops too


var myskills=['excel','seo','c','c++','html','css','javascript'];
 //for in loop
for(let key in myskills)
{
    console.log(key);// for in display index numbers
}

//for of loop


for(let elements of myskills)
{
    console.log(elements);// for of display elements of array
}

//Array.prototype.forEach()
//call function for each element in the array
myskills.forEach(function(element,index,array)
{
    console.log(element + " index : " + index + " " + array);
});

//fat arrow function

myskills.forEach((element,index,array) => {
    console.log(element + " index : " + index );
});


let classA=['a','b','c','d'];
console.log(classA);
console.log(classA.length);
let classB=[3,5,6,2,1,4,5,9];
console.log(classB);
console.log(classB.length);
console.log(classB[classB.length-1]);


