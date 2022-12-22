import express, { Router } from "express";
import livros from './livrosRoute.js';
import authors from './authorRoute.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({title: "Curso de node"})
  })

  app.use(
    express.json(),
    livros,
    authors
  )
}

export default routes