function iniciar(){
    var boton=document.getElementById("boton");
    boton.addEventListener("clic", enviar, false);
    window.addEventListener("message", recibir, false);
    receptor.document.getElementById("zonarecpecion");
}

function enviar(){
    var mensaje=document.getElementById("mensaje").value;
    var iframe=document.getElementById("iframe");
    iframe.contentWindow.postMessage(mensaje, "*");

}

function recibir(e){
    receptor.innerHTML+=e.data;
}

window.addEventListener("load", iniciar, false);