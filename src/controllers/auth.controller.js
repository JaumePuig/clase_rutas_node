import { registerUserService } from "../services/auth.service.js";
export async function registerUser(req, res) {
  const { nombre, apellidos, Edad, Direccion } = req.body;
  //const userData = { "nombre": nombre, "apellidos": apellidos, "Edad": Edad, "Direccion": Direccion };
  const mensaje = await registerUserService(nombre, apellidos, Edad, Direccion);
  res.send(mensaje);
}