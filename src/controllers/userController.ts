import { Request, Response } from "express";
import { User } from "../models/user";

export const createUser = async(req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body;

        if(!name || !email || !age) {
            res.status(400).json({message: 'Por favor, preencha todos os campos (name, email, age)'});
            return;
        }

        const user = await User.create({name, email, age});
        res.status(201).json({message: "Usuário criado com sucesso! ID: " + user.id});
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const getUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: 'Usuário não encontrado!'});
        }
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const getAllUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findAll();
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: 'Usuário não encontrado!'});
        }
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if(user) {
            await user.destroy();
            res.status(200).json({message: 'Usuário deletado com sucesso!'});
        } else {
            res.status(404).json({message: 'Usuário não encontrado!'});
        }
    } catch(error) {
        res.status(400).json({message: error});
    }
}