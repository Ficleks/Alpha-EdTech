const dataWorkers = require("./data/workers.js");
// console.log(dataWorkers)

function sector (param)  {
    const sector = dataWorkers.filter(sector => sector.sector == param);
    return sector
}
console.log(sector("Marketing"))