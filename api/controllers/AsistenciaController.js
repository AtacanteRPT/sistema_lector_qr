module.exports = {
  
    // mostrar:function (req,res) {
    //     console.log('QR:',req.body)
    //     Militante.find({identificacion:req.body.baseidentificacion}).exec(function(err,datoMilitante){
    //         // if(err) return res.server.error;

    //         if(datoMilitante.length>0){

    //             res.json(datoMilitante[0])
    //         }else{
    //             res.json({
    //                 nombre:'NO ESTA REGISTRADO',
    //                 img:''
    //             })
    //         }
    //     })
    // },
    mostrar:function (req,res) {
        console.log('QR:',req.body)
        Personas.find(req.body.baseidentificacion).exec(function(err,datoMilitante){
            // if(err) return res.server.error;
            
            if(datoMilitante.length>0){
                var auxPersona={
                    nombre:datoMilitante[0].nombres,
                    paterno:datoMilitante[0].paterno,
                    materno:datoMilitante[0].materno,
                    img:datoMilitante[0].fotografia,
                    identificacion:datoMilitante[0].id,
                    circunscripcion:datoMilitante[0].circunscripcion,
                    zona:datoMilitante[0].zona,
                    recinto:datoMilitante[0].recinto
                }
                res.json(auxPersona)
            }else{
                res.json({
                    nombre:'NO ESTA REGISTRADO',
                    img:''
                })
            }
        })
    },
};