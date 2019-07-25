const SRC_PORT = 6025
const PORT = 6024
const MULTICAST_ADDR = '239.255.255.250'
const dgram = require('dgram')
const server = dgram.createSocket("udp4")

server.bind(SRC_PORT, function () {
    setInterval(multicastNew, 4000)
});

function multicastNew() {
    var message = new Buffer("Mensaje Multicast....!")
    server.send(message, 0, message.length, PORT, MULTICAST_ADDR, function () {
        console.log("Enviar '" + message + "'")
    })
}