//Factory Function 
const calculadora = (operand1, operand2, operation) => ({
    operand1,
    operand2,
    operation
})

//Funções de cada botão
$("#plus").on("click", function (){
    const operando = calculadora (parseFloat($('#var1').val()),parseFloat($('#var2').val()),"+")
    console.log(operando)
    total.innerHTML = `<strong> ${operando.operand1 + operando.operand2} </strong>`
})

$("#minus").on("click", function () {
    let operando = calculadora (parseFloat($('#var1').val()),parseFloat($('#var2').val()),"-")
    console.log(operando)
    total.innerHTML = `<strong> ${operando.operand1 - operando.operand2} </strong>`
})

$("#div").on("click", function () {
    let operando = calculadora (parseFloat($('#var1').val()),parseFloat($('#var2').val()),"/")
    console.log(operando)
    total.innerHTML = `<strong> ${operando.operand1 / operando.operand2} </strong>`
})

$("#multi").on("click", function () {
    let operando = calculadora (parseFloat($('#var1').val()),parseFloat($('#var2').val()),"*")
    console.log(operando)
    total.innerHTML = `<strong> ${operando.operand1 * operando.operand2} </strong>`
})
