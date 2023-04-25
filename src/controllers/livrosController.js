import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res) => {
    const response = await livros
                      .find()
                      .populate('autor')
                      .exec()

    res.status(200).json(response)
  } 

  static listarLivrosPorId = async (req, res) => {
    const id = req.params.id
    const response = await livros
      .findById(id)
      .populate('autor', "nome")
      .exec()
    res.status(200).json(response)
  } 
  

  static cadastrarLivro = async (req, res)=>{
    const livro = new livros(req.body)
    
    const response = await livro.save()

    res.json({message: 'foi'})
}
    static atualizarLivro = async (req,res)=>{
        const id = req.params.id;

        const response = await livros.findByIdAndUpdate(id, {$set: req.body})
        
        res.json({message: true})
    }

    static excluirLivro = async (req,res)=>{
        const id = req.params.id
        await livros.findByIdAndDelete(id)
        res.status(200).json({message:true})
    }

    static listarLivroPorEditora = async (req,res)=>{
      const editora = req.query.editora

      const response = await livros.find({'editora': editora})

      res.status(200).json(response)
    }
}

export default LivroController
