var express = require('express');
var router = express.Router();
var Planta = require('../controler/planta')

router.get('/plantas', function(req, res, next) {
  if(req.query.especie){
    Planta.especiePlanta(req.query.especie)
        .then(especies=>{
          res.json(especies)
        })
        .catch(erro=>{
          res.status(602).json({ message: "Erro a obter especies",error:erro })
        })
  }
  else if(req.query.implant){
    Planta.implantacaoPlanta(req.query.implant)
        .then(implantacoes=>{
          res.json(implantacoes)
        })
        .catch(erro=>{
          res.status(602).json({ message: "Erro a obter implantacoes",error:erro })
        })
  }
  else{
    Exame.list()
      .then(plantas=>{
        res.json(plantas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de plantas",error:erro })
      })
  }
});

router.get('plantas/freguesias', function(req, res, next) {
  Planta.freguesiasPlanta()
    .then(freguesias=>{
      res.json(freguesias)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter freguesias",error:erro })
    })
});

router.get('plantas/especies', function(req, res, next) {
  Planta.especiesPlanta()
    .then(especies=>{
      res.json(especies)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter especies",error:erro })
    })
});

router.post('/plantas', function(req, res, next) {
  Planta.addPlanta(req.body)
    .then(planta=>{
      res.status(201).json(planta)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar planta",error:erro })
    })
});

router.delete('/plantas/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar plantas",error:erro })
    })
});

module.exports = router;
