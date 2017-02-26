console.log('Loaded!');

// change the text of the main-text
var element = document.getElementById("main-text");

element.innerHTML = "New value";

// move image

var image = document.getElementById("madi");

var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
} 
image.onclick = function(){
    var interval = setInterval(moveRight, 50);
};