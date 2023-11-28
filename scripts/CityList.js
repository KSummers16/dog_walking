import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = `<ol>`

    for (const walker of walkers) {
        citiesHTML += `<li>${walkers.city}</li>`
    }

    citiesHTML += `</ol>`

    return citiesHTML
}

