const express = require('express')

const app = express()

app.listen(process.env.PORT || 3000)



app.get('/', (req, res) => {
    console.log("GET request")

    res.send("Saludos a todos en After !!")
})