export default function randomNumbers(length, max) {
    const numbers = []
    for (let i = 0; i < length; i++) {
        numbers.push(Math.floor(Math.random() * max))
    }
    return numbers

}