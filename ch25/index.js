const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const { response } = require("express");

const jsonParser = bodyParser.json();
const upload = multer();
const app = express();
// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.get("/", (request, response) => {
    response.send("Hello from Express!")
})

app.use(express.static("public"))

app.get("/tshirt", (request, response) => {
    response.sendFile(`${__dirname}/views/tshirt.html`)
})

app.post("/tshirt", upload.array(), (request, response) => {
    const size = request.body.size
    const color = request.body.color
    response.send(`You picked size: ${size} and color: ${color}!!`)
})

app.post("/api/countries", jsonParser, (request, response) => {
    const name = request.body.name
    const countries = request.body.countries
    response.send(`Your name is ${name} and visited ${countries.length} countries`)
})


app.get("/articles", (request, response) => {
    response.sendFile(`${__dirname}/views/article.html`)
})

let articles = []
app.post("/articles", upload.array(), (request, response) => {
    console.log(`article submitted!`)
    const title = request.body.title
    const content = request.body.content
    articles.push({title, content, id: articles.length})
    console.log(articles)
    response.send(`You added your article with ID: ${JSON.stringify(1+articles[articles.length-1].id)}`)
})

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});

