import { dbConfig } from "../config/db.config.js";
export async function userModel() {
  const conexion = await dbConfig();
  if (!conexion) return { error: "DB connection failed" };
  const Schema = conexion.Schema;
  const users = new Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    Edad: { type: Number, required: true },
    Direccion: { type: String, required: true },
  });

  const userModelo =
    (await conexion.models["users"]) || conexion.model("users", users, "users");
  await userModelo.init();
  return userModelo;
}
