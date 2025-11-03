import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livrosSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectID },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    pagina: { type: Number },
    autor: autorSchema,
  },
  { versionKey: false }
);

const livros = mongoose.model("livros", livrosSchema);

export default livros;
