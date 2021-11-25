//JavaScript Date objects represent a single moment in time in a platform-independent format.
//Date objects contain a number that represent milliseconds since 1 JAnuary 1970 UTC.

//4 ways to creat Date objects

// new Date();
// new Date(year, month, day, hours, minutes, seconds,milliseconds)
 //it take seven aurguments
// new Date (milliseconds)
// new Date(date String)


//new Date()
//Date objects are created with new Date() constructor


let currDate=new Date();//Date ibject provides both date and time
console.log(currDate);//2021-09-21T19:20:41.857Z //at run time

console.log(new Date()); //2021-09-21T19:20:41.867Z date and time at run time
 console.log(new Date().toLocaleString()); //9/22/2021, 12:20:41 AM
 console.log(new Date().toString());//Wed Sep 22 2021 00:20:41 GMT+0500 (Pakistan Standard Time)

 //Date.now();
 //returns the numeric current time with milliseconds starting from January 1 1970 00:00:00 UTC

 console.log(Date.now());
 //Wed Sep 22 2021 00:24:30 GMT+0500 (Pakistan Standard Time)
// 1632252270267  (miliseconds)

// 7 argument function
/*new Date(year, month,...)
    7 numbers specify year, month, day, hour, minute,
    and millisecond (in that order)
    Note: JavaScript counts months from 0 to 11.

    January is 0. December is 11.*/

    var r=new Date(2021,5)// month argument is compulsory
    console.log(r.toLocaleString());
    var s=new Date()// month argument is compulsory
    console.log(s.toLocaleString());

    var d = new Date(2021, 9, 22, 12,28,50)
    console.log(d.toLocaleString());//10/22/2021, 12:28:50 PM //perfect time

    //new Date (dateString);
    //new Date (dateString)// creats a new date object using a date string

    var date=new Date("September 22, 2021 12:41:00");
    console.log(date.toLocaleString());

    //new Date(milliseconds) creat a new Date object from zero time plus milliseconds


    console.log(Date.now()); //1632253504729  (milliseconds)

    var a=new Date(0); //1/1/1970, 5:00:
    var b= new Date(1632253504729);
    var c=new Date(86400000*2);
    console.log(a.toLocaleString());
    console.log(b.toLocaleString());
    console.log(c.toLocaleString());

    //****************************************** */
    //              Date Methods

    const curDate= new Date();
    // how to get individual date

    console.log(curDate.toLocaleString());
    console.log(curDate.getFullYear());
    console.log(curDate.getMonth()); //0-11 jan to dec
    console.log(curDate.getDate());
    console.log(curDate.getDay());

    //how to set individual date
   //output will be in milliseconds
    console.log(curDate.setFullYear(2022));
    //setFullYear () method can optionaly set month and date
    console.log(curDate.setFullYear(2022, 10,5));
    console.log(curDate.setMonth(6));
    console.log(curDate.setDate(5));
    console.log(curDate.toLocaleString());


//****************************************** */
 //            Time Methods
 //****************************************** */

const curTime= new Date();
//how to get the indivisual Time
console. log( curTime . getTime( ) ) ;//1632254636664
// The get Time() method returns the number of milliseconds sice January 1, 1970

console. log( curTime . getHours( ) ) ;
// The getHours() method returns the hours of a date as a num
console. log( curTime . getMinutes( ) ) ;
console . log( curTime . getSeconds( ) ) ;
console. log( curTime . getMilliseconds( ) ) ;


//set methods for time

let currTime= new Date();
//how to get the indivisual Time
//console. log( currTime . setTime( ) ) ;//1632254636664
// The setTime() method returns the number of milliseconds sice January 1, 1970

console. log( currTime . setHours( 5) ) ;
// The setHours() method returns the hours of a date as a num
console. log( currTime .setMinutes( 5) ) ;
console . log( currTime . setSeconds(5 ) ) ;
console. log( currTime . setMilliseconds( 5) ) ;



//   Practice time
// only time
new Date().toLocaleTimeString();
//---- only date
new Date().toLocaleDateString();
//----
//date and time 

new Date().toLocaleString();