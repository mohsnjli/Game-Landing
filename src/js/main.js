$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#mostDownloaded").load("mostDownloaded.html");
});
let mainWall = document.getElementById("landing-wall");
mainWall.onload = function () {
    this.style.transition = "all";
    this.style.animation
}