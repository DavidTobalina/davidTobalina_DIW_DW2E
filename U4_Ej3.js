/*document.addEventListener("DOMContentLoaded", () => {
    var contenedor1=document.getElementById("contenedor1");
    var contenedor2=document.getElementById("contenedor2");

    $(document.getElementById("fade")).click(function(){
        $(contenedor1).fadeIn(1000);
        $(contenedor1).fadeOut(1000);

        $(contenedor2).fadeIn(1000);
        $(contenedor2).fadeOut(1000);
    });
});*/

document.addEventListener("DOMContentLoaded", () => {
    var contenedor1=document.getElementById("contenedor1");
    var contenedor2=document.getElementById("contenedor2");

    document.getElementById("fade").addEventListener("click", function(){
        fadeIn(contenedor1, 1000);
        fadeOut(contenedor2, 1000);
    });

    function fadeIn(elemento, tiempo){
        elemento.style.transition="opacity "+tiempo+"ms"+", visibility "+tiempo+"ms";
        elemento.style.visibility="visible";
        elemento.style.opacity="1";
    }
    function fadeOut(elemento, tiempo){
        elemento.style.transition="opacity "+tiempo+"ms"+", visibility "+tiempo+"ms";
        elemento.style.visibility="hidden";
        elemento.style.opacity="0";
    }
});