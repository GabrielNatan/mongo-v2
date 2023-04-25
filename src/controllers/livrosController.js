import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res) => {
    const response = await livros.find()
    res.status(200).json(response)
  } 

  static listarLivrosPorId = async (req, res) => {
    const id = req.params.id
    const response = await livros.findById(id)
    res.status(200).json(response)
  } 
  

  static cadastrarLivro = async (req, res)=>{
    const livro = new livros(req.body)
    
    const response = await livro.save()

    console.log('Response ==> ',response)
    
    res.json({message: 'foi'})
}
    static atualizarLivro = async (req,res)=>{
        const id = req.params.id;

        const response = await livros.findByIdAndUpdate(id, {$set: req.body})
        
        console.log(response)
        
        res.json({message: true})
    }

    static excluirLivro = async (req,res)=>{
        const id = req.params.id
        const response = await livros.findByIdAndDelete(id)
        res.status(200).json({message:true})
    }
}

export default LivroController
