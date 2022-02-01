const employees = []

const apiUrl = "http://localhost:3000/"

function ramal () {
    const route = "ramais"
    const fullUrl = apiUrl + route
    fetch(fullUrl)
        .then(res => res.json())
        .then(resJson => document.getElementById("workers").innerHTML += resJson + " ")
        
}

function birthDay () {
    const route = "birthday"
    const fullUrl = apiUrl + route
    fetch(fullUrl)
        .then(res => res.json())
        .then(resJson => console.log(resJson))
}





function birthDay () {
    let length = 0
    employees.forEach(() => {
        let x = employees[length].date
        x = x.split()
        console.log(x)
        length++
        document.getElementById("workers").innerHTML += employees[0].date + " "
    })
    //fetch(`/birthDay`)
}
function sector (param) {
    param = document.getElementById('inputSector').value
    const sector = employees.filter(sector => sector.sector == param)
    // document.getElementById("workers").innerHTML += sector
    console.log(sector)
    length = 0
    employees.forEach(() => {
        document.getElementById("workers").innerHTML += sector[length]
        length++
    })
}

function save () {
    const newElement = {}
    newElement.id = document.getElementById("id").value
    newElement.name = document.getElementById("name").value
    newElement.ramal = document.getElementById("ramal").value
    newElement.email = document.getElementById("email").value
    newElement.sector = document.getElementById("sector").value
    newElement.date = document.getElementById("date").value
    employees.push(newElement)
    console.log(employees)
    document.getElementById('id').value = ''
    document.getElementById('name').value = ''
    document.getElementById('ramal').value = ''
    document.getElementById('email').value = ''
    document.getElementById('sector').value = ''
    document.getElementById('date').value = ''
}

