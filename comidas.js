var preguntas=[
    "¿Cuál es la fruta más cara del mundo?", 
    "¿Cuál es el primer alimento en el espacio?",
    "¿Dónde fue el origen de la hamburguesa con queso?"

];

var opciones=[
    ["Plátanos","Dragon de fruta","Melón Yubari"],
    ["Hamburguesa","Salsa de manzana","Carne en conserva"],
    ["Nueva York","Florida","Chicago"]
]

var puntaje=[
    [ 0, 0, 5],
    [ 0, 5, 0],
    [ 5, 5, 5]
]

var i=0;
0
function siguientePregunta(){

    document.getElementById("Pregunta1").innerHTML=preguntas[i];

    document.getElementById("opcion0").innerHTML=opciones[i][0];
    document.getElementById("opcion1").innerHTML=opciones[i][1];
    document.getElementById("opcion2").innerHTML=opciones[i][2];


}

siguientePregunta()

var actualizado=0;

function actualizarPuntaje(alternativa){
    actualizado=puntaje[i][alternativa]+actualizado;

    i++;

    if (i<3){

        siguientePregunta();
    }
    else{
        mostrarResultado();

    }
}

document.getElementById("opcion0").addEventListener("click",function(){actualizarPuntaje(0)});
document.getElementById("opcion1").addEventListener("click",function(){actualizarPuntaje(1)});
document.getElementById("opcion2").addEventListener("click",function(){actualizarPuntaje(2)});


function mostrarResultado(){

    document.getElementById("titulo1").innerHTML="RESULTADO";
    document.getElementById("Pregunta1").innerHTML="El puntaje obtenido es: "+actualizado;
    document.getElementById("parrafo").innerHTML="¡Felicitaciones!";
    document.getElementsByClassName("caja")[0].innerHTML="";
    var imagen=document.createElement("img");
    imagen.setAttribute("src","https://st2.depositphotos.com/1069055/6822/i/600/depositphotos_68224813-stock-photo-fresh-fruits-and-berries.jpg");
    imagen.setAttribute("width","240");
    imagen.setAttribute("height","240");
    document.getElementsByClassName("caja")[0].appendChild(imagen);

}