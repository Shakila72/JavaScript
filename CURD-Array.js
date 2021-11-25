// Array Subsection 4
// Perform CRUD(create read update delete )
// Array. prototype. push()
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array.
const animals= ['chikens', 'goats', 'sheep'];
console.log(animals);

//push () add elemt one or more to the end of array
//push return the new
animals.push('hen');
console.log(animals);

animals.push('cow','coock');
console.log(animals);

// Array. prototype. unshift()
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.


animals.unshift('cat','cow');
console.log(animals);

//2nd example
const myNumber=[1,2,3,5];
console.log(myNumber);
myNumber.unshift(4,6)
console.log(myNumber);

// Array. prototype.pop()
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.


const plants= ['broccoli', 'cauliflower' ,'kale', 'tomato',' cabbage'];
console. log(plants);
console. log(plants . pop( ) ) ;//it pop out the last element
console. log(plants);

// Array. prototype.shift()
// The shift() method removes the first element from an array and returns
// that element. This method changes the length of the array.

const plant= ['broccoli', 'cauliflower' ,'kale', 'tomato',' cabbage'];
console. log(plant);
console. log(plants. shift( ) ) ;//it pop out the last element
console. log(plant);



//questions

// solve using only one method

const months=['Jan', 'march','April','June', 'July'];

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.
//splice(indexNumber,element-to-delete, string-to-add);

// Q1: Add Dec at the end of an array?
const newMonths=months.splice(months.length,0,"Dec");
console.log(months);

// Q2: What is the return value of splice method?
console.log(newMonths);//splice method mostly used for deleting element from array we are not deleting anything so it gives empty array


// Q3: update march to March (update)?

const indexOf=months.indexOf("march");

if(indexOf !=-1)
    {

        const updateMonth=months.splice(indexOf,1,"March");
        console.log(months);
        console.log(updateMonth);//empty array
    }
    else{
        console.log('No such data found');
    }





// Q4: Delete June from an array?

const index=months.indexOf("June");

if(index !=-1)
    {

        const update=months.splice(index,1);
        console.log(months);
        console.log(update);
    }
//****************************************************************
//                      Map() Reduce()
//***************************************************************
    // Array Subsection 4
    // Map and Reduce Method
    // Array. prototype.map()

    // let newArray= arr.map(callback(currentvalue[, index[, array]] )
    // // return element for newArray, after executing something
    // } [ , thisArg]);
    // Returns a new array containing the results of calling a
    // function on every element in this array.

    const array = [1, 4, 9, 16, 25];

    //It returns new array without mutating the original array
    //fiind num>9
    let newArr=array.map((currelem,index,array)=>{
        return currelem>9;

    });
    console.log(array);
    console.log(newArr);
    let narr=array.map((curelm,index,array)=>
    {
        return` Idex no = ${index} and the value is ${curelm} belong to ${array}`
    });
    console.log(narr);


    let narrfor=array.forEach((curelm,index,array)=>
    {
        return` Idex no = ${index} and the value is ${curelm} belong to ${array}`
    });
    console.log(narrfor);//undefined

// Q1: Find the square root of each element in an array?

let arr1 =[25, 36, 49, 64, 81];

let arrval=arr1.map((curelmen)=>
    {

        return curelmen;
    });
    console.log("Elements : " + arrval);

let arrsqr=arr1.map((curelment)=>  Math.sqrt(curelment) );//predefined Math.sqrt
    console.log("Squareoot : " + arrsqr);

// Q2:Multiply each element by 2 and return only those elements
// which are greater than 10?

let arr2=[2,3,4,6,8];
//we use chaining too
let arr3=arr2.map((curelement)=>
{
 return curelement*2;
}).filter((currelement)=>
{
        return currelement >10;

}).reduce((accumulator,element, index, arr2)=>
{
    return accumulator += element;

});

console.log("Elements greater than 10");
console.log(arr3);

//*********************************** */
//             Reduce()
//is used to flatten an array means to convert 2d or 3d array to single dimension array
//when we need single value like total percentage
//Reduce function take four arguments
//Accumulator (data addition)
//cuurent value
// current Index
//Source array

let array2=[1,3,4,5];
let sum=array2.reduce((accumulator,element)=>
{
    return accumulator += element;

});

console.log(sum);

//multily
//let array2=[1,3,4,5];
let mul=array2.reduce((accumulator,elemen)=>
{
    debugger;
    return accumulator *= elemen;

});

console.log(mul);

//adding initial value in arrAY
let a=[4,5,6];
let sum1=a.reduce((accumulator,elem)=>
{
    debugger;
    return accumulator += elem;

},7);//7 is initial value

console.log(sum1);//22 7+4+5+6


// How to fatten an array
// converting 2d and 3d array into one dimensional array


const arr5 =[
    ['zone _ 1',' zone _ 2 ' ]
    ['zone _ 3', 'zone _4'],
    ['zone_5', 'zone_6'],
    ['zone _ 7',['zone_8','zone_9'] ]
        ];

        let flatarr=arr5.reduce((accum, curelem2)=>
        {
            return accum.concat(curelem2);//accum.concat(elem2);
        })
        console.log(flatarr);//have to check it