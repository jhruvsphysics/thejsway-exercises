document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    const formData = new FormData(e.target)

    fetch("http://localhost:3000/tshirt", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(r => document.getElementById("result").innerText = r)
})