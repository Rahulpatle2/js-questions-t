// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.


// let username = prompt("Enter Your Name");
// let age = prompt("Enter Your age");


// let massage = console.log(`Hello ${username}, you are ${age} years old.`)


//6- Accept two numbers from user and swap their values

// let a = 12;
// let b = 34;
// let temp;
//  temp = a;
//  a = b;
//  b = temp;

//  console.log(a,b)

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b)


//8- Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// let principalAmount = +prompt("Enter principle amount");
// let rateOfInterest = +prompt("Enter rate of interest");
// let numberOfCompound = +prompt("Enter number of compound");
// let timeInYears = +prompt("Enter number of Years");

// let totalAmount = principalAmount*(1 + (rateOfInterest/numberOfCompound))**(numberOfCompound*timeInYears)

// console.log(totalAmount)

// let compoundInterst = totalAmount - principalAmount;

// console.log(compoundInterst)


//13- Accept the gender from the user as char and print the respective greeting message
// Ex - Good Morning Sir (on the basis of gender)


// let gender = prompt("Enter your Gender Male or Female");

// if(gender === "Male"){
//     console.log("Hello Good Morning Sir!");
// }else if(gender === "Female"){
//     console.log("Hello Good morning Mam!");
// }else{
//     console.log("please enter Male or Female")
// }

//15- Accept an integer and check whether it is an even number or odd.

// let num = +prompt("Enter your Number");

// if(num % 2 == 0){
//     console.log("integer is even")
// }else{
//     console.log("integer is odd");
// }


// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//       Vaid - Hello Shery, You are a valid voter.
//       Invalid - Sorry Shery, you can't cast the vote.

// let name = prompt("Enter Your name");
// let age = +prompt("Enter Your Age");

// if(age >= 18){
//     console.log(`Hello ${name}, You are a valid voter you can vote after ${18 - age} years`);
// }else{
//     console.log(`Sorry ${name}, you can't cast the vote. you can vote after ${18 - age} years`)
// }

//17- Accept a day number between 1-7 and print the corresponding dayname.

// let num = +prompt("Enter any number from 1 to 7")

// if(num == 1){
//     console.log("sunday");
// }else if(num == 2){
//     console.log("monday");
// }else if(num == 3){
//     console.log("tuesday");
// }else if(num == 4){
//     console.log("wednusday");
// }else if(num == 5){
//     console.log("thusday")
// }else if(num == 6){
//     console.log("friday");
// }else if(num == 7){
//     console.log("satureday");
// }else{
//     console.log("INVAlAD NUMBER");
// }


//18- Accept three numbers and print the greatest among them

// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Second Number"); 
// let num3 = +prompt("Enter Third Number");

// if (num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is greater`);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is greater`);
// } else {
//     console.log(`${num3} is greater`); 
// }

// let alphabet = prompt("Enter any English alphabet");

// if(alphabet == "a"||alphabet == "e"||alphabet == "i"||alphabet == "o"||alphabet == "u"||alphabet == "A"||alphabet == "E"||alphabet == "I"||alphabet == "O"||alphabet == "U"){
//     console.log(`"the alphabet ${alphabet} is a vowel"`)
// }else{
//     console.log(`"the alphabet ${alphabet} is a consonant"`)
// }

//23- Accept an integer and Print hello world n times

// let n = +prompt('Enter a num');
// let n = 10;

// for(let i = 1; i <= n;i++){
//     console.log("hello World");
// }

//24- Print natural number up to n. 


// let n = 5;

// for(i = 1; i <= n; i++){
//     console.log(i);
// }

//25- Reverse for loop. Print n to 1.

// let n = 5;

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }


// 26- Take a number as input and print its table
//        5 * 1 = 5
//        5 * 2 = 10 ... up to 10 terms


// let n = +prompt("Enter any number");

// for(let i = 1;i <= 10; i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }


//27- Sum up to n terms.

// let n = +prompt("Enter Your number");

// let sum = 0;

// for(let i = 0; i <= n; i++){
//     sum += i;
    
    
// }

// console.log(sum);


//28- Factorial of a number

// let n = 10;

// let res = 1;

// for(let i = n; i >= 1; i--){
//     console.log(i);
//     res *= i;

// }

// console.log(res);


//29- Print the sum of all even & odd numbers in a range seperately

// let range = 10;
// let sum = 0;


// //loop for even sum
// for(let i = 1; i <= range; i++){
//     if(i%2 == 0){
//         sum += i;
//     }
// }

// console.log(sum);

// sum = 0;

// //loop for odd sum
// for(let i = 1; i <= range; i++){
//     if(i%2 != 0){
//         sum += i;
//     }
// }

// console.log(sum);

//30- Print all the factors of a number.

// let num = 35;

// for(let i = 1; i <= num; i++){
//     if(num%i == 0){
//         console.log(i)
//     }
// }

//31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43

// let num = 50;

// let sum = 0;

// for(let i = 1; i < num;i++){
//     if(num%2 == 0){
//         sum += i;
//     }
// }

// console.log(sum);

//32- Check if the number is Prime or not.

let num = 35;

for(let i = 2; i < num; i++){
    // if(num%i != 0){
    //     console.log(num + " is  a prime number");
        
    //    }
    

   if(num%i == 0){
    console.log(num + " is not a prime number");
    break;
   }

   
    
}

