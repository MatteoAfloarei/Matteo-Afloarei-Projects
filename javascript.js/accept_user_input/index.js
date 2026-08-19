// 1. easy way = window prompt
// 2. professional way = html textbox
let username;
username = window.prompt("What's your username?");
document.getElementById("mySubmit").onclick = function(){
    username=document.getElementById("myText").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}