const v = process.argv;
//puerto
const puerto = v[2];
var net = require('net');
const leerLinea = require('./readl');

var client = net.connect({ port: puerto }, function () {
    console.log('conectado al servidor!');
    console.log('Ingrese usuario y contraseña (user/pass)');
});

leerLinea.on('line', function (msg) {
    client.write(msg);
    leerLinea.close();
    client.end();
});

client.on('data', function (data) {
    let resivido = data.toString();
    console.log(resivido);
});