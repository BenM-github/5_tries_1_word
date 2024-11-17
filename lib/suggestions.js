export default class Suggestions {
    foundset = []

    constructor (element, foundset, num_of_letters) {
        this.element = element

        // filter foundset for set wordlengt
        foundset.forEach(word => {
            if (word.length == num_of_letters) {
                this.foundset.push(word)
            }
        });

        // display filtered foundset
        this.display()
    }

    display() {
        this.foundset.forEach(word => {
            this.element.innerHTML += `<div class="word hover">${word}</div>`
        });
    }
}