import { getWalkers } from "./database.js"

const theWalkers = getWalkers()


export const walkers = () => {
    let walkerHTML = ""
    walkerHTML = `<ol>`

    for (const walker of theWalkers) {
        walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += `</ol>`
    return walkerHTML
}

