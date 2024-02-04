// Creating objects
/*const profile = {
    userName : "Durgaaaaa",
    posts : 195,
    followers: 569000,
    following : 4,
    isFollow : false,
};*/

// let num = prompt("Enter a number :");
// if(num%5===0){
//     console.log(num,"is a multiple of 5");
// }
// else{
//     console.log(num,"is not a multiple of 5");
// }

let score = prompt("Enter your score");

if(score>=80 && score<=100){
    console.log("Your grade is A");
}
else if(score>=70 && score<=89){
    console.log("Your Grade is B");
}
else if(score>=60 && score<=69){
    console.log("Your Grade is C");
}
else if (score>=50  && score <=59){
    console.log("Your Grade is D") ;
}
else if(score>=0 && score<=49){
    console.log("Your grade is F");
}