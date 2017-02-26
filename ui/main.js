
// move image

var image = document.getElementById("madi");
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    image.style.marginLeft = marginLeft + 'px';
} 
image.onclick = function(){
    var interval = setInterval(moveRight, 50);
};

// Counter

var button = document.getElementById("counter");
button.onclick = function(){
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            // Take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    // make a request
    request.open('GET','http://vijaysai005.imad.hasura-app.io/counter', true);
    request.send(null);
};
