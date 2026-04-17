import express from "express";
import { userController, userControllerCreate, userControllerUpdate, userControllerDelete } from "../controllers/user.controller.js";
const router = express.Router();
export default router;

router.post("/perfil", userController);
router.post("/crear", userControllerCreate);
router.put("/actualizar", userControllerUpdate);
router.delete("/eliminar", userControllerDelete);


