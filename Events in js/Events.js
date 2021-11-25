//******************************** */

//   section 11=>     EVENTS in JavaScript


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can
// "react" HTML Events on these events

// An HTML event can be something the browser a user does,

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// or something a user does.
// Often, when events happen, you may want to do something.


//section 1
//  4 ways of writing Events in JavaScript

// 1: using alert();
// 2: By Calling a funcion (We already seen and most common way of writing)
// 3: using Inline events (HTML onclick=
// property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent) (in advance js)




// JavaScript lets you execute code when events are detected.

//HTML allows event handler attributes, with JavaScript code, to be added to html events
//check Events-obj-types HTML file


// section • : What is Event Object?

// Event object is the parent object of the event object.

// for Example
// MouseEvent, focusEvent, KeyboardEvent etc

// section MouseEvent in JavaScript


// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML
// document belongs to the MouseEvent Object.

// section:  KeyboardEvent in JavaScript
// Events that occur when user presses a key on the keyboard,
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// Section: Input Events in JavaScript
// The onchange event occurs when the value of an element has been changed

//For radiobuttons and checkboxes, th onchange events occur when the checked state has been changed


//*********************************************************** */

//Interview question

//Difference between Onclick and addEventListener?

// Conclusion
// This is because addEventListener does not overwrite existing event handlers,
// whereas onclick overrides any existing onclick =
// fn event handlers.
// The other significant difference, of course, is that onclick will always work,
// whereas addEventListener does not work in Internet Explorer before version 9.