document.addEventListener("DOMContentLoaded", () => {
    var x;
    var variable=0;
    var cont=document.getElementById("contador");

    document.getElementById("iniciar").addEventListener('click', myFunction1);
    document.getElementById("parar").addEventListener('click', myFunction2);
    
    function mostrar(i){
        cont.innerHTML=i;
    }

    function myFunction1(){
        var num=document.getElementById("numero").value;
        if(num==""){
            cont.innerHTML="(Contador)";
        }else{
            variable=0;
            for(var i=num;i>-1;i--){
                if(variable==1){
                    clearTimeout(x);
                    break;
                }else{
                    x = setTimeout(mostrar, 1000*i, num-i);
                }
            }
        }
    }

    function myFunction2(){
        variable=1;
    }
});