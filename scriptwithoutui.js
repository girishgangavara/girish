function render(child){
    const main=document.getElementById("main")
    main.appendChild(child)
}

function createHi(child){
    const element=document.createElement("h1")
    element.appendChild(child)
    return element
}

function text(context){
    return document.createTextNode(context)
}

render(createHi(text("UI Text Without React")))