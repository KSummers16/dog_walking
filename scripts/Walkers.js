import { getWalkers } from "./database.js"

const theWalkers = getWalkers()

document.addEventListener (
    "click",
    (theClickEvent) => {
        const whatWasClicked = theClickEvent.target

        if (whatWasClicked.dataset.type==="walker") {
            window.alert(`This walker works in ${whatWasClicked.dataset.city}`)
        }

       
    }
)

export const walkers = () => {
    let walkerHTML = ""
    walkerHTML = `<ol>`

    for (const walker of theWalkers) {
        walkerHTML += `<li data-id="${walker.id}"
         data-city="${walker.city}"
         data-type="walker"
        >${walker.name}</li>`
    }

    walkerHTML += `</ol>`
    return walkerHTML
}

