import { Request, Response } from "express";
import { Product } from "../models/product";
import { User } from "../models/user";

export const createProduct = async(req: Request, res: Response) => {
    try {
        const {name, price, type, owner} = req.body;

        if(owner) {
            let user = await User.findByPk(owner);
            
            if(!user) {
                res.status(404).json({message: 'Usuário não encontrado!'});
                return;
            }
        }

        if(!name || !price || !type || !owner) {
            res.status(400).json({message: 'Por favor, preencha todos os campos (name, price, type)'});
            return;
        }

        const product = await Product.create({name, price, type, owner});
        res.status(201).json(product);
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const getProduct = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if(product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({message: 'Produto não encontrado!'});
        }
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const getAllProduct = async(req: Request, res: Response) => {
    try {
        const product = await Product.findAll();
        if(product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({message: 'Produto não encontrado!'});
        }
    } catch(error) {
        res.status(400).json({message: error});
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if(product) {
            await product.destroy();
            res.status(200).json({message: 'Produto deletado com sucesso!'});
        } else {
            res.status(404).json({message: 'Produto não encontrado!'});
        }
    } catch(error) {
        res.status(400).json({message: error});
    }
}