// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = []
const input = document.getElementById('amigo')
const listaAmigos = document.getElementById('listaAmigos')

const btnSortear = document.getElementById('btnSortear')
const resultado = document.getElementById('resultado')

const actualizarListaAmigos = () => {
    listaAmigos.innerHTML = ''

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li')
        li.textContent = amigo
        listaAmigos.append(li)
    })
}

const agregarAmigo = () => {
    const value = input.value
    if(value){
        amigos.push(value)
        actualizarListaAmigos()
        input.value = ''
    } else {
        alert('Por favor, ingrese algo en el input')
    }
    return amigos
}

const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo para seleccionar')
        return
    }
    const randomIndex = Math.floor(Math.random() * amigos.length)
    listaAmigos.innerHTML = ''
    resultado.innerHTML = amigos[randomIndex]
}

