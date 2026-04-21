import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function registerUserService(userData) {
  try {
    const usuario = await userModel();

    //ciframos direccion
    const hashedDireccion = await bcrypt.hash(userData.Direccion, saltRounds);

    const nuevoUsuario = await new usuario({
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      Edad: userData.Edad,
      Direccion: hashedDireccion,
    });

    nuevoUsuario.save();

    return {
        status: 201,
        message:"usuario guardado"
    }

    //return await usuario.create({ nombre, apellidos, Edad, Direccion });
  } catch (e) {
    console.log(e);
    return {
            status: 409,
            message:"usuario NO guardado"
        }
  }
}
