document.addEventListener("DOMContentLoaded", () => {
    var ele=document.querySelector(".block");
    var contenedor = document.querySelector(".cuadrado");

    contenedor.addEventListener('drop', drop);
    contenedor.addEventListener('dragover', allowDrop);
    ele.setAttribute('draggable', true);
	ele.addEventListener('dragstart', drag);

    document.getElementById("left").addEventListener("click", function funcion(){
        var num=document.getElementById("mov").value;
        var inicial=ele.offsetLeft;
        var final=inicial-parseInt(num, 10);
        ele.style.left=final+"px";
        comprobar();
    });
    document.getElementById("right").addEventListener("click", function funcion(){
        var num=document.getElementById("mov").value;
        var inicial=ele.offsetLeft;
        var final=inicial+parseInt(num, 10);
        ele.style.left=final+"px";
        comprobar();
    });
    document.getElementById("top").addEventListener("click", function funcion(){
        var num=document.getElementById("mov").value;
        var inicial=ele.offsetTop;
        var final=inicial-parseInt(num, 10);
        ele.style.top=final+"px";
        comprobar();
    });
    document.getElementById("bottom").addEventListener("click", function funcion(){
        var num=document.getElementById("mov").value;
        var inicial=ele.offsetTop;
        var final=inicial+parseInt(num, 10);
        ele.style.top=final+"px";
        comprobar();
    });

    function comprobar(){		
		var dimBloque = ele.getBoundingClientRect();
		var dimCuadrado = contenedor.getBoundingClientRect();
		
		// Comprobamos el límite de todas las coordenadas. La coordenada izquierda y superior deben ser mayor al cuadrado central,
		// pero siempre sin sobrepasar las coordenadas derecha e inferior
		if ((dimBloque.left >= dimCuadrado.left) && (dimBloque.top >= dimCuadrado.top) && 
			(dimBloque.right <= dimCuadrado.right) && (dimBloque.bottom <= dimCuadrado.bottom)){	
			document.querySelector("#texto").style.display = "none";
			bloque.style.backgroundColor = "red";
		} else {
			document.querySelector("#texto").style.display = "inline";
			ele.style.backgroundColor = "greenYellow";
		}
    }
        
    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
});