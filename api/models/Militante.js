/**
 * Militante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    

    paterno: { type: 'string' },
        materno: { type: 'string' },
        nombre: { type: 'string', required: true, },

        cedula: { type: 'string' },
        identificacion: { type: 'string' },
        celular: { type: 'string' },
        telefono: { type: 'string' },
        cargo: { type: 'string' },
        asistencia: { type: 'boolean' },
        institucion: {
            type: 'string'
        },
// categoria:{
// type:'string'},
        email: {
            type: 'string'
        },
        img:{
          type:'string'
        },
        direccion: {
            type: 'string'
        },
        fechaNac: {
            type: 'ref',
            columnType: 'date',
            required:false
        },
        remplazo: {
            type: 'string'
        },
        ci_remplazo: {
            type: 'string'
        },
        hora: {
            type: 'string'
        },
        sexo: {
            type: 'string'
        },

  },

};

