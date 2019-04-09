/**
 * MilitanteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    buscar:function (req,res) {
        console.log('QR:',req.body)
        Militante.find(req.body.baseidentificacion).exec(function(err,datoMilitante){
            // if(err) return res.server.error;

            if(datoMilitante.length>0){

                res.json(datoMilitante[0])
            }else{
                res.json({
                    nombre:'NO ESTA REFISTRADO'
                })
            }
        })
    },
    oso:function (req,res) {
        res.send('OSO MILITANTE')
    }
};

