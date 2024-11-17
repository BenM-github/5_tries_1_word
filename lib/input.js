export default class Input {
    ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    constructor (element) {
        this.element = element

        // setup input on DOM
        this.ALPHABET.forEach(letter => {
            this.element.innerHTML += `<div class="letter unknown hover">${letter}</div>`
        });
    }    
}