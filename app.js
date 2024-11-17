
// === input ===
import Input from "./lib/input.js" // manages input of users
import Field from "./lib/field.js" // manages display of tried words 
import Suggestions from "./lib/suggestions.js"


// === get document elements ===
const el_input = document.getElementById('input') // input field
const el_field = document.getElementById('field') // field / display
const el_suggestions = document.getElementById('suggestions') // suggestions field


// === settings ===
const NUM_OF_LETTERS = 5

// to get the word list we have to use async functions cause it takes some time to extract.
async function get_data() {    
    return fetch('../ngerman')
        .then((rawData) => rawData.text())
        .then((data) => data.split("\n"))
}


// === main ===
const input = new Input(el_input)

// setup keyboard input
document.addEventListener('keydown', function(e) {
    let char = e.key.toUpperCase()

    if (input.ALPHABET.includes(char)) { alert(char) }
    else if (char == 'BACKSPACE') { alert('remove') }
    else {
        console.log(char);
    }
})

const field = new Field(el_field, NUM_OF_LETTERS)

// cause async functions can only run in to top level module we have to fetch the foundset here 
const suggestions = new Suggestions(el_suggestions, await get_data(), NUM_OF_LETTERS)

let pattern = []
let x = 0
let y = 0