const data = {
    name: "Charles",
    countries: [
        {name: "USA", year: 1996},
        {name: "Iceland", year: 2010},
        {name: "Italy", year: 2007}
    ]
}

// fetch("https://thejsway-server.herokuapp.com/api/countries", {
//     method: "POST",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// })
// .then(res => res.text())
// .then(d => document.getElementById("console").innerText = d)
// .catch(err => {
//     console.log(err.message)
// })

fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(res => res.text())
.then(d => document.getElementById("console").innerText = d)
.catch(err => {
    console.log(err.message)
})