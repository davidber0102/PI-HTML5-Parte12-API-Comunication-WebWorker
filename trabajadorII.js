
puertos=new Array();

window.addEventListener("conect",conectar,false);

function conectar(e){
    puertos.push(e.puertos[0]);
    e.ports[0].onmessage=enviar;
}

function enviar(e){
    for(f=0;f<e.ports.length;f++){
        puertos[f].postMessage("El tecto que has puesto es: " + e.data);
    }
}