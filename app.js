//Uso de array -Declarando Variables (let)
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
// Uso de Condicionales,  if y else, que controlan el flujo del programa.
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.⛔");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.⛔");
        return;
    }
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
//Este for recorre el array listaAmigos 
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaHTML.appendChild(li);
    }
}

// Función para sortear un amigo secreto. Uso de  Condicionales
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
