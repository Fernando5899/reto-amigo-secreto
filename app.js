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

    //Recorremos el arreglo de amigos y agregamos cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    
    //Validamos que haya amigos en la lista
    if (amigos.length === 0){
        resultado.innerHTML = "No hay amigos para sortear :(";
        return
    }

    //Generamos un numero aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtenemos el nombre del amigo sorteado en base al numero generado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostramos el nombre del amigo sorteado
    resultado.innerHTML = `El amigo(a) sorteado es: ${amigoSorteado}`;

    //Limpiar la lista de amigos que se muestra en pantalla
    document.getElementById('listaAmigos').innerHTML = "";

    //Limpiamos el arreglo de los amigos
    amigos = [];
}

