var express = require('express');
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});

router.post('/jobOffer', function(req, res) {
    //Incluya acá la conexión a la BD, obtenga los parámetros, guarde la oferta en la BD y retorne un mensaje al cliente. 
  });

module.exports = router;