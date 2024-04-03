// Q) Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str){
    count=0;
    for(let char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
           count++;
        }
    }
    console.log("No. of Vowels :",count);
}
countVowels("Helloo");

// Q) Create an arrow function to perform the same task

let countVow = (str)=>{
    count=0;
    for(let char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
           count++;
        }
    }
    console.log("No. of Vowels :",count);
}
countVow("Durga");

// Q) For a given array of numbers, print the square of each value using the forEach loop.

let arr = [2,3,4,5,6];

let newArr = arr.forEach((val)=>{
    console.log(val*val);
}
);
// Q) We are given array of marks of students. Filter our of the marks of students that scored 90+

let marks = [65,92,93,54,89,98];

let topStudents = marks.filter((val)=>{
     return val>90;
});

console.log(topStudents);

// Q) Take a number n as input from user. Create an array of numbers from 1 to n
//  Use the reduce method to calculate sum of all numbers in the array
// Use the reduce method to calculate product of all numbers in the array.
let n = prompt( "Enter a number: ");
let numArr = [];
 for(let i =1 ; i<=n ; i++){
    numArr[i-1]=i
 }

 console.log(numArr);
 let sum=0;
 numArr.reduce((prev,curr)=>{
     sum=prev+curr;
     return sum;
 });
 console.log("Sum of numbers in array :",sum);

let product=1;
 numArr.reduce((prev,curr)=>{
     product=prev*curr;
     return product;
 });
console.log("product of numbers in array: ",product);
