$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
let mainWall = document.getElementById("landing-wall");
mainWall.onload = function () {
    this.style.transition = "all";
    this.style.animation
}