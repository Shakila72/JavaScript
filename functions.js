/*Section 5
Functions in JavaScript
A JavaScript function is a block of code designed to perform a particular task.
• Function Definition
Before we use a function, we need to define it.
A function definition (also called a function declaration, or function statement)
consists of the function keyword, followed by:
The name of the function.
A list of parameters enclosed in parentheses and separated by the comma (..,..), function definitions are enclosed in curly brackets{...}*/

function sum()
{
    var a=10;
    var b=20;
    var total=a+b;
    console.log(total);

}

//calling a function means executing the function
//calling
sum();

//diff bet function parameter and function aurguments?

function add(a,b)// a,b are parameters
{

    var totalsum=a+b;
    console.log(totalsum);

}

add(20,50);// 20 ,50 are arguments
add(50,70);
//function expressions

function add(a,b)// a,b are parameters
{
    return totalsum=a+b;

}
var a=add(20,50);
console.log("the sum of two numbers is " + a);

//Anonymous function which has no name

var fun=function (a,b)
{
    return totalsum=a+b;

}
console.log(fun(20,50));

//****************************************************************************
//                            Modern JavaScript
//**************************************************************************** */


