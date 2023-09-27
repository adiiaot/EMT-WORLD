//LAMP FUNCTION
var btn = document.getElementById("btn");
var light = document.getElementById("light");

function toggleBtn() {
    btn.classList.toggle("active");
    light.classList.toggle("on");
}

//MOBILE MENU TOGGLE FUNCTION
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
}