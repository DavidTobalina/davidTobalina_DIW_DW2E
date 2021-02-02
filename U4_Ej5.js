document.addEventListener("DOMContentLoaded", () => {
    var elemento=document.getElementById("cuadro");

    $(document.getElementById("fade")).click(function(){
        if(elemento.style.display=="none"){
            $(elemento).fadeIn(1000);
        }else{
            $(elemento).fadeOut(1000);
        }
    });

    $(document.getElementById("slide")).click(function(){
        if(elemento.style.display!="none"){
            $(elemento).slideUp(1000);
        }else{
            $(elemento).slideDown(1000);
        }
    });
});