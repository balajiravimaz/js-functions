// script.js
import { hello,qs,qsa,createElement } from './dom.js';

// // const user = new User("Kyle", 26)
// printName(user)
// // User has the name Kyle
// printAge(user)
// // Kyle is 26 years old




function callBack(){
    console.log("it works");
}


const element1 = createElement("button",{
    class: "btn",
    text : "Submit2",
    id:"btn",    
    events:{
        event : "click", 
        fun : callBack
    },
    name: "name"
});



function deleteElement(e){
    console.log(e.parentElement.remove());
}

qs(".btn").addEventListener("click",()=>{
    const name = createElement("input", {
        type : "text",
        name:"name",
        placeholder : "Enter your name"
    });
    const email = createElement("input", {
        type : "email",
        name:"email",
        placeholder : "Enter your email"
    });
    const div = createElement("div", {
        class : "wrap"
    });
    const btn = createElement("button", {
        text : "X",
        class : "delete",
        events: {
            event:"click",
            fun: deleteElement
        }
    });
    qs(".group").append(div);
    div.append(name);
    div.append(email);
    div.append(btn);
})



