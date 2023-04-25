import autores from "../models/Autor.js";

class AutoresController {

  static listarAutores = async (req, res) => {
    const response = await autores.find()
    res.status(200).json(response)
  } 

  static listarAutoresPorId = async (req, res) => {
    const id = req.params.id
    const response = await autores.findById(id)
    res.status(200).json(response)
  } 
  

  static cadastrArautor = async (req, res)=>{
    const autor = new autores(req.body)
    
    const response = await autor.save()

    console.log('Response ==> ',response)
    
    res.json({message: 'foi'})
}
    static atualizarAutor = async (req,res)=>{
        const id = req.params.id;

        const response = await autores.findByIdAndUpdate(id, {$set: req.body})
        
        console.log(response)
        
        res.json({message: true})
    }

    static excluirAutor = async (req,res)=>{
        const id = req.params.id
        const response = await autores.findByIdAndDelete(id)
        res.status(200).json({message:true})
    }
}

export default AutoresController
