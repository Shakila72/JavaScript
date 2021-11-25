console.log(5+20);
//•Assignment operators
// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operator is equal (=)
var x=5;
var y=5;

console.log(x==y);
console.log("is both the x and y are equal or not" + x==y);
//  you when will see in es6
 console.log(`is both the x and y are equal :${x==y}`);


 //Arithmetic operators
 // + - * / are arithmetic operators
 //return a single value
 console.log(3+3);
 console.log(10-3);
 console.log(3*3);
 console.log(3/3);

 //interview question
 console.log("remainder operator "+81%8);
 console.log("remainder operator "+21%2);
 console.log("remainder operator "+33%6);


 //Increment and Decrement operator
//Operator: x++ or ++x
//If used postfix, with operator after operand (for example, x++)
//the increment operator increments and returns  the value before incrementing.

// var num=15;
// var newnum=num++;
// console.log(num); // num incremented pop up
// console.log(newnum);


//If used prefix, with operator before operand (for example, ++x)
//the increment operator increments and returns the value after incrementing.


// var n=15;
// var newn=++n;
// console.log(n);
// console.log(newn);

//decrement
var num=15;
var newnum=num--;
console.log(num); // num incremented pop up
console.log(newnum);

var n=15;
var newn=--n + 5;
console.log(n); // num incremented pop up
console.log(newn);

//Comparison operator
var a=3;
var b=3;
console.log(a==b);
var s=4;
var r=3;
console.log(s!=r);//not equal to
console.log(s>r);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);

// Logical operators
// Logical operators are typically used with Boolean (logical) values;
// when they are, they return a Boolean value.

// var a = 30
// var b - -20,

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of
// operands is true if and only if all of its operands are true.
console.log(a>b && b>0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of
// operands is true if one of its operands are true.
console.log(a>b || b>0);
console.log((a>b) || (b<0) || (b>0));

// Logical NOT (!)
// The logical NOT (!) operator (logical not, negation, complement) for a set of
// operands is true if its operand if false and vice versa.
console.log(!(a>b) || (b<0));
console.log(!false);
console.log(!true);

// String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of the two operand strings.

console.log("23"+"23");

console.log("Hello World");
console.log("Hello "+ "World");

var myname="code";
console.log(myname +" leader");
console.log(myname +" lead");
console.log(myname +" acedemy");
console.log(myname +" with");
console.log(myname +" leet");


// What will be the output of 3**3? ** is exponenetial operator
console.log(3**3); // it consider 3 power 3=27
console.log(10**-1);// 1/10
// What will be the output, when we add a number and a
// string?
console.log(23 + " Leader");//23 Leader it simply concatenate
console.log(23 -" Leader");//NaN
// Write a program to swap two numbers?

var a=5;
var b=10;
b=5;
a=10;
console.log(a);
console.log(b);

// Write a program to swap two numbers without using
// third variable?

var a=5;
var b=10;

var c=b;//c=10
b=a; //b=5
a=c;//a=10

console.log("value of a is " +a);
console.log("value of b is "+b);


//without third variable
var a=5;
var b=10;

//output a=10 b=5
 a=a+b; //a=15
 b=a-b;//b=5
 a=a-b; //a=10
 console.log("value of a is " +a);
 console.log("value of b is "+b);


 //Interview question
 //Difference between == vs ===?
 var num1=5;
 var num2= '5';
  console.log(num1==num2);// double equal to only checks value
  console.log(typeof(num1));
  console.log(typeof(num2));
  console.log(num2);
  console.log(num1===num2);// triple  equal to also checks datatype with value


