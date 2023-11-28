import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = ""
    petHTML = `<ol>`

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += `</ol>`

    return petHTML
}

