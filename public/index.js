const cardContainer = document.getElementById("card-container")

fetch("http://localhost:3000/pokemon")
.then(data => data.json())
.then(json => {
    json.forEach(pokemon => {
        createPokeCard(pokemon)
    });
})

function createPokeCard(pokemon){
    const card = document.createElement("div")
    card.className = "card flip"

    const h2 = document.createElement("h2")
    h2.textContent = pokemon.name
    
    const img = document.createElement("img")
    img.src = pokemon.img
    
    const pType = document.createElement("p")
    pType.textContent = `Type: ${pokemon.type}`

    const pWeakness = document.createElement("p")
    pWeakness.textContent = `Weakness: ${pokemon.weakness}`

    card.append(h2, img, pType, pWeakness)
    cardContainer.appendChild(card)
}

