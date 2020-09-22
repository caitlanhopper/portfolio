window.onscroll = function () {
    reveal()
};

function reveal() {
    if (document.body.scrollTop > 285 || document.documentElement.scrollTop > 285) {
        document.getElementById("hidden").style.visibility = "visible";
    } else if (document.body.scrollTop <= 285) {
        document.getElementById("hidden").style.visibility = "hidden";
    }
}