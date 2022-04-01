const fetch = require("node-fetch")
const data = {
    name: "Charles",
    countries: [
        {name: "USA", year: 1996},
        {name: "Iceland", year: 2010},
        {name: "Italy", year: 2007}
    ]
}
fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(res => res.text())
.then(d => console.log(d))
.catch(err => {
    console.log(err.message)
})