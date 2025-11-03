import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha na requisição do autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ messagem: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ messagem: "Autor atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha na ataulização` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ messagem: "autor deleteado com sucesso" });
    } catch (error) {
      res
        .stataus(500)
        .json({ messagem: `${error.messagem} - falha ao deletar o autor` });
    }
  }
}

export default AutorController;
