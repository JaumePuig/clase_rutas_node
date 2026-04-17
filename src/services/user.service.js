import e from "express";
import { userModel } from "../models/user.model.js";
export async function userService(nombre) {
  const usuario = await userModel();
  return await usuario.findOne({ 'nombre': nombre });
}

export async function userCreateService({ nombre, apellidos, Edad, Direccion }) {
  const usuario = await userModel();
  return await usuario.create({ nombre, apellidos, Edad, Direccion });
}