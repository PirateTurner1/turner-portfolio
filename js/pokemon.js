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

function getHp(pokemonID) {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then(pokemon => {
        const HP = pokemon.stats.find(Element => {
            return Element.stat.name === "hp"
        })
        return HP.base_stat
    })

    const totalHP = document.querySelector('#totalHP')
    let totalledHP = pokemon.reduce((accumulator, currentPokemon) => accumulator + parseInt(currentPokemon.stats[5].base_stat, 10), 0)
    totalHP.textContent = `Total HP: ${totalledHP}`
}

//reusable async functions to fetch the url data
async function getPokemonData(url) {
    try {
        const response = await fetch(url) //getPokemonData('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        data.hp = HP
        return data;
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
    let pokeDiv = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
        /* //
         //let height = document.createElement('p')*/

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
    pokeFront.setAttribute('class', 'card_face card_face--front')
        //let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    let name = document.createElement('h1')
        // this is the actual site or url: https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/001.png
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    let pokeId = document.createElement("p")
        //pokeFront.appendChild(name)
    pokeFront.appendChild(pic)
        //let pokeNum = getPokeNumber(data.id)
        //name.textContent = capitalize(`${single_pokemon.name}`)

    /*name.textContent = `${data.name} height: ${data.height}`
    pic.src = `../Assets/images/${pokeNum}.png`*/
    //pokeDiv.appendChild(pic)
    //pokeDiv.appendChild(name)

    /*pokeFront.addEventListener("mouseover", function() {
        let type = single_pokemon.types[0].type.name
        pokeFront.setAttribute("style", `border: 4px solid ${color(type)};`)
        "style", `border: 1px solid ${color(type)};`
    })
    pokeFront.addEventListener("mouseout", function() {
        pokeFront.setAttribute("style", "border:none;")
    })*/

}

//the back of the card area
function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card_face card_face--back')
    let pokeOrder = document.createElement('p')
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    pokeOrder.setAttribute('id', 'order')
    let pokeId = document.createElement('p')
    pokeId.textContent = `ID: ${data.id}`
    let name = document.createElement('h4')
        //let baseXP = document.createElement('p')
        // baseXP.textContent = `Base XP: ${data.base_experience}`
        //let HP = document.createElement('p')
        //HP.textContent = `HP: ${data.stats[5].base_stat}`
        // let defence = document.createElement('p')
        // defence.textContent = `Defence: ${data.stats[3].base_stat}`
        //let types = document.createElement("div")
        //types.textContent = `type : ${data.types[1].types_stat}`
        //pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeId)
    pokeBack.appendChild(name)
        //pokeBack.appendChild(types)
        //pokeBack.appendChild(baseXP)
        // pokeBack.appendChild(HP)

    //pokeBack.appendChild(defence)

    return fillCardBack

}