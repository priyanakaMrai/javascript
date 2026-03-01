/*Write a 'while' loop that calculates the sum of all 
numbers from 1 to 5 and stores the result in 
variable name 'sum'.*/
let sum = 0;
let i = 1;
while (i <= 5){
    sum = sum + i; 
    i++;
}
console.log(sum);

// while loop that counts down from 5 to 1 and stores numbers in an array 
let countdown = [];
let j = 5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);
