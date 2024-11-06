import {countries} from "../scripts/countries.js"



const makeCountry = (country) => {
    const container = document.createElement('div')
    container.classList.add('card-country')


    container.addEventListener('mouseenter', showInfo)
    
    const img = document.createElement('img')
    img.src = country.flag
    img.alt = country.name

    const title = document.createElement('h2')
    title.textContent = country.name

    container.appendChild(img)
    container.appendChild(title)

    document.querySelector('main > section').appendChild(container)
}

const renderCountry=()=>{
    countries.forEach(country => makeCountry(country));
}

const showInfo=(event)=>{
    let currentCountry=event.target.children[1].textContent
    let foundCountry= countries.find(country=> country.name===currentCountry)
    // busca por cada pais si es igual al valor entregado
     // evento que va a ocurrir, event.target a quien le ocurrio un evento .
    //.children = todos los hijos que tenga arreglo de hijos del elemento de donde yo me ubique
    // , textcontent traer el texto 



    const Country=document.querySelector('#demographics')

    Country.children[0].textContent=foundCountry.name
    Country.children[1].textContent=foundCountry.capital
    Country.children[2].textContent=foundCountry.population


    
   
}

// cargar el contenido del DOM, primero carga todo el html y luego lo que esta despues de DOMContent
window.addEventListener('DOMContentLoaded',renderCountry)