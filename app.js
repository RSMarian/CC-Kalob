// STRING MANIPULATION

/*
var sentenceNode = document.getElementById("sentence");
var sentence = sentenceNode.innerHTML;

var upperSentence = sentence.toUpperCase();
var lowerSentence = sentence.toLowerCase();
var firstTenChars = sentence.substring(10);

var allWords = sentence.split(" ");
var bracketWords = "(" + allWords.join(")(") + ")";
sentenceNode.innerHTML = bracketWords;

var firstThreeWords = allWords.slice(0,3);
var middleWords = allWords.slice(5,10)
var makeSentence = middleWords.join(" ")

sentenceNode.innerText = makeSentence;
*/

// USER INPUT

/*
var name = prompt("What is your name?");
var h3Node = document.getElementById("customInput");
h3Node.innerText = name;
var welcomeNode = document.getElementById("welcome");
if(name.toLowerCase() == "maren") {
    welcomeNode.innerText = "Welcome to your website, Maren!";
}

PRACTICE

var age = prompt("What is your age?")
var explicitNode = document.getElementById("explicit");

if(age < 18) {
    alert("GO HOME KID!!!")
} else {
    alert("This website contains explicit material. Are you sure you want to enter?")
}
*/


// MINI Project 2

/*
var urlInput = prompt("Enter URL:");

if(urlInput.substr(0, 4) != "http") {
    console.warn("Incorrect URL")
    urlInput = "http://" + urlInput
};

var spanNode = document.getElementById("link");
spanNode.innerHTML = urlInput;
*/

/*
Handling Special Cases

var name = "Larys"

if(name == "Maren") {
    console.log("henlo maren")
} else if(name == "Larys") {
    console.log("henlo larys")
} else {
    console.warn("You're not supposed to be here")
}
*/

/*
var familyMember = "Maren"

switch(familyMember) {
    case "Maren":
        console.log("hi maren")
        break;
    case "Larys":
        console.log("hi larys")
        break;
    default:
        console.warn("You're not supposed to be here")
}
*/


// PRACTICE

/*
var foods = "Baklava"

if(foods == "Croissant") {
    console.log("Bon appetit!");
} else if(foods == "Pasta") {
    console.log("Buon appetito");
} else if(foods == "Sarmale") {
    console.warn("Be careful! This product leads to addiction");
} else {
    console.error("?????????????? ???????????????!");
}
great success
*/

// BOOLEAN  LOGIC

/*
var isDog = false;

if(isDog) {
    console.log("hi doggo")
} else {
    console.log("this ain't no doggo")
}
*/


// var petName = prompt("Enter your pet's name")

// if(petName.toLowerCase() == "jax") {
//     var jax = true;
// } else {
//     var jax = false;
// }

//Logic based on variable isDoggo

/*
if(isDoggo) {
    alert("HENLO DOGGO FAN")
} else {
    alert("Who's dog is this?")
}

// if isDoggo is false
if(!isDoggo) { }

if(isDoggo != false) {
    // false block to execute
}
*/

/*
if(!isDoggo) {
    //the most used way
    // it says "if it is NOT a doggo, execute {this}"
}
*/

// !!!! IMPORTANT !!!!
// "TRUE" and "FALSE" can also be represented as "1" and "0"


//BOOLEAN PRACTICE

/*
var gen = prompt("What is your favourite music genre?");

if(gen.toLowerCase() == "hiphop") {
    var trueG = true;
} else {
    var trueG = false;
}

if(trueG) {
    alert("YOYOYO");
} else {
    alert ("GTFO");
}
*/

/*
var age = prompt("Enter your age")

if(age >= 18){
    var major = true;
} else {
    var major = false;
}

if(major) {
    alert("Welcome");
} else {
    alert("Go home kid");
}
*/

//VARIABLE CASTING

/*
var names = "Marcus";
var names = Array(names);
console.log(names, typeof(names));

var age = 22;
var age = String(age);
console.log(age, typeof(age));

var boolean = "true";
var boolean = Boolean(boolean);
console.log(boolean, typeof(boolean));
*/


//COMPARISON OPERATORS

/*
== - equal to
!= - not equal
!== - not equal value or not equal type
>= - greater than or equal to
> -greater than
< - lesser than
<= - lesser than or equal to
=== - STRICT EQUAL (equal value and type)

var age = "18";
if(age == 18) {
    console.log("You can get a drivers license!")
}

var course = "css course"
if(course != "js course"){
    console.log("You're in the wrong course!")
}

var doggo = "true";
doggo = Boolean(doggo);
if(doggo == true){
    console.log("hi doggo");
}

var age = 19;
if(age == "19") {
    console.log("Data and data type matched!")
} else {
    console.warn("Wrong data/data type!")
}

var age = 19;
age = String(age);
if(age === "19") {
    console.log("Data and data type matched!");
} else {
    console.warn("Wrong data/data type!");
}
*/


//MINI PROJECT 3

// 1. Ask the user for a number
// 2. Cast the input to a Number
// 3. Make sure the number is valid
// 4. If the number is over (or equal to) 18, change some text on the page

/*
var age = prompt("What is your age?");
age = Number(age);

var welcome = document.getElementById("welcome")

if(age && age >= 18) {
    welcome.innerHTML = "You can vote. Choose wisely!"
} else {
    welcome.innerHTML = "You still have a few years to go."
}
great success
*/
