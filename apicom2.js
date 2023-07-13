
function inicar() {
    zonadatos=document.getElementById("zonadatos");
    zonaprogreso=document.getElementById("zonaprogreso")
    var boton=document.getElementById("boton");

    boton.addEventListener("click", leer, false);
    }

function leer(){
    var url="video4.mp4";
    var solicitud= new XMLHttpRequest();
    solicitud.addEventListener("loadstart", comienza_barra. false);
    solicitud.addEventListener("progress", estado_barra, false);
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send(null);    
}

function comienza_barra(){
    zonadatos.innerHTML+="<progress value= '0' max='100'>  </progress>";
}

function estado_barra(){
    var porcentaje=parseInt(e.loaded/e.total*100);
    var progreso=zonadatos.querySelector("progress");
    progreso.value=porcentaje;
    zonaprogreso.innerHTML+=porcentaje + "%";
}

function mostrar(e){
    zonadatos.innerHTML+="Archivo leido !!!";
    


}



window.addEventListener("load", inicar,  false);