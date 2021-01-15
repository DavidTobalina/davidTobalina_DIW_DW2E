document.addEventListener("DOMContentLoaded", () => {
    var x;
    var array=document.querySelectorAll("#contenedor > div");

    function mostrar(c){
        array[c].style.visibility="visible";
    }
        
    function ocultar(){
        for(var c=0;c<array.length;c++){
            array[c].style.visibility="hidden";
        }
    }

    function myFunction() {
        ocultar();
        for(var c=0;c<array.length;c++){
            x = setTimeout(mostrar, 1000*(c+1), c);
        }
    }

    for(var y=0;y<array.length;y++){
        array[y].addEventListener("click", myFunction);
    }

    myFunction();
});