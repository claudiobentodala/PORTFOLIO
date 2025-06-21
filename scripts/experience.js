import { number_text } from "./number_to_text.js"

let experience = {
    start: 2024,
    now: new Date().getFullYear()
}
console.log(number_text(3))

window.document.querySelector('span#experience').innerHTML = number_text(experience.now - experience.start)