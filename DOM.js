// DOM manipulation practice

// let heading = document.querySelector("h4");
// heading.style.backgroundColor = "purple";
// heading.style.color = "white";

// let div = document.getElementById("first");
// // div.innerText="THIS IS NEW TEXT";
// div.innerHTML="<i>ITALIC TEXT</i>";
// div.style.textAlign="center";
// div.style.fontSize="50px";
// div.style.backgroundColor="red";
// heading.setAttribute("class","headingnew");
// console.log(div.getAttribute("id"));

//ADDING NEW ELEMENTS practice

// creating new element
// let el = document.createElement("h1");
// el.innerHTML="<i><u>This is new heading</u></i>";
// el.style.color="blue";

// let body = document.querySelector("body");
// body.prepend(el);
// body.append(el);
// div.before(el);
// div.prepend(el);
// div.after(el);

// Q1. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna Collegestudents” to this text using JS./
let heading = document.querySelector("h2");
heading.innerText = `${heading.innerText} from apna college students`;

// Q2. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
divs[0].innerText= "New Text 1";
divs[1].innerText= "New Text 2";
divs[2].innerText= "New Text 3";

// Q3.  Create a new button element. Give it a text “click me” background color of red & text color of white.
// Insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText="Click Me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";

let newBody = document.querySelector("body");
newBody.prepend(newBtn);


// Q4. - Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element
// Did you notice, how you overwrite the class name when you add a new one?Solve this problem using classList.

let pg = document.querySelector("p");
// pg.setAttribute("class","newClass");
pg.classList.add("newClass");