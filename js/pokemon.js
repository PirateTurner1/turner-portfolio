/*async function getPokemonData(url){
    const response = await fetch('https://example.com/movies.json')
    const myJson = await response.json()
}*/

//https://github.com/fanzeyi/pokemon.json/blob/master/images/001.png

class pokemon {
    constructor(id, name, weight, types) {
        this.id = id
        this.name = name
        this.weight = weight
        this.types = types
    }
}

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const Piratemon = new pokemon(808, "Piratemon", 150, [{ type: { name: "water" } }])

//adding pokemon by the numbers with an alert
const newButton = document.querySelector('#newPokemon');
newButton.addEventListener('click', function() {
    let pokeId = prompt("please enter a Pokemon ID between 1 & 807");
    if (pokeId > 0 && pokeId <= 807) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(result => {
                populateDOM(result)
            })
    } else {
        alert('there are no Pokemon with that ID. Choose another one')
    } //populateDOM(Piratemon)
})

async function getHP(pokemonID) {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .then(pokemon => {
            const HP = pokemon.stats.find(element => {
                return element.stats.name === "hp"
            })
            return HP.base_stat
        })

}

//reusable async functions to fetch the url data
async function getPokemonData(url) {
    try {
        const response = await fetch(url) //getPokemonData('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        const HP = await getHP(data.id)
        data.hp = HP
        return data
    } catch (error) {
        console.error(error)
    }
}

// now use the return async data!
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokeData => {
                    populateDOM(pokeData)
                        //pokeData = AllData
                        //renderAllPokemon(pokeData)
                        // populateDOM(Piratemon)
                })
        }
    })

//A function to sort out number of pokemon
/*function getPokeNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return `00${charID.slice(1, 2)}`
    } else {
        return `0${charID}`
    }
}*/

//To capitalize the first letter in passed value
const capitalize = s => {
    if (typeof s !== "string") return ""
    return s[0].toUpperCase() + s.slice(1)
};

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}


let mainArea = document.querySelector('main')

//populating the DOM and filling in the content
function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
        //let pokeDiv = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
        /*//pokeDiv.setAttribute('class', 'CharDivs')*/
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)
        /*//pokeDiv.appendChild(height)*/

    //making the card flip and do its thing
    pokeCard.addEventListener('click', function() {
        pokeCard.classList.toggle('is-flipped')
    });
}

//the front of the card area
function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
        // this is the actual site or url: https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
        //let pokeId = document.createElement("p")
    pokeFront.appendChild(name)
    pokeFront.appendChild(pic)

    //name.textContent = capitalize(`${single_pokemon.name}`)

    /*name.textContent = `${data.name} height: ${data.height}`
    pic.src = `../Assets/images/${pokeNum}.png`*/


}

//the back of the card area
function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card__face card__face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    let types = document.createElement("div")
    let pokeId = document.createElement('p')
    pokeId.textContent = `ID: ${data.id}`
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    pokeHP.textContent = data.stats[0].base_stat
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    pokeBack.appendChild(types)
    pokeBack.appendChild(pokeId)
}

/*
const poisonButton = document.querySelector('#poison')
poisonButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('poison')
})
const grassButton = document.querySelector('#grass')
grassButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('grass')
})
const fireButton = document.querySelector('#fire')
fireButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('fire')
})
const waterButton = document.querySelector('#water')
waterButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('water')
})
const electricButton = document.querySelector('#electric')
electricButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('electric')
})
const allButton = document.querySelector('#all')
allButton.addEventListener('click', function() {
    renderAllPokemonWithFilter('all')
})

function renderAllPokemonWithFilter(pokeTypes) {
    if (pokeTypes === 'all') {
        renderAllPokemon(pokeData)
    } else {
        let matchedPokemon = pokeData.filter(pokemon => {
            for (type of pokemon.types) {
                if (type.type.name === pokeType) {
                    return true
                }
            }
            return false
        });
        renderAllPokemon(matchedPokemon)
    }
}*/