const descripcion= {
    demand: true,
    alias: 'd',
    desc: 'Descipcion de la tarea por hacer'
};

const completado= {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar de acuerdo a los parametros enviados', {
        descripcion
    })
    .command('borrar', 'Genera un archivo con la tabla de multiplicar de acuerdo a los parametros enviados', {
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }