const games = []

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





// function birthDay () {
//     let length = 0
//     games.forEach(() => {
//         let x = games[length].game
//         console.log(x)
//         length++
//         document.getElementById("workers").innerHTML += games[0].game + " "
//     })
//     //fetch(`/birthDay`)
// }
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
    newElement.game = document.getElementById("game").value
    newElement.year = document.getElementById("year").value
    newElement.genre = document.getElementById("genre").value
    newElement.multilayer = document.getElementById("multiplayer").value
    newElement.offline = document.getElementById("offline").value
    newElement.crossplataform = document.getElementById("crossplataform").value
    games.push(newElement)
    console.log(games)
    document.getElementById('id').value = ''
    document.getElementById('game').value = ''
    document.getElementById('year').value = ''
    document.getElementById('genre').value = ''
    document.getElementById('multiplayer').value = ''
    document.getElementById('offline').value = ''
    document.getElementById('crossplataform').value = ''
}

