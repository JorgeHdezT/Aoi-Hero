// Script para cambiar la fuente
var elementos = document.querySelectorAll("h1, h2, h3, a, p"); // Seleccionar todos los elementos a los que se les cambiará la fuente
var cont = 0;

document.getElementById('modoDislexicoBtn').style.marginTop = "20px";
document.getElementById('modoDislexicoBtn').style.padding = "5px";
document.getElementById('modoDislexicoBtn').style.transition = "all .5s";
document.getElementById('modoDislexicoBtn').style.backgroundColor = "white";
document.getElementById('modoDislexicoBtn').style.cursor = "pointer";

document.getElementById('modoDislexicoBtn').addEventListener('click', function() {
    elementos.forEach(function(elemento) {
        if (cont % 2 == 0) {
            elemento.style.fontFamily = 'sans-serif'; // Si la fuente actual es Comic Sans MS o no está definida, cambiar a sans-serif
            document.getElementById('modoDislexicoBtn').style.backgroundColor = "white";
            document.getElementById('modoDislexicoBtn').style.borderRadius = "0px";
        } else {
            elemento.style.fontFamily = 'Comic Sans MS'; // De lo contrario, cambiar a Comic Sans MS
            document.getElementById('modoDislexicoBtn').style.backgroundColor = "lime";
            document.getElementById('modoDislexicoBtn').style.borderRadius = "20px";
        }
    });

    cont++; // Incrementar el contador después de que se aplique el cambio de fuente
});
