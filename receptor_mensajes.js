function iniciar(){
    window.addEventListener("message", receptor, false);
}

function receptor(e){
    var zonamensajes=document.getElementById("zonamensajes");

    if(e.origin=="http://Dominion."){

    zonamensajes.innerHTML+="Mensaje desde: "+ e.origin + "<br>";
    zonamensajes.innerHTML+="Mensaje: " + e.data + "<br>";
    e.source.postMessage("Mensaje recibido correcto",+ "<br>"+ e.origin);
    }else{
        e.source.postMessage("Mensaje Erroeno",+ "<br>"+ e.origin);
    }

} 

window.addEventListener("load", iniciar, false);