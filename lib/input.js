const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function setup (element) {
    ALPHABET.forEach(letter => {
        element.innerHTML += `<div class="word ${letter}">${letter}</div>`
    });
}

export default {
    setup
}