import { userModel } from "../models/user.model.js";
export async function registerUserService(nombre, apellidos, Edad, Direccion) {
  const usuario = await userModel();
  return await usuario.create({ nombre, apellidos, Edad, Direccion });
  //return { message: "Servicio register conectado" };
}
