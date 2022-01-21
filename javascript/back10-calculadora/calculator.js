function plus () {
    var tn1 = window.document.getElementById('var1')
    var tn2 = window.document.getElementById('var2')
    var total = window.document.getElementById('total')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    total.innerHTML = `<strong> ${s} </strong>`
}
function minus () {
    var tn1 = window.document.getElementById('var1')
    var tn2 = window.document.getElementById('var2')
    var total = window.document.getElementById('total')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    total.innerHTML = `<strong> ${s} </strong>`
}
function div () {
    var tn1 = window.document.getElementById('var1')
    var tn2 = window.document.getElementById('var2')
    var total = window.document.getElementById('total')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    total.innerHTML = `<strong> ${s} </strong>`
}
function multi () {
    var tn1 = window.document.getElementById('var1')
    var tn2 = window.document.getElementById('var2')
    var total = window.document.getElementById('total')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    total.innerHTML = `<strong> ${s} </strong>`
}
function rest () {
    var tn1 = window.document.getElementById('var1')
    var tn2 = window.document.getElementById('var2')
    var total = window.document.getElementById('total')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 % n2
    total.innerHTML = `<strong> ${s} </strong>`
}
//function calculate(operation) {
//    const num1 = parseFloat(document.getElementById("place1").value);
//    const num2 = parseFloat(document.getElementById("place2").value);
//   let result;
//    if (operation === "+") {
//        result = num1 + num2;
//  } else if (operation === "-") {
//        result = num1 - num2;
//  } else if (operation === "*") {
//        result = num1 * num2;
//  } else {
//        result = num1 / num2;
//    }
//    document.getElementById("result").innerHTML = result;