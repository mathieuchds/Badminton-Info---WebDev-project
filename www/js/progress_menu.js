document.addEventListener("DOMContentLoaded", function() {

    var sectionCible = document.getElementById("bottom-page");
    var divAjustee = document.getElementById("right-sidebar");

    function ajusterBottom() {
        var distanceParcourue = window.innerHeight - (sectionCible.getBoundingClientRect().top);
        var topValue = Math.max(130, distanceParcourue);
        if(topValue==130)  {
            divAjustee.style.top = topValue + "px";
        }else {
            divAjustee.style.top = -topValue + 130 + "px";
        }
    }

    window.addEventListener("scroll", ajusterBottom);

    ajusterBottom();
});
