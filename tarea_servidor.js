const v = process.argv;
//puerto
const puerto = v[2];

const net = require('net');
const { argv } = require('process');
//variable de estado de usuario
var estado;
const server = net.createServer(function (connection) {
    connection.on('end', function () {
        console.log('cliente desconectado');
    });

    connection.on('data', function (data) {
        buscar(data.toString());
        connection.write(estado);
    });
});

server.listen(puerto, function () {
    console.log('servidor esta escuchando');
});

function buscar(userpass) {
    let v = userpass.split('/')
    let user = v[0]
    let passw = v[1]
    let control = false;
    let user1 = new usauario("Dan Israel", "Copa Lupe", "dcopalupe", "123456");
    let user2 = new usauario("Jorge Andres", "Alanoca Quino", "jalanocaquino", "1q2w3e4");
    let user3 = new usauario("Ana", "Condori Quispe", "acondoriquispe", "54321");
    let vec = [user1, user2, user3];
    estado = 'El usuario ' + user + ' no existe';
    for (let index = 0; index < vec.length; index++) {
        if (vec[index].usuario == user) {
            if (vec[index].pass == passw) {
                estado = 'Bienvenido ' + vec[index].nombre + ' ' + vec[index].apelido + '!!!!!';
                control = true;
                break;
            } else {
                estado = 'La contrasenia para ' + user + ' es incorrecta';
                break;
            }
        }
    }
}

//objeto usuario
function usauario(nom, ap, us, pas) {
    this.nombre = nom;
    this.apelido = ap;
    this.usuario = us;
    this.pass = pas;
}
