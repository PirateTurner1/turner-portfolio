import { films } from '../Assets/films.js'
import { planets } from '../Assets/planets.js'
import { species } from '../Assets/species.js'


//const planets = planets.filter(person => person.gender === 'male')
let filmButton = document.createElement('button')
let planetsButton = document.createElement('button')
let speciesButton = document.createElement('button')

let mainArea = document.querySelector('main')
let nav = document.querySelector('nav')
let home = document.createElement('button')

filmButton.textContent = 'FILMS'
    //planetsButton.textContent = 'PLANETS'
speciesButton.textContent = 'SPECIES'

// populating the DOM area
function populateDOM(someArray) {
    someArray.forEach((planet) => {
        let planetDiv = document.createElement('div')
        let pic = document.createElement('img')
        let name = document.createElement('h1')
        let terrain = document.createElement('p')
        let climate = document.createElement('p')
        let population = document.createElement('p')
        let planetNum = getPlanetNum(planet.url)

        planetDiv.setAttribute('class', 'planetDiv')
        name.setAttribute('class', 'planetName')
        pic.setAttribute('class', 'planetPic')
        name.textContent = planet.name
        pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`

        mainArea.appendChild(planetDiv)
        planetDiv.appendChild(name)
        planetDiv.appendChild(pic)
        planetDiv.appendChild(terrain)
        planetDiv.appendChild(climate)
        planetDiv.appendChild(population)

        //figureImage.onerror = `this.src='./Assets/images/StarwarsPlanet.jpg'`
        pic.addEventListener('error', (event) => {
            let badImage = event.target
            badImage.src = './Assets/images/StarwarsPlanet.jpg' //placeholder for un-found images

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

home.addEventListener('click', function() {
    document.location.href = 'index.html'
})

const allDivs = Array.from(document.querySelectorAll('div'));
const mainHeader = document.querySelector('header')
    //planets button

/* This is a loop function */


//let planetsButton = document.createElement('button')
//let planetsButton = document.querySelector('#planets')
planetsButton.textContent = 'PLANETS'
planetsButton.setAttribute('class', 'planets')
mainHeader.appendChild(planetsButton)

//planets button

planetsButton.addEventListener('click', () => {
    mainArea.textContent = ''
        //filterArea.textContent = ""
    deleteNode()
    populateDOM(planets)

    planetsButton.addEventListener('click', () => {
        planets.forEach(planet => {
            let matchedDiv = allDivs.find((oneDiv) => {
                return oneDiv.firstChild.textContent === planet.name
            })
            matchedDiv.setAttribute("style", "display: block;")
        })
    })
})



//const mainHeader = document.querySelector('header')

filmButton.addEventListener("click", () => {
    mainArea.textContent = ""
    filterArea.textContent = ""
        //populating the DOM
    films.forEach(film => {
        let filmDiv = document.createElement("div");
        let filmTitle = document.createElement("h1");
        let filmCrawl = document.createElement("p");
        let filmEpisode = document.createElement("p");
        let pic = document.createElement("img");

        let charNum = getCharNumber(film.url);
        pic.setAttribute("class", "photo");
        filmDiv.setAttribute("class", "card");

        filmTitle.textContent = film.title;
        filmCrawl.textContent = film.opening_crawl;
        filmEpisode.textContent = `Episode: ${film.episode_id}`;
        pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`;

        filmDiv.appendChild(filmTitle);
        filmDiv.appendChild(pic);
        filmDiv.appendChild(filmCrawl);
        filmDiv.appendChild(filmEpisode);

        mainArea.appendChild(filmDiv);
    })
})


/*
allDivs.forEach(thisDiv => {
    if (!thisDiv.childNodes[1].childNodes[0].textContent.includes("temperate")) {
        thisDiv.setAttribute("style", "display: none;");
    }
});*/


/*another one to look at*/


speciesButton.addEventListener("click", () => {
    mainArea.textContent = ""
    filterArea.textContent = ""
    species.forEach(specy => {
        let specyDiv = document.createElement("div");
        let name = document.createElement("h1");
        let classification = document.createElement("p");
        let language = document.createElement("p");
        let pic = document.createElement("img");

        let charNum = getCharNumber(specy.url);
        pic.setAttribute("class", "photo");
        specyDiv.setAttribute("class", "card");

        name.textContent = specy.name;
        classification.textContent = `Classification: ${specy.classification}`;
        language.textContent = `Language: ${specy.language}`;
        pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`;

        specyDiv.appendChild(name);
        specyDiv.appendChild(pic);
        specyDiv.appendChild(classification);
        specyDiv.appendChild(language);

        mainArea.appendChild(specyDiv);

        pic.addEventListener('error', (event) => {
            let badImage = event.target
            badImage.src = './assets/images/Star_Wars_Logo.png'
        })
    });
});

starshipsButton.addEventListener("click", () => {
    mainArea.textContent = ""
    filterArea.textContent = ""
    starships.forEach(starship => {
        let starshipDiv = document.createElement("div");
        let name = document.createElement("h1");
        let model = document.createElement("p");
        let cost = document.createElement("p");
        let hyperdrive = document.createElement("p");
        let pic = document.createElement("img");

        let charNum = getCharNumber(starship.url);
        pic.setAttribute("class", "photo");
        starshipDiv.setAttribute("class", "card");

        name.textContent = starship.name;
        model.textContent = `Model: ${starship.model}`;
        cost.textContent = `Cost: ${starship.cost_in_credits} credits`;
        hyperdrive.textContent = `Hyperdrive Rating: ${starship.hyperdrive_rating}`;
        pic.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`;

        starshipDiv.appendChild(name);
        starshipDiv.appendChild(pic);
        starshipDiv.appendChild(model);
        starshipDiv.appendChild(cost);
        starshipDiv.appendChild(hyperdrive);

        mainArea.appendChild(starshipDiv);

        pic.addEventListener('error', (event) => {
            let badImage = event.target
            badImage.src = './assets/images/Star_Wars_Logo.png'
        })
    });
});