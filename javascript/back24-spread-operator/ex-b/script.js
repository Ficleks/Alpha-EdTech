const vetor1 = [1,2,3,4,5]
const vetor2 = [6,7,8,9,10]
let total1 = 0
let total2 = 0
let i = 0
function somar(x, y){
    total1 += vetor1.reduce(function(soma, i){
        return soma + i
    })
    total2 += vetor2.reduce(function(soma, i){
        return soma + i
    })
    total = total1 + total2
    return total
}

console.log(somar(...vetor1,...vetor2))
