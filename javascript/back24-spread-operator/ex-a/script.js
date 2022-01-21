const numbers = [1,2,3,4,5]
function produto(... numbers){
    a = numbers[0]
    b = numbers[1]
    c = numbers[2]
    d = numbers[3]
    f = numbers[4]
    return a * b * c * d * f
}
console.log(produto(... numbers))