const http = require('http');
const moment = require('moment');

const server = http.createServer((request, response) => {

    const now = new moment()

    console.log("entro alguien a la pagina"+ now.format('h:mm:ss a'))

    response.end("<h1>colombia clasificó a qatar!!</h1>")
});

const connect = server.listen(3000, () => {
    let port = connect.address().port
    console.log(`Escuchando por puerto ${port}`)
})

//http://127.0.0.1:3000
//http://192.168.0.11:3000