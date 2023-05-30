var Planta = require('../models/planta')

// Planta list
module.exports.list = () =>{
    return Planta.find({},{_id:1,Freguesia:1,Espécie:1,Estado:1,"Número de Intervenções":1})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro  
                })
}

module.exports.getPlanta = id =>{
    return Planta.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.especiePlanta = especie =>{
    return Planta.find({"Espécie": especie})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.implantacaoPlanta = implantacao =>{
    return Planta.find({"Implantação": implantacao})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.freguesiasPlanta = () =>{
    return Planta.distinct("Freguesia").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.especiesPlanta = () =>{
    return Planta.distinct("Espécies").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}



module.exports.addPlanta = (planta) => {
    return Planta.collection.insertOne(planta)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.deletePlanta = id =>{
    return Planta.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
