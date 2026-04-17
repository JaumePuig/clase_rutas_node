import { userService } from "../services/user.service.js";
export function userController(req, res){
    const mensaje = userService();
    res.send(mensaje);
}