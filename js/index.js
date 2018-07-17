var menuAction = document.getElementById("navAction");

menuAction.addEventListener("click", searchClicked, false);

function searchClicked() {
    menuAction.classList.toggle('active');
};

$(document).ready(function () {
    alert("Please excuse my mess. The new site is now located at nmoore14.netlify.com.");
    $("#newSelection").hide();
    $("#pickSelection").hide();
    $("#newLink").click(function () {
        $("#featuredLink").removeClass("active");
        $("#featuredSelection").hide();
        $("#newLink").addClass("active");
        $("#newSelection").show();
        $("#pickLink").removeClass("active");
        $("#pickSelection").hide();
    });
    $("#pickLink").click(function () {
        $("#featuredLink").removeClass("active");
        $("#featuredSelection").hide();
        $("#newSelection").hide();
        $("#newLink").removeClass("active");
        $("#pickLink").addClass("active");
        $("#pickSelection").show()
    });
    $("#featuredLink").click(function () {
        $("#featuredLink").addClass("active");
        $("#featuredSelection").show();
        $("#newLink").removeClass("active");
        $("#newSelection").hide();
        $("#pickLink").removeClass("active");
        $("#pickSelection").hide();
    });
});
