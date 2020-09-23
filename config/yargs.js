const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de ,muñticplicar', opt)
    .command('crear', 'Crear un archivo la tabla de ,muñticplicar', opt)
    .help()
    .argv; // cuando no lleva ./ significa que es un paquete

module.exports = {
    argv
}