//Dom - Document Object Model
// console.log(window);
// console.log(window.document);

// console.log(document.body);
// console.dir(document.body);

// .......Dynamic change in dom> manupulation

// document.body.childNodes[1].innerText ="abcd"


//selecting element with id

// let button = document.getElementById("myid"); //h1
// console.dir(button);


// //selecting element with class
// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(heading);

//selecting with tag

// let parhas = document.getElementsByTagName("p");
// console.dir(parhas);

//....query selector(id/class/tag all pass)

// let firstElement = document.querySelector("p");// for first elements
// console.dir(firstElement);

// let allElement = document.querySelectorAll("p");// for all elements
// console.dir(allElement);

//.. elelment properties get change return

//inner html/text  set

// let heading = document.querySelector("h1");

//text content same as innertext but show hidden Element

// let heading = document.querySelector("h1");


// practice qs 1

// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + " From Apna College";

// //practice qs 2

// let clas = document.querySelectorAll(".box");
 
// let idx = 1;
// for (let cls of clas){
//     cls.innerText = `new value  ${idx}`
//     idx++;
// }


// part 2

// get attributes
// let div = document.querySelector("div");
// console.log(div); 

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

//set attribute
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

//style chnage  node
// let div = document.querySelector("div");

// div.style.fontSize= "25px";

// div.innerText = "hello";

//insert Elements
//create El
// let newBtn = document.createElement("Button");

// newBtn.innerText = "click me!";
// console.log(newBtn);

//insert Button
//insert button at the end
// let div = document.querySelector("div");
// div.append(newBtn);


// let div = document.querySelector("div");
// div.prepend(newBtn);

//node outside just before
// let div = document.querySelector("div");
// div.before(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am Mad!</i>"

// document.querySelector("body").prepend(newHeading);

// //Remove element
// let para = document.querySelector("p");
// para.remove();

// let h1 =document.querySelector("h1");
// h1.remove();

//practice qs
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);

//qs2

// let para = document.querySelector("p");

// para.classList.add("newClass");