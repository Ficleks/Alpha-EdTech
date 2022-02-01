const dataWorkers = require("./data/workers.js");
//const dataWorkers = require("../database.js");
//console.log(dataWorkers)

let numbers = []
let length = 0
dataWorkers.forEach(() => {
    let x = dataWorkers[length].ramal
    numbers.push(parseInt(x))
    console.log(x)
    length++
})
numbers.sort()

console.log(numbers)

module.exports = numbers