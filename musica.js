var preguntas=[
    "¿Quién es el padre de la música?", 
    "¿Que tipo de musica escuchas",
    "¿En que tiempo escuchas musica?"

];

var opciones=[
    ["Johann Sebastian Bach","Philo Taylor Farnsworth","Thomas Alva Edison"],
    ["Bachata","Pop / Electronica","Rock"],
    ["Por rutina","En el trabajo","En el estudio"]
]

var puntaje=[
    [ 5, 0, 0],
    [ 5, 5, 5],
    [ 5, 5, 5]
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
    imagen.setAttribute("src","https://media.istockphoto.com/id/1144656879/es/vector/conjunto-de-notas-de-m%C3%BAsica.jpg?s=612x612&w=0&k=20&c=xNYprxsR84LAWJkG225HH97kiKY2M6Hlf65bleh_2nU=");
    imagen.setAttribute("width","200");
    imagen.setAttribute("height","200");
    document.getElementsByClassName("caja")[0].appendChild(imagen);

}