import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function registerUserService(nombre, apellidos, Edad, Direccion) {
  try {
    const usuario = await userModel();

    //ciframos direccion
    const hashedDireccion = await bcrypt.hash(Direccion, saltRounds);

    const nuevoUsuario = await new usuario({
      nombre: nombre,
      apellidos: apellidos,
      Edad: Edad,
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
