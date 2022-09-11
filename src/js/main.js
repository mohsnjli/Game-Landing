$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#navBar").load("socialNav.html");
});


const newspaperSpinning = [{
        transform: 'scale(0)',
        opacity: "0",
    },
    {
        transform: 'scale(100%)',
        opacity: "100%"
    },

];

const newspaperTiming = {
    duration: 1000,
    iterations: 1,
    TransitionEvent: " ease in",
}
const newspaper = document.querySelector("#landing-wall");

newspaper.addEventListener('load', () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
});