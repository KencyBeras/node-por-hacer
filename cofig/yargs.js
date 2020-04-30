const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Muestra una descripcion de la tarea especificada.'
    }
}

//
const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            descripcion: 'Muestra una descripcion de la tarea especificada.'
        }
    })
    .command('actualizar', 'Actualiza a estado completado una tarea', {
        descripcion,
        completado: {
            //demand: true,
            alias: 'c',
            default: true,
            descripcion: 'Completa una tarea pendiente.'
        }
    })
    .command('borrar', 'Elimina  archivo existente en la DB.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}