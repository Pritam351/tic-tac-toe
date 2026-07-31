// Event
// Mouse event
// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = () => {
// //     console.log("ok");
// //     let a = 25;
// //     a++;
// //     console.log(a);
// // }

// btn1.addEventListener("click",(evt)=>{
//     console.log("button1");
//     // console.log(evt.type);
// });

// btn1.addEventListener("click",(evt)=>{
//     console.log("button2");
//     // console.log(evt.type);
// });
// const handler4 = (evt)=>{
//     console.log("button4");
//     // console.log(evt.type);
// };
// btn1.addEventListener("click", handler4);

// btn1.addEventListener("click",(evt)=>{
//     console.log("button5");
//     // console.log(evt.type);
// });

// btn1.removeEventListener("click",handler4);
//practice qs


let modeBtn = document.querySelector("#btn1");


let curMode = "light";

modeBtn.addEventListener("click",()=>{
    if (curMode === "light"){
        curMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        modeBtn.innerHTML = "Light";
        // document.querySelector("head>title").textContent ="Hello";
        document.title="hi how are you";
    }else{
        curMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.add("dark");
        modeBtn.innerHTML = "Dark";
    }
    console.log(curMode);
});




// let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("you are inside b0ox");
// }

// keyboard events
// From Events
// Print Events

// Event Object (it is a special object) even properties


//.. Even Listner
