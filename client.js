const dgram = require('dgram')
const client = dgram.createSocket("udp4")

let message = ""

process.stdin.setEncoding('utf-8')

process.stdin.on('data', function (text) {
    if('send\n' === text) {

        if (message == null || message.length == 0) {
            message = "Hola Servicio UDP"
        }

        console.log("El usuario mando: " + message)

        message = new Buffer.from(message)
        
        client.send(message, 0, message.length, 41234, "localhost")

    }else{
        message += text;
    }
})