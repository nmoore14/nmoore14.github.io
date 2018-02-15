var menuAction = document.getElementById("navAction");

menuAction.addEventListener("click", searchClicked, false);

function searchClicked() {
    menuAction.classList.toggle('active');
};

$(document).ready(function(){
    $("#homeLink").addClass("active");
    $("#aboutLink").click(function(){
        $("#homeLink").removeClass("active");
        $("#aboutLink").addClass("active");
        $("#contactLink").removeClass("active");
        $("#projectLink").removeClass("active");
    });
    $("#contactLink").click(function(){
        $("#homeLink").removeClass("active");
        $("#aboutLink").removeClass("active");
        $("#contactLink").addClass("active");
        $("#projectLink").removeClass("active");
    });
    $("#homeLink").click(function(){
        $("#homeLink").addClass("active");
        $("#aboutLink").removeClass("active");
        $("#contactLink").removeClass("active");
        $("#projectLink").removeClass("active");
    });
    $("#projectLink").click(function(){
        $("#projectLink").addClass("active");
        $("#homeLink").removeClass("active");
        $("#aboutLink").removeClass("active");
        $("#contactLink").removeClass("active");
    });
});
