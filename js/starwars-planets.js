import { films } from '../Assets/films.js'
import { planets } from '../Assets/planets.js'
//import { starships } from '../Assets/starships.js'



//const planets = planets.filter(person => person.gender === 'male')
//let filmButton = document.createElement('button')
//let planetsButton = document.createElement('button')
//let speciesButton = document.createElement('button')

let mainArea = document.querySelector('main')
let nav = document.querySelector('nav')
let home = document.createElement('button')

// populating the DOM area
function populateDOM(someArray) {
    someArray.forEach((planet) => { //planets.forEach((planet)=>{})
        let planetDiv = document.createElement('div')
        let pic = document.createElement('img')
        let name = document.createElement('h3')
        let terrain = document.createElement('p')
        let climate = document.createElement('p')
        let population = document.createElement('p')
        let planetNum = getPlanetNum(planet.url)

        name.textContent = planet.name
        terrain.textContent = `Terrain: ${planet.terrain}`
        climate.textContent = `Climate: ${planet.climate}`
        population.textContent = `pop: ${planet.population}`

        planetDiv.setAttribute('class', 'planetDiv')
        name.setAttribute('class', 'planetName')
        pic.setAttribute('class', 'planetPic')
        name.textContent = planet.name
        pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
        terrain.setAttribute('class', 'content')
        climate.setAttribute('class', 'content')
        population.setAttribute('class', 'content')

        planetDiv.appendChild(name)
        planetDiv.appendChild(terrain)
        planetDiv.appendChild(climate)
        planetDiv.appendChild(population)
        planetDiv.appendChild(pic)
        mainArea.appendChild(planetDiv)

        //figureImage.onerror = `this.src='./Assets/images/StarwarsPlanet.jpg'`
        pic.addEventListener('error', (event) => {
            let badImage = event.target
            badImage.src = './Assets/images/starWarsPlaceHolder.jpg' //placeholder for un-found images

        })
    })
}



function getPlanetNum(planetURL) {
    let end = planetURL.lastIndexOf('/')
    let planetID = (planetURL.substring(end - 2, end))
    if (planetID.indexOf('/') !== -1) {
        return (planetID.slice(1, 2))
    } else {
        return planetID
    }
}
console.log(planets)

/* This is a loop function */

//let planetsButton = document.createElement('button')
let planetsButton = document.querySelector('#planets')
planetsButton.textContent = 'PLANETS'
planetsButton.setAttribute('class', 'planets')
    //planets button option...
planetsButton.addEventListener('click', () => {
        mainArea.textContent = ''
        deleteNode()
        populateDOM(planets)
    })
    /*planetsButton.addEventListener('click', () => {
        planets.forEach(planet => {
            let matchedDiv = allDivs.find((oneDiv) => {
                return oneDiv.firstChild.textContent === planet.name
            })
            if (matchedDiv.setAttribute('style') === "display: none;") {
                films()
                console.log('all planets are gone')
            } else films.forEach(film => {
                let matchedDiv = allDivs.find(oneDiv => {
                    return oneDiv.firstChild.textContent === films.name;
                })
                matchedDiv.setAttribute("style", "display: revert")
            })
        })
    })*/


//populating the DOM
function populatedom(someArray) {
    someArray.forEach((film) => {
        //films.forEach(function(film) {
        let filmDiv = document.createElement('div')
            //let filmEpisode_id = document.createElement('h1')
        let filmTitle = document.createElement('h3')
        let filmCrawl = document.createElement('p')

        filmTitle.textContent = film.title
        filmCrawl.textContent = film.opening_crawl
            //filmEpisode_id.textContent = `Episode: ${films.episode_id}`
        filmTitle.setAttribute('class', 'titles')
        filmCrawl.setAttribute('class', 'par')
            //filmDiv.appendChild(filmEpisode_id)
        filmDiv.appendChild(filmTitle)
        filmDiv.appendChild(filmCrawl)
        mainArea.appendChild(filmDiv)
    })
}

//let filmsButton = document.createElement('button')
let filmsButton = document.querySelector('#films')
filmsButton.textContent = 'FILMS'
filmsButton.setAttribute('class', 'buttons')

//films button
filmsButton.addEventListener('click', () => {
        mainArea.textContent = ''
            //filterArea.textContent = ""
        deleteNode()
        populatedom(films)
    })
    /*filmsButton.addEventListener('click', () => {
        films.forEach(film => {
            let matchedDiv = allDivs.find((oneDiv) => {
                return oneDiv.firstChild.textContent === films.title
            })

            if (matchedDiv.setAttribute('style') === "display: none;") {
                planets()
                console.log('?what films?')
            } else planets.forEach(planet => {
                let matchedDiv = allDivs.find(oneDiv => {
                    return oneDiv.firstChild.textContent === planets.name;
                })
                matchedDiv.setAttribute("style", "display: revert")
            })
        })
    })*/

home.addEventListener('click', function() {
    document.location.href = 'index.html'
})

const allDivs = Array.from(document.querySelectorAll('div'))
const mainHeader = document.querySelector('header')

function deleteNode() {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild)
    }
    mainHeader.appendChild(planetsButton)
    mainHeader.appendChild(filmsButton)
        //mainHeader.appendChild(starshipsButton)
}


/*
starships.forEach(starship => {
    let starshipDiv = document.createElement("div")
    let name = document.createElement("h1")
    let model = document.createElement("p")
    let cost = document.createElement("p")
    let hyperdrive = document.createElement("p")
        //let pic = document.createElement("img")

    //let starshipsNum = getStarshipsNumber(starship.url)
    //pic.setAttribute("class", "photo")
    starshipDiv.setAttribute("class", "card")

    name.textContent = starship.name;
    model.textContent = `Model: ${starship.model}`
    cost.textContent = `Cost: ${starship.cost_in_credits} credits`
    hyperdrive.textContent = `Hyperdrive Rating: ${starship.hyperdrive_rating}`
        //pic.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`

    starshipDiv.appendChild(name)
        //starshipDiv.appendChild(pic)
    starshipDiv.appendChild(model)
    starshipDiv.appendChild(cost)
    starshipDiv.appendChild(hyperdrive)

//mainArea.appendChild(starShipDiv)

/*pic.addEventListener('error', (event) => {
    let badImage = event.target
    badImage.src = './Assets/images/starWarsPlaceHolder.jpg'
})
})*/

/*function getStarshipsNum(starshipsURL) {
    let end = starshipsURL.lastIndexOf('/')
    let starshipsID = (starshipsURL.substring(end - 2, end))
    if (starshipsID.indexOf('/') !== -1) {
        return (starshipsID.slice(1, 2))
    } else {
        return starshipsID
    }
}
console.log(starships)*/
/*
//let starshipsButton = document.createElement('button')
let starshipsButton = document.querySelector('#starships')
starshipsButton.textContent = 'STARSHIPS'
starshipsButton.setAttribute('class', 'buttons')
    //mainHeader.appendChild(starshipsButton)

//starships button

starshipsButton.addEventListener('click', () => {
    mainArea.textContent = ''
        //filterArea.textContent = ""
    deleteNode()
    populateDOM(starships)
})*/