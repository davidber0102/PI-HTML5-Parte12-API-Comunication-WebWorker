
function inicar() {
    zonadatos=document.getElementById("zonadatos");
    var boton=document.getElementById("boton");
    boton.addEventListener("click", enviar_datos, false);
    }

function enviar_datos(){
    nombre=document.getElementById("elnombre").value;
    apellido=document.getElementById("elapellido").value;
    var datos=new FormData();
    datos.append("nombre", nombre);
    datos.append("apellido", apellido);
    var url="procesar.php";
    var solicitud= new XMLHttpRequest();
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("POST", url, true);
    solicitud.send(datos)    
}

function mostrar(e){
    zonadatos.innerHTML=e.target.responseText;  
}

window.addEventListener("load", inicar,  false);