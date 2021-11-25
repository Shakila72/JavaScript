
// / * Section 9
// Math Object in JavaScript ****/
// The JavaScript Math object allows you to perform mathematical tasks on numbers.



console.log(Math.PI);


//Math. round()
// returns the value of x rounded to its nearest integer


let num = 10.2565;
 console. log(Math. round( num));//10

 //Math.pow()
 //Math.pow(x,y) It returns x to the power of y

 console.log(Math.pow(2,3));
 //same as console.log(2**3);

 //Math.sqrt()
 //Math.sqrt(x) returns the square root of x

 console.log(Math.sqrt(25));
 console.log(Math.sqrt(35));
 console.log(Math.sqrt(64));


 //Math.abs()
 //Math.abs(x) returns the positive value of x

 console.log(Math.abs(-55));
 console.log(Math.abs(-50));
 console.log(Math.abs(-2.5));
 console.log(Math.abs(4-6));

 //Math.ceil()
 //Math.ceil (x) returns the value of x rounded up to nearest integer

 console.log(Math.ceil(4.4));
 console.log(Math.round(4.4));
 console.log(Math.ceil(99.1));
 console.log(Math.round(99.1));

 //Math.floor()
 //Math.floor(x) returns the value of x rounded up to nearest non decimal integer

 console.log(Math.floor(45.4));
 console.log(Math.floor(99.5));
 console.log(Math.floor(66.01));


 //Math.min( ) to find minimum value in arguments

 console.log(Math.min(0,150,30,20,-8,-200));


 //Math.max( ) to find maximum value in arguments

 console.log(Math.max(0,150,30,20,-8,-200));

 //Math.random()
 //Math.random() returns a random number between 0(inclusive) and 1

 console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)); //0 to 9

//Math.trunc()
//Math.trunc() returns the integer part without decimal of a number

console.log(Math.trunc(4.5678));
console.log(Math.trunc(-9.54));

//NOtE
//If argument is a positive number,Math.trunc() is equivalent to Math.floor()
//otherwise Math.trunc() is equal to Math.ceil()



