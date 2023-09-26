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
});
infob.addEventListener("mousedown", function(e) {
    info.classList.toggle("info");
});
htmlb.addEventListener("mousedown", function(e) {
    html.classList.toggle("html");
});
cssb.addEventListener("mousedown", function(e) {
    css.classList.toggle("css");
});
