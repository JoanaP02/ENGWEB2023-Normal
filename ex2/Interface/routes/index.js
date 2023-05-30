var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/plantas', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15031/")
    .then(dados=>{
      res.render('listaDB', { plantas: dados.data });
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de exames" });
    })
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15031/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('perfil', { exame: dados.data });
      })
      .catch(erro=>{
    
      })

  
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15031/especies/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('perfil', { exame: dados.data });
      })
      .catch(erro=>{
    
      })

  
});

module.exports = router;
