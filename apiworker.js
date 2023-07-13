
function inicar() {
    zonadatos=document.getElementsById("zonadatos");
    var boton=document.getElementsById("boton");
    boton.addEventListener("click", enviar, false);
    trabajador= new Worker("trabajador.js");
    trabajador.addEventListener("message", recibo, false);        
}

function enviar(){
    var nombre=document.getElementById("nombre").value;
    trabajador.postMessage(nombre);
}

function recibo(e){
    zonadatos.innerHTML=e.data;

}


window.addEventListener("load", inicar,  false);