var preguntas=[
    "¿Cuánto dura una maratón?", 
    "¿Qué deporte es considerado el “rey de los deportes",
    "¿A qué deporte se le conoce célebremente como ballet acuático?"

];

var opciones=[
    ["40.195 kilómetros","48.190 kilómetros","42.195 kilómetros"],
    ["Boley","Fútbol","Beisbolt"],
    ["Natación sincronizada","Racquetball", "Windsurf"]
]

var puntaje=[
    [ 0, 0, 5],
    [ 0, 5, 0],
    [ 5, 0, 0]
]

var i=0;

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
    imagen.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUj0jJDPMYsq24QNoZugjDCcFcgz_wOk-qu0ooSut7nsf4CEV3x6ngQjjYKQtqQGzjFxg&usqp=CAU");
    
    imagen.setAttribute("width","310");
    imagen.setAttribute("height","200");
    document.getElementsByClassName("caja")[0].appendChild(imagen);

}