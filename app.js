let amigos = [];

function agregarAmigo(){
    let entradaAmigo = document.getElementById('amigo');
    let nombreAmigo = entradaAmigo.value;

    if (!nombreAmigo){
        alert('Ingresa algun nombre')
        return;
    }
    amigos.push(nombreAmigo);
    entradaAmigo.value = "";
    entradaAmigo.focus();
    renderizarAmigos()
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i< amigos.length; i++ ){
        let item = document.createElement("li");
        item.textContent = amigos[i]; 
        listaAmigos.appendChild(item);
    }
}

function sortearAmigos(){
    if (amigos.length === 0){
    alert('No hay amigos para sortear');
    return; 
    }
    let amigosSorteados = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigosSorteados}`;
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}