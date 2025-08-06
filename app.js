// El principal objetivo de este desafío es fortalecer
// tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver
// el problema.
let amigos = []

//Funcion para agregar a un amigo.
function agregarAmigo() {
    const ingresarAmigo = document.getElementById('amigo');
    const nombre = ingresarAmigo.value.trim();

    //Para validar la entrada
    if (nombre === "") {
        alert("Por favor, ingrese un nombre ");
        return;
    }

    //Añadimos los nombres de lo amigos dentro del array
    amigos.push(nombre);

    //Limpiamos el la cajita donde se ingresa el nombre
    ingresarAmigo.value = "";

    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

console.log(amigos);