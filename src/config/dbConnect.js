import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.BD_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaNaDatabase;
