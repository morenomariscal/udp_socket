const dgram = require('dgram')
const server = dgram.createSocket("udp4")

server.bind(41234)

server.on('error', (err) => {
    console.log(`Error en el servicio:\n${err.stack}`);
    server.close()
})

server.on('message', function (message, rinfo) {
    let output = "El servicio UDP recibe un mensaje: " + message + "de la ip: "+ rinfo.address+ "\n"
    process.stdout.write(output)
});

server.on('listening', function () {
    const address = server.address()
    console.log('Servicio UDP iniciado y escuchando en ' + address.address + ":" + address.port)
})