const PORT = 6024;
const MULTICAST_ADDR = '239.255.255.250'
const dgram = require('dgram')
const client = dgram.createSocket('udp4')

client.on('listening', function () {
    const address = client.address()
    console.log('Servicio UDP escuchando a ' + address.address + ":" + address.port)
});

client.on('message', function (message, rinfo) {
    console.log('Mensaje de: ' + rinfo.address + ':' + rinfo.port + ' - ' + message)
});

client.bind(PORT, function () {
    client.addMembership(MULTICAST_ADDR)
})