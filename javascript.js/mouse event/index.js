// eventlister = listen for specific events to create interactive web pages
//               events: click, mouseover, mouseout
//                  .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
myBox.addEventListener("click", function(event){
     event.target.style.backgroundColor = "tomato";
     event.target.textContent = "OUCH! 😢"
});

myBox.addEventListener("mouseover", function(event){
     event.target.style.backgroundColor = "yellow";
     event.target.textContent = "Don't do it 😮"
});

myBox.addEventListener("mouseout", function(event){
     event.target.style.backgroundColor = "lightgreen";
     event.target.textContent = "Click me 😊";
})