class calculadora {
    constructor(operand1,operand2,operation){
        this._operand1 = operand1
        this._operand2 = operand2
        this._operation = operation
    }
    set operand1(_operand1){
        this._operand1 = Number
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
let operando = new calculadora(1,2,"+")
calculadora._operand1 = 5
console.log(operando._operand1)