let array = []
function acumulador (...param) {
    for (i = 0; i < param.length; i++){
        array.push(param[i])
    }
    return array
}


console.log(acumulador(1,2,3,4,5,"a","b","c"))