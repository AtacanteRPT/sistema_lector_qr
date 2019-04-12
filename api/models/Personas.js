/**
 * Personas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'string',
      required:true,
      unique: true,
      // columnName: 'the_primary_key'

    },
    nombres: {
      type: 'string',
    },
    paterno: {
      type: 'string',
    },
    materno: {
      type: 'string',
    },
    ci: {
      type: 'string',
      columnType: 'varchar(20)',
    },
    fecha_nacimiento: {
      type: 'ref',
      columnType: 'date'
    },
    edad: {
      type: 'number',
    },
    edad_tipo:{
      type: 'string',
      columnType: 'varchar(30)',
    },
    genero:{
      type: 'string',
      columnType: 'varchar(30)',
    },
    circunscripcion:{
      type: 'string',
      columnType: 'varchar(10)',
    },
    distrito_electoral:{
      type: 'string',
      columnType: 'varchar(20)',
    },
    zona:{
      type: 'string',
      columnType: 'varchar(50)',
    },
    recinto:{
      type: 'string',
    },
    mesa:{
      type: 'string',
      columnType: 'varchar(20)',
    },
    celular1:{
      type: 'string',
      columnType: 'varchar(50)',
    },
    celular2:{
      type: 'string',
      columnType: 'varchar(50)',
    },
    celular3:{
      type: 'string',
      columnType: 'varchar(50)',
    },
    telefono:{
      type: 'string',
      columnType: 'varchar(50)',
    },
    segip:{
      type: 'string',
      columnType: 'varchar(50)',
    },
    direccion:{
      type: 'ref',
      columnType: 'text'
    },
    delegado:{
      type: 'boolean',
    },
    institucion_listas_enviadas:{
      type:'string'
    },
    institucion_min_trabajo:{
      type:'string'
    },
    ministerio_descentralizadas:{
      type:'string'
    },
    tipo_delegado:{
      type:'string',
      columnType: 'varchar(40)',
    },
    distrito_politico:{
      type:'string',
      columnType: 'varchar(20)',
    },
    circunscripcion_delegado:{
      type:'string',
      columnType: 'varchar(10)',
    },
    distrito_delegado:{
      type:'string',
      columnType: 'varchar(20)',
    },
    zona_recinto_delegado:{
      type:'string',
    },
    recinto_delegado:{
      type:'string',
    },
    mesa_delegado:{
      type:'string',
      columnType: 'varchar(40)',
    },
    corresponde_mismo_recinto:{
      type:'boolean',
    },
    asistencia:{
      type:'string',
      columnType: 'varchar(40)',
    },
    fotografia:{
      type:'string',
    },
    qr:{
      type:'string',
    },
    estado:{
      type:'number',
    },
    recogido:{
      type:'boolean',
    },
    recojo_fecha:{
      type: 'ref',
      columnType: 'datetime'
    },
    foto_ci:{
      type: 'string',
    },
    entregado_por:{
      type: 'string',
    },
    habilitado:{
      type:'boolean',
    },
    correo:{
      type:'string',
    },


  },

};

