const dataWorkers = require("./data/workers.js");
//console.log(dataWorkers)
//console.log(dataWorkers[0].birthDate)

// let length = 0
// dataWorkers.forEach(() => {
//     let x = dataWorkers[length].birthDate
//     // need to turn a string date into a number
//     x = x.split()
//     console.log(x)
//     length++
// })

function birthDate (param)  {
    const month = dataWorkers.filter(month => month.birthDate == param);
    return month
}
console.log(birthDate("17-12-1998"))