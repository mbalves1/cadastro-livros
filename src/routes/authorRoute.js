import express from "express";
import AuthorsController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/authors", AuthorsController.listarAuthors)
  .get("/authors/:id", AuthorsController.listarAuthorsPorId)
  .post("/authors", AuthorsController.cadastrarAuthor)
  .put("/authors/:id", AuthorsController.atualizarAuthor)
  .delete("/authors/:id", AuthorsController.excluirAuthor)


export default router;