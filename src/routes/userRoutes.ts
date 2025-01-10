import { createUser, getUser, deleteUser } from "../controllers/userController";
import { Router } from "express";

const router = Router()

router.post('/users/', createUser); //criar usuário
router.get('/users/:id', getUser); //listar um usuário
router.delete('/users/:id', deleteUser); //deletar um usuário

export default router;