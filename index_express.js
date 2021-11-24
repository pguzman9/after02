const express = require('express')
const fs = require('fs')
const moment = require('moment')

const app = express()
const PORT = 8080

let visitas = 0;

app.listen(PORT, () => {
    try{
        let data = fs.readFileSync("visitas");
    visitas = Number(data);
}   catch(e)    { console.log("no file")}
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

app.get('/', (request, response) => {
    response.send(`
    <h1 style='color:blue;'>
    "Hola a los estudiantes del curso"
    </h1>
    `)
})

app.get('/visitas', (request, response) => {
    visitas++;
    fs.writeFileSync("visitas", visitas.toString())
    response.send(`Las visitas son ${visitas}`)
})

app.get('/fyh', (request, response) => {
    response.send({
        'fyh': moment().format("M/D/YYYY H:mm:ss")
    })
})