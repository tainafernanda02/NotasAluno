window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }

};
function Calcular(peso, altura) { 
   var semana = document.getElementById('semana').value
   var carga =  document.getElementById('carga').value
   var falta =  document.getElementById('falta').value
   nome =  document.getElementById('nome').value
  var resultadodiv = document.getElementById('resultado')
     
    resultado = ((carga * falta )/ falta)
   


    if(resultado<25){
        return document.querySelector('#resultado').innerHTML = ("Reprovado por falta ")
}else if(resultado>25){
    return document.querySelector('#resultado').innerHTML = ("Em curso" + nome +","+ resultado/falta )
}


}