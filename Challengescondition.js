//checking if a number is greater than another number
let num1 = 5;
let num2 = 8;
console.log("I like food");
//if condition is false then no output
if(num1 > num2){
    console.log("num1 is greater than num2");
}
console.log("I ate rice")
// condition is true then gives output
if(num1 < num2){
    console.log("num1 is greater than num2");
}else{
    console.log("I ate rice")
}
// checking if a string is equal to another string
let uname = "flower";
let anotheruname = "flower";
// equal to 
if(uname == anotheruname){
    console.log("Pick another uname");
}else{
    console.log("you can pick this uname")
}

if(uname != anotheruname){
    console.log("Pick another uname");
}else{
    console.log("you can pick this uname")
}

//checking if a variable is a number or not
let score = 22
if (typeof score === 'number'){
    console.log("Yep, this is a number");
}else{
    console.log("No that is not a number");
}

//checking if a boolean value is true of false
let aaglagadi = false;
if (aaglagadi){
    console.log("Fire");
}else{
    console.log("No Fire");
}

//checking if an array is empty or not
let item = ["item1"];
console.log(item.length);

if (item.length === 0){
    console.log("empty");
}else{
    console.log("Not empty");
}