console.log('Loaded!');

// change the text of the main-text
var element = document.getElementById("main-text");

element.innerHTML = "New value";

// move image

var image = document.getElementById("madi");
image.onclick = function(){
    image.style.marginLeft = "100px";
}