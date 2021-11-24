const http = require('http');
const moment = require('moment');

const server = http.createServer((request, response) => {

    let mensaje = ''

    const horaAct = parseInt(moment().format('HH'))
    
    console.log(typeof(horaAct))

    if(horaAct > 6 && horaAct < 12){
        mensaje = 'BUENOS DIAS'
    } else if (horaAct > 12 && horaAct < 21) {
        mensaje = 'BUENAS TARDES'
    } else {
        mensaje = 'BUENAS NOCHES'
    }
    response.end(mensaje)
})

const connect = server.listen(3000, () => {
    let port = connect.address().port
    console.log(`Escuchando por puerto ${port}`)})


