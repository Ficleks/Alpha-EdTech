class calculadora {
    constructor(operand1,operand2,operation){
        this._operand1 = operand1
        this._operand2 = operand2
        this._operation = operation
    }
    get result() {
        if (this._operation == "+") {
            return this._operand1 + this._operand2
        }
        if (this._operation == "-") {
            return this._operand1 - this._operand2
        }
        if (this._operation == "*") {
            return this._operand1 * this._operand2
        }
        if (this._operation == "/") {
            if(this._operand1 == 0 && this.operand2 == 0){
                return "operation error"
            } else {
                return this._operand1 / this._operand2
            }
        }
    }
}

function plus() {
    let operando = new calculadora (Number.parseFloat(document.getElementById('var1').value),Number.parseFloat(document.getElementById('var2').value),"+")
    console.log(operando.result)
    total.innerHTML = `<strong> ${operando.result} </strong>`
}
function minus() {
    let operando = new calculadora (Number.parseFloat(document.getElementById('var1').value),Number.parseFloat(document.getElementById('var2').value),"-")
    console.log(operando.result)
    total.innerHTML = `<strong> ${operando.result} </strong>`
}
function div() {
    let operando = new calculadora (Number.parseFloat(document.getElementById('var1').value),Number.parseFloat(document.getElementById('var2').value),"/")
    console.log(operando.result)
    total.innerHTML = `<strong> ${operando.result} </strong>`
}
function multi() {
    let operando = new calculadora (Number.parseFloat(document.getElementById('var1').value),Number.parseFloat(document.getElementById('var2').value),"*")
    console.log(operando.result)
    total.innerHTML = `<strong> ${operando.result} </strong>`
}