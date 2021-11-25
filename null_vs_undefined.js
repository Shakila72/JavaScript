//Interview Questions
var y = null;
console.log (y);
console.log(typeof(y));
// 2nd bug in JavaScript
var x;
console.log(x); // value not defined
console.log(typeof(x));
//NaN not-a-number
var myphonenumber = 03454565757;
var myname= "code leader";
console.log(myphonenumber);
console.log(myname);
console.log(isNaN(myphonenumber));
console.log(isNaN(myname));
//checking validation
if(isNaN(myphonenumber))
{
    console.log("Its valid number");

}
if(isNaN(myname))
{
    console.log("Please enter valid number");

}
//challange
NaN===NaN;
Number.NaN===NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);

console.log(NaN===NaN);// false

console.log(Number.NaN===NaN);//false
console.log(isNaN(NaN));//true
console.log(isNaN(Number.NaN));//true
console.log(Number.isNaN(NaN));//true