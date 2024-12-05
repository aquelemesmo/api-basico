import { createUser, getUser, deleteUser, getAllUser } from "../controllers/userController";
import { Router } from "express";

const router = Router()

router.post('/users/', createUser); //criar usuário
router.get('/users/', getAllUser); //listar todos os usuários
router.get('/users/:id', getUser); //listar um usuário
router.delete('/users/:id', deleteUser); //deletar um usuário

export default router;