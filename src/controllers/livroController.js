import livro from "../models/Livros.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha na requisição` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha na requisição do livro` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ messagem: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ messagem: "Livro atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ messagem: `${error.messagem} - falha na ataulização` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ messagem: "livro deleteado com sucesso" });
    } catch (error) {
      res
        .stataus(500)
        .json({ messagem: `${error.messagem} - falha ao deletar o livro` });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livroPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livroPorEditora);
    } catch (error) {
      res.stataus(500).json({ messagem: `${error.messagem} - falha na busca` });
    }
  }
}

export default LivroController;
