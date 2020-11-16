'use string'

// const bcrypt = require('bcrypt');
const User = require('../models/user');

const pruebas = (req, res) => {
    res.status(200).send({
        message: 'probando...',
    })
}

const saveUser = (req, res) => {
    const user = new User();

    const email = req.body.email;
    const password = req.body.password;

    user.email = email;
    user.password = password;
    
    // const params = req.body;
    // console.log(params);
    
    // user.name = params.name;
    // user.surName = params.surName;
    // user.email = params.email;
    // user.role = 'ROLE_USER';
    // user.image = 'null';


    if (!email || !password) {
        res.status(403).send({message: 'Completa el formulario'});
        return;
    }

    bycript.hash(params.password, null, null, (err, hash)=> {
        if (err) {
            res.status(500).send({message: 'Completa el formulario'});
            return;
        }

        user.password = hash;
        user.save((err, userStored)=>{
            if(err) {
                res.status(500).send({message: 'Error al guardar el usario'});
                return;
            }
            if(!userStored) {
                res.status(404).send({message: 'No se ha registrado el usuario'});
                return;
            }
            res.status(200).send({user: userStored});
        })
    })
    
    // if( params.password ) {
    //     // Encriptar contraseña
    //     bycript.hash(params.password, null, null, (err, hash)=> {
    //         user.password = hash;
    //         if (user.name != null && user.surname != null && user.email != null) {
    //             user.save((err, userStored)=>{
    //                 if(err) {
    //                     res.status(500).send({message: 'Error al guardar el usario'});
    //                 } else {
    //                     if(!userStored) {
    //                         res.status(404).send({message: 'No se ha registrado el usuario'});
    //                     } else {
    //                         res.status(200).send({user: userStored});
    //                     }
    //                 }
    //             })
    //         } else {
    //             res.status(403).send({message: 'Completa el formulario'});
    //         }
    //     })
    // } else {
    //     res.status(500).send({message: 'Introduce la contraseña'});
    // }
}

module.exports = {
    pruebas,
    saveUser,
}