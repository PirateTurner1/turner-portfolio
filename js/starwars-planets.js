import { planets } from '../Assets/planets.js'
import { species } from '../Assets/species.js'

//const planet = planets.filter(planet => planet.name === 'Planet')
//const species = species.filter(species => species.name === 'species')
let mainArea = document.querySelector('main')

//populating the DOM with a loop for Planets
function populateDOM(planetArray) {
    planetArray.forEach(planet => {
        let planetDiv = document.createElement('div')
        planetDiv.setAttribute('class', 'planetDivs')
        let pic = document.createElement('picDivs')
        planetDiv.setAttribute('class', 'picDivs')
        let name = document.createElement('h3')
        planetDiv.setAttribute('class', 'planetName')
        let terrain = document.createElement('p')
        planetDiv.setAttribute('class', 'terrain')
        let climate = document.createElement('p')
        planetDiv.setAttribute('class', 'climate')
            //let planetNum = getPlanetNum(planet.url)


        //let nameTextContent = planetName
        climate.textContent = `Climate: ${planet.climate}`
        terrain.textContent = `Terrain: ${planet.terrain}`

        // pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
        pic.src = ``
        pic.addEventListener('error', (event) => {
            let badImage = event.target
            badImage.src = '../images/placeholder.jpg'
        })

        planetDiv.appendChild(climate)
        planetDiv.appendChild(terrain)
        planetDiv.appendChild(name)
        planetDiv.appendChild(picDivs)
        mainArea.appendChild(planetDiv)
    })
}
console.log(planets)

function getPlanetNumber(planetURL) {
    let end = planetURL.lastIndexOf('/')
    let planetID = planetURL.substring(end - 2, end)
    if (planetID.indexOf('/') !== -1) {
        return planetID.slice(1, 2)
    } else {
        return planetID
    }
}

let planetDiv = document.createElement('div')
let planetName = document.createElement('h3')
let planetPic = document.createElement('img')

//let planetNum = getPlanetNum(planet.url)

planetName.textContent = planets.name
    //planetPic.src = `http://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`

//planetPic.onerror = `this.src='../images/starwarsposter.png'`
planetPic.addEventListener('error', (event) => {
    let badImage = event.target
    badImage.src = './Assets/images/StarwarsPoster.png' //placeholder for un-found images
})

planetDiv.appendChild(planetName)
planetDiv.appendChild(planetPic)

mainArea.appendChild(planetDiv)


/*function getPlanetNumber(planeturl) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}*/


/* This is a loop function */

for (let i = 0; i < 20; i++) {
    console.log(planets[i].name)
        // planets[i].forEach(element => {
        //     console.log(element.name)
        // })
        // let planetDiv = document.createElement('div')
        // let name = document.createElement('h1')
        // name.textContent = planets[i].name



}

planets.slice(20).forEach(planet => {
    let planetDiv = document.createElement('div')
    let name = document.createElement('h1')
    let climate = document.createElement('p')
    let terrain = document.createElement('p')
    let pic = document.createElement('img')
    let planetNum = getPlanetNumber(planet.url)

    planetDiv.setAttribute('class', 'planetDivs')
    pic.setAttribute('class', 'picDivs')

    name.textContent = planet.name
    climate.textContent = `Climate: ${planet.climate}`
    terrain.textContent = `Terrain: ${planet.terrain}`

    pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
    pic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = './Assets/images/StarwarsPoster.png'
    })

    planetDiv.appendChild(name)
    planetDiv.appendChild(climate)
    planetDiv.appendChild(terrain)
    planetDiv.appendChild(pic)

    mainArea.appendChild(planetDiv)
});

/*function getPlanetNumber(planetURL) {
    let end = planetURL.lastIndexOf('/')
    let planetID = planetURL.substring(end - 2, end)
    if (planetID.indexOf('/') !== -1) {
        return planetID.slice(1, 2)
    } else {
        return planetID
    }
}*/

const allDivs = Array.from(document.querySelectorAll('div'))
const mainHeader = document.querySelector('header')
let tempButton = document.createElement('button')
tempButton.textContent = 'Temperate Climate'
let tropButton = document.createElement('button')
tropButton.textContent = 'Tropical Climate'
mainHeader.appendChild(tempButton)
mainHeader.appendChild(tropButton)



tempButton.addEventListener('click', () => {
    //console.log(tempPlanet);
    /*  tempPlanet.forEach(planets => {
         let matchedDiv = allDivs.find(oneDiv => {
             console.log("oneDiv");
             console.log(oneDiv);
             console.log("textContent");
             console.log(oneDiv.childNodes[1].childNodes[0].textContent);
             console.log("oneDiv result");console.log(oneDiv.childNodes[1].childNodes[0].textContent.includes(planets.climate));    
             return oneDiv.childNodes[1].childNodes[0].textContent.includes("temporate");
         })
         matchedDiv.setAttribute("style", "display: none;")
     }) */
    allDivs.forEach(thisDiv => {
        if (!thisDiv.childNodes[1].childNodes[0].textContent.includes("temperate")) {
            thisDiv.setAttribute("style", "display: none;");
        }
    });
})

tropButton.addEventListener('click', () => {
    tropPlanet.forEach(planets => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === planets.climate
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
})

const tempPlanet = planets.filter(planet => planet.climate === 'temperate')
const tropPlanet = planets.filter(planet => planet.climate === 'tropical')

console.log(tempPlanet)
console.log(tropPlanet)
    /* const otherCharacters = planets.filter(planets => planets.climate !== 'temporate' & 'tropical')  */


/* const tempPlanet = planets.filter(planet => planet.climate === 'hot')
const tempClimate = planets.filter(planet => planet.climate === 'frigid')
const tempClimate = planets.filter(planet => planet.climate === 'polluted')
const tempClimate = planets.filter(planet => planet.climate === 'arid')
const tempClimate = planets.filter(planet => planet.climate === 'superheated')
const tempClimate = planets.filter(planet => planet.climate === 'unknown') */