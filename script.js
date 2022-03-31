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



const element = createElement("button",{
    class: "btn",
    text : "Submit",
    id:"btn",    
});

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

qs(".container").append(element1);


