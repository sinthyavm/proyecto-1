//document.getElementById("button").addEventListener("click", guardarNombre)//


function guardarNombre(){
     var usuario=document.getElementById("nombre").value;
     localStorage.setItem("name",usuario);
}

