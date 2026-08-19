//variable cant be changed
const PI = 3.14;
let radius;
let circumference;

//PI = 420.69; // This will cause an error since PI is a constant


radius = Number(radius);



console.log(circumference);
document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("mySpan").textContent = circumference;
}