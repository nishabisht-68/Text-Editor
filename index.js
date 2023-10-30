const textarea = document.getElementById("textarea");

function f1(e){
    let value = e.value;
    textarea.style.fontSize = value + "px";

}

function f2(e){
    if(textarea.style.fontWeight == "bold"){
        textarea.style.fontWeight = "normal"
    }else{
        textarea.style.fontWeight = "bold"
    }
}

function f3(e){
    if(textarea.style.fontStyle == "italic"){
        textarea.style.fontStyle = ""
    }else{
        textarea.style.fontStyle = "italic"
    }
}
function f4(e){
    if(textarea.style.textDecoration == "underline"){
        textarea.style.textDecoration = ""
    }else{
        textarea.style.textDecoration = "underline"
    }
}
function f5(e){
    if(textarea.style.textAlign == "left"){
        textarea.style.textAlign = ""
    }else{
        textarea.style.textAlign = "left"
    }
}
function f6(e){
    if(textarea.style.textAlign == "center"){
        textarea.style.textAlign = ""
    }else{
        textarea.style.textAlign = "center"
    }
}
function f7(e){
    if(textarea.style.textAlign == "right"){
        textarea.style.textAlign = ""
    }else{
        textarea.style.textAlign = "right"
    }
}
function f8(e){
    if(textarea.style.textTransform == "uppercase"){
        textarea.style.textTransform = "lowercase"
    }else{
        textarea.style.textTransform = "uppercase"
    }
}
function f9(e){
    if(textarea.style.textDecoration == "line-through"){
        textarea.style.textDecoration = ""
    }else{
        textarea.style.textDecoration = "line-through"
    }
}
function f10(e){
 let value = e.value;
 textarea.style.color = value;
}
