function bemVindo(name) {
    alert('Sua aposta foi: ' + name);
}
  
function inputName(callback) {
    var name = prompt('Faça sua aposta, digite 6 números de 0 a 60');
    callback(name);
}
  
inputName(bemVindo);
  