var x, y, z;
var homeb = document.getElementById("home-button");
var infob = document.getElementById("info-button");
var htmlb = document.getElementById("html-button");
var cssb = document.getElementById("css-button");
var home = document.getElementById("home");
var info = document.getElementById("info");
var html = document.getElementById("html");
var css = document.getElementById("css");
homeb.addEventListener("mousedown", function(e) {
    home.classList.toggle("home");
    info.classList.toggle("at-info");
    html.classList.toggle("at-html");
    css.classList.toggle("at-css");
});
infob.addEventListener("mousedown", function(e) {
    home.classList.toggle("at-home");
    info.classList.toggle("info");
    html.classList.toggle("at-html");
    css.classList.toggle("at-css");
});
htmlb.addEventListener("mousedown", function(e) {
    home.classList.toggle("at-home");
    info.classList.toggle("at-info");
    html.classList.toggle("html");
    css.classList.toggle("at-css");
});
cssb.addEventListener("mousedown", function(e) {
home.classList.toggle("at-home");
info.classList.toggle("at-info");
html.classList.toggle("at-html");
css.classList.toggle("css");
});
