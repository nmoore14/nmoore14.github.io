let sideHeight = screen.height;
let finalHeight = sideHeight + "px";
console.log(sideHeight);
const sideElem = document.getElementById('sideNav');
const contentElem = document.getElementById('content');
sideElem.style.height = `${finalHeight}`;
contentElem.style.height = `${finalHeight}`;

$(document).ready(function () {
    $("#aboutLink").mouseover(function () {
        $("#aboutLink").addClass("hover");
    });
    $("#aboutLink").mouseout(function () {
        $("#aboutLink").removeClass("hover");
    });
    $("#projectLink").mouseover(function () {
        $("#projectLink").addClass("hover");
    });
    $("#projectLink").mouseout(function () {
        $("#projectLink").removeClass("hover");
    });
    $("#caseStudiesLink").mouseover(function () {
        $("#caseStudiesLink").addClass("hover");
    });
    $("#caseStudiesLink").mouseout(function () {
        $("#caseStudiesLink").removeClass("hover");
    });
    $("#contactLink").mouseover(function () {
        $("#contactLink").addClass("hover");
    });
    $("#contactLink").mouseout(function () {
        $("#contactLink").removeClass("hover");
    });
});

