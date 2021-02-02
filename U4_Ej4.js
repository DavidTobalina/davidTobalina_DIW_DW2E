/*document.addEventListener("DOMContentLoaded", () => {
    var elementos=document.getElementsByTagName("div");

    $(document.getElementById("slide")).click(function(){
        for(var i=0;i<elementos.length;i++){
            if(elementos[i].style.display!="none"){
                $(elementos[i]).slideUp(1000);
            }else{
                $(elementos[i]).slideDown(1000);
            }
        }
    });
});*/

document.addEventListener("DOMContentLoaded", () => {
    var elementos=document.getElementsByTagName("div");

    document.getElementById("slide").addEventListener("click", function(){
        for(var i=0;i<elementos.length;i++){
            if(elementos[i].style.display!="none"){
                slideUp(elementos[i], 1000, alerta1);
            }else{
                slideDown(elementos[i], 1000, alerta2);
            }
        }
    }); 

    function slideDown(elemento, tiempo, callback){
        elemento.style.transition="height "+tiempo+"ms";
        elemento.style.height="auto";
        elemento.style.display="block";
        callback();
    }
    function slideUp(elemento, tiempo, callback){
        elemento.style.transition="height "+tiempo+"ms";
        elemento.style.height="0";
        elemento.style.display="none";
        callback();
    }
    function alerta1(){
        alert("Esto es un callback de SlideUp");
    }
    function alerta2(){
        alert("Esto es un callback de SlideDown");
    }
});