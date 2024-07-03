let contenedorCards = document.getElementById('contenedor_cards')
let cardsHTML = ""

for(let viaje in viajes){
    cardsHTML += crearCards(viaje)
}

contenedorCards.innerHTML = cardsHTML

function crearCards(viaje){
    let card = document.createElement('div')
    card.classList.add('card')

    let id = document.createElement('div')
    let name = document.createElement('p')
    let image = document.createElement('img')

    id.innerText = viajes[viaje].id
    name.innerText = viajes[viaje].name
    image.src = viajes[viaje].image

    card.append(id, name, image)

    return card.outerHTML
}