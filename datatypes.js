console.log("helloooo");
console.log("Krishna");
process.stdout.write("chocolate");
// both code prints the output but console changes line 
// whereas process writes on sameline
process.stdout.write("cream");
console.log("Krishna");

// datatypes
var //placeholder this is old way
let // this is new way

let score=100; //number
let name="priyanka Mangpahang" //string

//objects
let teaTypes=["lemon tea","orange tea"] //array
let user={firtsname:"priya", lastname:"rai"}

let getScore= score;// have to call yet to print

console.log(getScore); // to print

let gameName="firegun";
gameName="watergun"; // changes the value of the before 
console.log(gameName);

//const userName="firegun"; // const don't changes the value it is constant vairable
//userName="watergun";
// console.log(userName);

//operations
let add= 4+5
let sub=9-3
let multi= 2*4
let divi= 10/5
let remainder= 9/2
let expo =2**3

//prefix abd postfix
let myscore =110
myscore++
++myscore

//comparion operation
let num1=2
let num2=2
let num3=3

console.log(num1==num2);
console.log(num1!=num3);

//logical
// && //AND
// || // OR
// ! //Reverse

let isloggedin = true
let ispaid=false
console.log(isloggedin && ispaid);

//assignments
let num=10
num +=5
console.log(num);

//operator precedence
let value = ((2*(3+2))-1);
console.log(score);

//Primitive in JS

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
// console.log(anotherBalance.valueof());

console.log(typeof balance); //number
console.log(typeof anotherBalance); //object

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined
let fname = null;
console.log(fname);
let lname = undefined;
console.log(lname);

//string
let mystring = "hello"
let mystringonen = "Hola"
let username = "priya"

let oldGreet = mystring + " " + "priya"; // output is hello priya
console.log(oldGreet);

let greetMssg = `Hello ${username} !`; // output is Hello priya !
let demoOne = `value is ${2 * 2}`; // output is value is 4
console.log(greetMssg);
console.log(demoOne);

let sm1 = Symbol("fire");
let sm2 = Symbol("water");
console.log(sm1);

//Non-primitive in JS
const uname = {
    "fi name" : "Priyanka",
    isloggedin: true,
};
uname.finame = "Mrs. P";
uname.liname = "Mangpahnag";

console.log(uname["fi name"]);
console.log(uname.liname);
console.log(uname);
console.log(typeof uname);

//Array
let heros = anotheruser = ["Priya", true]
console.log(anotheruser[0]);

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));