/* Delcare an array named 'flowers' that contains the strings 
'"lilly"', '"tulip"' and '"lotus"'. 
Acess the first element of the array and store it in varibles 
named 'bloom' */

let flowers = ["lilly","tulip","lotus"]
const bloom = flowers[0]
console.log(bloom); // output is lotus as array is count from 0 

//Acess the 2nd element in the array and store it in variable named 'fragnance'
const fragnance = flowers[2]
console.log(fragnance);

//Change the 1st element of array to 'rose'
flowers[1] = "rose"
console.log(flowers); //output is ['lilly','rose','lotus']

//Add '"poppies"' to array using `push` method
flowers.push("poppies")
console.log(flowers);

//Remove last element of array using `pop` method and store it in `fragnance`
const grow = flowers.pop();
console.log(grow);

//Create a soft copy of this array name
let food = ["Rice","biryani","paanipuri"]
let softcopyfood = food;
food.pop();
console.log(softcopyfood);
console.log(food);

//Create a hard copy of this array name
let color = ["red","green","blue"];
let hardcopycolor = [...color];
// let hardcopyfood = color.slice();
color.pop();
console.log(hardcopycolor);

//merge these two arrays into a new arrray 
let Fname = ["priyanka","Subina"];
let Mname = ["Fred","Alex"];
let Names = Fname.concat(Mname);
console.log(Names);

//length of array and store it in variable name
let products = ["Lipstick","Lipliner","Liptint","Lipgloss"];
let itemlength = products.length;
console.log(itemlength);