import authors from "../models/Author.js";

class AuthorController {

  static listarAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors)
    })
  }

  static listarAuthorsPorId = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res.status(400).send({message: `${err.message} - id do Author não localizado`})
      } else {
        res.status(200).send(authors)
      }
    })
  }

  static cadastrarAuthor = (req, res) => {
    const author = new authors(req.body);

    author.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - loading failed`})
      } else {
        res.status(201).send(author.toJSON())
      }
    })

  }

  static atualizarAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Author foi atualizado com success'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: 'Author removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

};

export default AuthorController;