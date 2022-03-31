export function hello(opt){
    return opt;
}

export function qs(selector, parent=document){
    return parent.querySelector(selector);
}

export function qsa(selector, parent=document){
    return [...parent.querySelectorAll(selector)];
}

export function createElement(type, options={}){
    const element = document.createElement(type);
    Object.entries(options).forEach(([key,value]) => {
        if(key === "class"){
            element.classList.add(value)
            return
        }

        if(key === "text"){
            element.textContent=value
            return;
        }
        if(key  === "events"){
            Object.entries(value).forEach(([datakey,datavalue]) => {
                element.addEventListener(datavalue, function(){
                    value.fun()
                })
            })
            return
        }

        element.setAttribute(key, value);
    })
    return element;
}


