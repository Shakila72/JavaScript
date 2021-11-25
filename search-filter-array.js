//searching and filter in array

//Array.prototype.indexOf()  it searches the element from 0th index
//while finding element in array if nothing will matches our search -1 will be returned



var myskills=['excel','seo','c','c++','html','css','c','javascript'];
console.log(myskills.indexOf('html'));
console.log(myskills.indexOf('c++', 3));

// Array. prototype. last Index()f()
// Returns the last (greatest) index of an element within the array equal
// to an element, or -1 if none is found. It search the element last to first

console.log(myskills.lastIndexOf('c'));

//Array.prototype.includes()
//Determines whether the array contains a value
//returning true or false as appropriate
console.log(myskills.includes('seo'));
console.log(myskills.includes('excel',3));//start searching from 3rd index

// Array. prototype. find()
// arr.find(callback(element[, index[, thisArg])
// Returns the found element in the array, if some element in the
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element
const prices=[200,250,300,350,400,450,500];
//price>400 search
const findElem=prices.find((currVal) =>
{
    return currVal<400;
});

console.log(findElem);

console.log(prices.find((current_val) => current_val>400));// short hand method of fat arrow function
//if condition not satisfied in find
console.log(prices.find((current_val) => current_val>1400));//undefined

//Array.prototype.findIndex()
//return the index of element if present in array otherwisde return -1
console.log(prices.findIndex((current_val) => current_val>400));

//if findIndex not saisfied
console.log(prices.findIndex((current_val) => current_val>1400));//-1

// Array. prototype. filter()
// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.

const newPriceTag=prices.filter((elem, index)=>
{
    return elem<400;
});
console.log(newPriceTag);//return new filtered array

const newPrice=prices.filter((element, index)=>
{
    return element>1400;
});
console.log(newPrice);


// Array Subsection 3 How to sort an Array

// Array. prototype.sort()  this sort method only works with strings
// The sort() method sorts the elements of an array in place and
// returns the sorted array. The default sort order is ascending, built
// upon converting the elements into strings,
// then comparing their sequences of UT F-16 code units values.

    const months =['March', 'Jan', 'Feb','Dec', 'Nov'];
    console.log(months.sort());//sort according to abc sequence
    const array1=[1,400,3,220,4000,4568];
    console.log(array1.sort());


// However, if numbers are sorted as strings,
// "25" is bigger tlhan "100" ,
// because "2" is bigger than "1" .
// Because of this, the sort() method will produce an incorrect
// result when sorting numbers.


//sort and then reverse
const arr=[3,5,1,2,6,7,0];
//reverse
console.log("Reversed array : " + arr.reverse());
console.log( "Sorted and then Reversed array : " + arr.sort().reverse());


//find vs filter =>search
const array2 = [5, 12, 8, 130, 44];

const found = array2.find(element => element > 10);

console.log(found);
// expected output: 12
//find method only return first match value  does not return more than one value

//to get complete set of numbers matching our crieteria


const f = array2.findIndex((elem,index,arr) => {
    console.log(`${elem} , index no ${index} and ${arr}`);
    return elem>12;
});

console.log(f);

//filter

const fo = array2.filter(element => element > 10);

console.log(fo);