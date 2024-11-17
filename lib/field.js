export default class Field {
    constructor (element, num_of_letters) {
        this.field_element = element
        this.num_of_letters = num_of_letters

        // setup first word, so the empty letters can be placed into it
        this.field_element.innerHTML = `<div id="0" class="word"></div>`
        
        // get word element from DOM
        this.word_element = document.querySelector(this.field_element.id + ', .word')
        for (let i = 0; i < this.num_of_letters; i++) {
            let tmp = ""
            if (i === 0) {
                tmp = "selected "
            }

            this.word_element.innerHTML += `<div class="letter ${tmp}hover">_</div>`
        }
    }
}