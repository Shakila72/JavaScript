/********************************** */
//         strings in JavaScript
//JavaSCript string is zero or more characters written in single or double quotes

//JavaScript strings are use for storing and manipulating text

//Strings acan be created as primitives
//from string literals, or as objects, using the string constructor

let myName="developer";
let mychName='code leader';
let ytName= new String ("lead developer");//string constructor not required write simply without constructor

console.log(myName);
console.log(ytName);

//Length of string
//string.length
console.log(myName.length);

//Escape character
let sentence=" we are Pakistani \" people\" from south asia.";
console.log(sentence);

let senten=" we are Pakistani 'people' from south asia.";
console.log(senten);


//****************************************** */
//Finding string in a string
// string.indexOf(searchValue [, fromIndex])
//here indexOf ( ) method retrun the index of from first occurrence of specified text in the string
//indexOf return -1 if search value not found

const myData= "lead developer from code leader yt";
console.log(myData.indexOf("code"));
//Javascript string count starts from zero
const mydata= "lead developer from code leader yt";
console.log(mydata.indexOf("e", 13));//forward search


// string.lastIndexOf(searchValue [, fromIndex])
//here lastIndexOf( ) method retrun the index ofof from last occurrence  specified text in the string//indexOf return -1 if not found

const mybdata= "lead developer from code leader yt";
console.log(mybdata.lastIndexOf("e", 13));//backword search

//Seacrhing for a string in a string
//String.search(regex)
//search() method searches a string for a specifies value and return its position
//search() method cannot take a second start position argument

let sdata=mydata.search("leader");
console.log(mydata);
console.log(sdata);

//******************************************* */
//              Extracting string parts

//three ways
//1)slice(start,end)
//slice extract the part of string and return the extracted part in a new string
//takes two parameters start and end position(end not included)

var str="apple, banana, kiwi";
let r=str.slice(0,4);//starts from zero index  a character and ends at e character but does not include last character e in output string
//but original array does not change
let resp=str.slice(7,-2);// subtract 2 from end and print all other fron 7
let re=str.slice(7);//it print all strings after 7 index including 7
console.log(r);
console.log(resp);
console.log(re);

//Q:Display 280 characters of string like used in Twitter?

let myTweet=" Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur volu Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos ";

let myActtweet=myTweet.slice(0,280) //0-279=280
console.log(myActtweet);
console.log(myActtweet.length);

//2)substring(start, end)
//similar to slice () method but it cannot accept negative string

let sub=str.substring(0, 4);
console.log(sub);
let substr=str.substring(8, -2);//it consider -2 as 0 position and start from it and ends on 8 position
console.log(substr);




//3)substr(start, length)
//substr is similar to slice()

//The difference is that the second parameter specifies the length of extracted part.

let s=str.substr(0, 4);
console.log(s);

let stri=str.substr(8, -2);//no output
console.log(stri);
let str2=str.substr(-4);//display last four character
console.log(str2);

//******************************************* */
//             Replacing string content

//string.replace(searchFor,replaceWith);
//It replaces the specifies string with another string

let data=" code lead from lead developer";

let replaceData=data.replace('lead', 'Lead');//only changes first match data
console.log(data);
console.log(replaceData);

//Points to remember
//1: replace() method does not change the string it returns the new string
//By default, replace ()  method replaces the only first match string
//replace()  method is case sensitive

//************************************ */
//           Extracting string characters
//three ways for Extracting string characters
//1.charAt(position)
// 2.charCodeAt(position)
// 3.Property access [ ]


//1.charAt(position) return the character ata a specified index(position) in a string

let st="HELLO WORLD";
console.log(st.charAt(0));
console.log(st.charAt(3));
console.log(st.charAt(6));
console.log(st.charAt(8));



// 2.charCodeAt(position)
// The charCodeAt() Method
// The charCodeAt() method returns the unicode of the
// character at a specified index in a string:
// The method returns a UT F-16 code
// (an integer between and 65535).


// The Unicode Standard provides a unique number for every
// character, no matter the platform, device, application,
// or language. UTF-8 is a popular Unicode encoding which
// has 88-bit code units.

console.log(st.charCodeAt(0));

//****************** */
// Q: Return the unicode os last character in the string?

let str4="HELLO WORLD";
let lastChar =str4.length-1;
console.log(lastChar);
console.log(str4.charCodeAt(lastChar));


//Property Access
//ECMAScript 5 (2009) allows property access [ ] on strings

console.log(str4[0]);
console.log(str4[1]);
console.log(str4[2]);

//****************************************** */
//          OTHER USEFUL METHOD

let myname="developer";
let mychname='code leader';
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());


//The concate() method
//concate() join two or more strings

console.log(mychname + myname);
console.log(`${mychname} ${myname}`);//template literals in ECMAScript 2015/ ES6
console.log(myname.concat(mychname));
console.log(myname.concat(" ", mychname));


//******************************* */
//         String. trim()


// The trim() method removes whitespace from both sides of a string
var st1 ="    Hello World!      "
console.log(st1.trim());


// Converting a String to an Array
// A stlring can be converted to an array with the split() met

var txt="a,b ,c, | d ,e"; // String

console.log(txt . split("  , ")) ;               // Split on commas
console. log( txt.split ("  "));                  // Split on spaces
console.log( txt . split (" | " )) ;            // Split on pipe


