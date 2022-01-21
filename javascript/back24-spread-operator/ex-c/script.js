let array = []
function randomNumbers(){
    for (i=0; i<10; i++){
        array.push(parseInt(Math.random() * (101 - 1) + 1))
    }
return Math.max(...array)
}

console.log(randomNumbers())