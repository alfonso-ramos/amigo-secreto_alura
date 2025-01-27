// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = []
let input = document.getElementById('amigo')

const agregarAmigo = () => {
    const value = input.value
    if(value){
        amigos.push(value)
        input.value = ''
    } else {
        alert('Por favor, ingrese algo en el input')
    }
    return amigos
}



