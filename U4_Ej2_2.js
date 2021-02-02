document.addEventListener("DOMContentLoaded", () => {
    class WcBlinkSpan extends HTMLSpanElement {
        constructor() {
            super();
        }
        //Cuando se añade el elemento al DOM
        connectedCallback(){
            var tiempo;
            var base;
            var alternativo;
            var x=0;

            if(this.hasAttribute("changeInterval")){
                tiempo=this.getAttribute("changeInterval");
            }else{
                tiempo=1;
            }

            if(this.hasAttribute("baseColor")){
                base=this.getAttribute("baseColor");
            }else{
                base="inherit";
            }

            if(this.hasAttribute("alternativeColor")){
                alternativo=this.getAttribute("alternativeColor");
            }else{
                alternativo="transparent";
            }

            setInterval (() => {
                if(++x%2){
                    this.style.color=alternativo;
                }else{
                    this.style.color=base;
                }
              }, tiempo*1000);
        }

        //Cuando se elimina el elemento del DOM
        disconnectedCallback(){

        }

        //Cuando se modifican los atributos de el elemento que se indiquen en observedAtributes
        attributeChangedCallback(attr, oldVal, newVal) {
            
        }

        //Devuelve un listado de los atributos del elemento que provocan que se llame a attributeChangedCallback
        static get observedAttributes() {

        }

        //Cuando el elemento se translada a otro documento
        adoptedCallback(){

        }
    }
    customElements.define('wc-blink-span', WcBlinkSpan, {extends: 'span'});
});