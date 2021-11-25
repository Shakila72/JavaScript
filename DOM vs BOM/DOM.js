//****************** */
//DOM(document object model) in JavaScript
//Window VS DOM
//WINDOW
// 1: Window is the main container or we can say the
// global Object and any operations related to entire
// browser window can be a part of window object.
// 2: All the members like objects, methods or properties.
// If they are the part of window object then we do not
// refer the window object.
// 3:Window has methods, properties and object. ex
// setTimeout() or setlnterval() are the methods, where as document is the object of the window
//and it also has a screen object with properties describing the physical display



// we have doubt like we have seen the methods
// object of the global object that is window. But What about
// properties of the Window Object
// so example of window object properties are
// innerHeight,
// innerwidth and there are many more
// let's see some practical in DOM HTML file


// document
// 1: whereas the DOM is the child of window
// object
// 2: Where in the DOM we need to refer the
// document, if we want to use the document
// object, methods or properties
// 3: Document is just the object of the global
// object that is Window, which deals with
// the document, the HTML elements
// themselves.



//****************************************** */
//         DOM VS BOM
// The DOM is the Document Object Model, which deals with the document,
// the HTML elements themselves, e.g. document and all traversal you
// would do in it, events, etc.
// For Ex:
// change the background color to red
// document. body. style. background = "red ,
// The BOM is the Browser Object Model, which deals with browser components
// aside from the document, like history, location, navigator and screen
// (as well as some others that vary by browser). OR
// In simple meaning all the Window operations which comes under BOM are performed
// usign BOM



// Let's see more practical on History object
// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user.


alert(location.href); //show curent url
if(confirm("want to visit Teespring?"))
{
    location.href="https://www.teespring.com";// redirect the browser to another url
}


// Section =>: Navigate through the DOM

// 1:document . document Element
// returns the Element that is the root element of the document.

// 2:document. head
// 3:document . body
// 4:document. body. childNodes (include tab, enter and whiteSpace)
// list of the direct children only
// 5:document.children (without text nodes, only regular Elements)
// 6:document . childNodes . length

//work in BOM type code in console of browser

// *****************Practice Time

// How to check whether an element has child nodes or not?
// we will use hasChildNodes()
//do work in console of browser


// *********************Practice Time

// How to find the child in DOM tree
// firstChild vs firstElementChild
// tastChild vs last ElementChitd
// document . body . first ElementChild ;
// const data
// undefined
//data=document.body
//data.firstElementChild
//data.firstElementChild.firstElementChild
//data.firstElementChild.firstElementChild.style.color="red"



// vs
// document. querySelector( " . child-two"). style. color = "yellow" ;
// How to find the Parent Nodes
// document . body . parentNode
// document . body . parentElement
// How to find or access the siblings
// document . body . nextSibling
// document . body . nextElementSibling
// document . body . previousSibl ing
// document . body . previousElementSibling

//******************** */

//how to search the elements and references?

//**************************** */
//******Interview Question

// Difference Between getElementById And querySelector?

// What is getElementById()?
// Syntax:
// element=document.getElementById(id);
// Returns a reference to the element by its ID.

// If the element with the specified ID is not in the document,
// it will returns null.

// What is querySe1ector()?
// Syntax:
// element= document.querySe1ector(selectors);

// Returns the first element within the document
// that matches the specified group of selectors,
// or null if no matches are found.

//For example
//interview elevs quer.html file