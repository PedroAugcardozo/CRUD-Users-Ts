import { Request, Response } from "express";
import { UserModel } from "../model/user.model";

const userModel = new UserModel();

export class validacao{
    async validarLogin(req: Request, res: Response){
        try {
            const userId = parseInt(req.params.id);
            const user = await userModel.getUser(userId);
            if(!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            if(user.password !== req.body.password && user.email !== req.body.email) {
                return res.status(401).json({ message: "Senha e/ou email incorretos" });
            }
        }catch (error) {
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }

    async validarCriacao(req: Request, res: Response){
        try{
            const {name, email, password, validPassword} = req.body;
            if(password !== validPassword){
                return res.status(400).json({message: "as senhas não conferem"})
            }
            if(!name || !email || !password){
                return res.status(400).json({message: "Todos os campos são obrigatórios"})
            }
        }catch(error){
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }

    async ValidarAtualizacao(req: Request, res: Response){
        const {name, email, password} = req.body;
        const userId = parseInt(req.params.id);
        try{
            
        }catch(error){
            res.status(500).json({message: "erro interno no servidor"})
        }
    }

}