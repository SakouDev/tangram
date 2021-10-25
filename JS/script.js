var tangram = document.getElementsByClassName("tangram")[0];
var button_basic = document.getElementsByClassName("button--basic")[0];
var button_cat = document.getElementsByClassName("button--cat")[0];
var button_butterfly = document.getElementsByClassName("button--butterfly")[0];
var button_rabbit = document.getElementsByClassName("button--rabbit")[0];
var button_turtle = document.getElementsByClassName("button--turtle")[0];
var button_mathilde = document.getElementsByClassName("button--mathilde")[0];
var button_myriam = document.getElementsByClassName("button--myriam")[0];
var button_lucf = document.getElementsByClassName("button--lucf")[0];
var button_lucv = document.getElementsByClassName("button--lucv")[0];

button_basic.onclick = function() {
	tangram.className =
    tangram.className.replace(/tangram--(\S*)/,'tangram--basic');
}
button_cat.onclick = function() {
	tangram.className =
    tangram.className.replace(/tangram--(\S*)/,'tangram--cat');
}
button_butterfly.onclick = function() {
	tangram.className =
    tangram.className.replace(/tangram--(\S*)/,'tangram--butterfly');
}
button_rabbit.onclick = function() {
	tangram.className =
    tangram.className.replace(/tangram--(\S*)/,'tangram--rabbit');
}
button_turtle.onclick = function() {
	tangram.className = 
    tangram.className.replace(/tangram--(\S*)/,'tangram--turtle');
}
button_mathilde.onclick = function() {
	tangram.className = 
    tangram.className.replace(/tangram--(\S*)/,'tangram--mathilde');
}
button_myriam.onclick = function() {
	tangram.className = 
    tangram.className.replace(/tangram--(\S*)/,'tangram--myriam');
}
button_lucf.onclick = function() {
	tangram.className = 
    tangram.className.replace(/tangram--(\S*)/,'tangram--lucf');
}
button_lucv.onclick = function() {
	tangram.className = 
    tangram.className.replace(/tangram--(\S*)/,'tangram--lucv');
}

