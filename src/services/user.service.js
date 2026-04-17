import { userModel } from "../models/user.model.js";
export function userService(req, res) {
    const model = userModel();
    return model;
}