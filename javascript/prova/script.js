function confirmar() {
	let assento = document.getElementById("assento").value
  let passageiro = document.getElementById("passageiro").value
  if (assento == 1){
  	document.getElementById("one").style.backgroundColor = 'red';
    document.getElementById("one").innerHTML = passageiro
  }
  if (assento == 2){
  	document.getElementById("two").style.backgroundColor = 'red';
    document.getElementById("two").innerHTML = passageiro
  }
  if (assento == 3){
  	document.getElementById("three").style.backgroundColor = 'red';
    document.getElementById("three").innerHTML = passageiro
  }
  if (assento == 4){
  	document.getElementById("four").style.backgroundColor = 'red';
    document.getElementById("four").innerHTML = passageiro
  }
  if (assento == 5){
  	document.getElementById("five").style.backgroundColor = 'red';
    document.getElementById("five").innerHTML = passageiro
  }
  if (assento == 6){
  	document.getElementById("six").style.backgroundColor = 'red';
    document.getElementById("six").innerHTML = passageiro
  }  
  if (assento == 7){
  	document.getElementById("seven").style.backgroundColor = 'red';
    document.getElementById("seven").innerHTML = passageiro
  }
    if (assento == 8){
  	document.getElementById("eight").style.backgroundColor = 'red';
    document.getElementById("eight").innerHTML = passageiro
  }
}