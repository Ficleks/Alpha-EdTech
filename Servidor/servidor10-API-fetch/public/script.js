const urlServidor = "http://localhost:3000"

const select = document.getElementById("select")
const value = select.options[select.selectedIndex].value;

const inputId = document.getElementById('id')
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')

select.onchange = function(){
    var value = document.getElementById("select").value;
	console.log(value)
  if(value == "id"){
    input.innerHTML = '<input id="id" type="number" name="id" placeholder="insira seu id" />'
    const inputId = document.getElementById('id')
    inputId.addEventListener('input', function(){
        const caracterId = inputId.value
        console.log(caracterId)
    })
    tabela ()
    }
    if(value == "name"){
    input.innerHTML = '<input id="name" type="string" name="name" placeholder="insira seu nome" />'
    }
    if(value == "email"){
    input.innerHTML = '<input id="email" type="string" name="email" placeholder="insira seu email" />'
    }
};

function tabela (){
    const table = document.getElementById('table')
    table.innerHTML = ''

    cliente.forEach(function(){
        table.innerHTML += `<tr><th>${clientes.id}</th></tr>`
    })
}


const email = "carlos@hotmail.com"
fetch(`/user/email?email=${email}`)
.then(res => {return res.json()})
.then(data => console.log(data))
