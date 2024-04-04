
let btn = document.querySelector("#btn");

let state = "light";

    btn.addEventListener("click",()=>{
        if(state==="light"){
            state = "dark";
            document.querySelector("body").style.backgroundColor="white";
            
        }
        else{
            state = "light";
            document.querySelector("body").style.backgroundColor="black";   
        }

      console.log(state);  
  });
 

