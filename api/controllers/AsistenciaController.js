module.exports = {
  
    mostrar:function (req,res) {
        console.log('QR:',req.body)
        Militante.find({identificacion:req.body.baseidentificacion}).exec(function(err,datoMilitante){
            // if(err) return res.server.error;

            if(datoMilitante !=undefined){

                res.json(datoMilitante[0])
            }else{
                res.json({
                    nombre:'NO ESTA REFISTRADO'
                })
            }
        })
    },

};