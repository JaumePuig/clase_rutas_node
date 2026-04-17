import { dbConfig } from "../config/db.config.js";
export async function userModel() {
  const conexion = await dbConfig();
  const Schema = conexion.Schema;
  const users = new Schema({
    nombre: String,
    apellidos: String,
    Edad: Number,
    Direccion: String,
  });

  const userModelo =
    await conexion.models["users"] || conexion.model("users", users, "users");
  

  return userModelo;
}
