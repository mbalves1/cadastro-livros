import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = (req, res) => {
    livros.find()
      .populate('author')
      .exec((err, livros) => {
      res.status(200).json(livros)
    })
  }

  static listarLivrosPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id)
      .populate('author', 'name')
      .exec((err, livros) => {
      if (err) {
        res.status(400).send({message: `${err.message} - id do livro não localizado`})
      } else {
        res.status(200).send(livros)
      }
    })
  }

  static cadastrarLivro = (req, res) => {
    const livro = new livros(req.body);

    livro.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - loading failed`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })

  }

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Livro foi atualizado com success'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarLivroPorEditora = (req, res) => {
    const publishing = req.query.publishing

    livros.find({"publishing": publishing}, {}, (err, livros) => {
      res.status(200).send(livros);
    })
  }

};

export default LivroController;