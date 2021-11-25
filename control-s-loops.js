// Section 6 Control Statement
//   If Else
// The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy, another statement can be executed.


// For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not:
/*var field =empty;
if (field==empty) {
    // promptUser();
    console.log("please fill the form");
} else {
    // submitForm();
    console.log("form submitted");
}*/

var year=2024;
debugger;
if(year % 4===0)
{
    if(year % 100 ===0)
    {
        if(year % 400===0)
        {
            console.log("The year " + year + " is a leap year");
        }
        else
        {
            console.log("The year " + year + " is not a leap year");
        }
    }
    else
    {
        console.log("The year " + year + " is a leap year");
    }
}
else
{
    console.log("The year " + year + " is not a leap year");
}//How to check is it a leap year or not?


//What is truthy and falsy values in Javascript?
// we have total 5 falsy values in JavaScript.
// 0, "",undefined,nulln NaN, false** are falsy
//if we deal with these values program always move towards else part
if (score =0)
{
    console. log("OH, we loss the game");
}else
{
    console . log( "Yay ,We won the game");

}

/*conditional (ternary ) operator
The conditional (ternary ) operator is the only JavaScript operator that takes three operands*/
//first using if else
var age =19;
if(age>=18)
{
    console.log("you can vote");

}
else{
    console.log("you can't vote");

}

//using ternary operator it is short-hand of if else
 var age=19;
 console.log((age>=18)? "you can vote ": "You can't vote");


 /*switch Statement
Evaluates an expression, matching the expression's value to a
case clause, and executes statements associated with that case.
1st without break statment
Find the Area, triangle and rectangle?*/

var area= "triangle";
const PI=3.14;
var l=5, b=4, r=3;

if(area=="circle")
{
    console.log("area of circle is " + PI*r**2);

}
else if(area=="triangle")
{
    console.log("area of triangle is " + (l*b)/2);

}
else if(area=="rectangle")
{

    console.log("area of rectangle is " + l*b);
}
else{
    console.log("please enter correct choice");
}

//switch statement
//const PI=3.14;
var l=5, b=4, r=3;
switch(area)
{
    case 'circle' :
        console.log("area of circle is " + PI*r**2);
        break;
    case 'triangle':
        console.log("area of triangle is " + (l*b)/2);
        break;
    case 'rectangle':
        console.log("area of rectangle is " + l*b);
        break;

    default:console.log("area of rectangle is " + l*b);

}


// while and do while
var num =0;
while(num<=10)
{
    console.log(num);
    num++;
}

//Do-while loop
var num =20;
do{
    debugger;
    console.log(num);
    num++;
}while(num<=10);

//for loop
for(var i=0; i<10;i++)

{
    debugger;
    console.log(i);
}

//program to print tables of 8,9,12,15 in JavaScript?

for(var n=1; n<10;n++)

{
    debugger;
    var tableOf=8;
    console.log(tableOf  + " * " + n + " = " + tableOf*n);
}


for(var n=1; n<10;n++)

{
    debugger;
    var tableOf=9;
    console.log(tableOf  + " * " + n + " = " + tableOf*n);
}
//12
for(var j=1; j<10;j++)

{
    debugger;
    var tableOf=12;
    console.log(tableOf  + " * " + j + " = " + tableOf*j);
}
//15
for(var j=1; j<10;j++)

{
    debugger;
    var tableOf=15;
    console.log(tableOf  + " * " + j + " = " + tableOf*j);
}

