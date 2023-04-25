import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autor", AutorController.listarAutores)
  .get("/autor/:id", AutorController.listarAutoresPorId)
  .post("/autor", AutorController.cadastrArautor)
  .put("/autor/:id", AutorController.atualizarAutor)
  .delete("/autor/:id", AutorController.excluirAutor)

export default router;   