import { Request, Response } from "express";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../dtos/user.dto";

const userModel = new UserModel();
                                                                       
export class UserController{

    async create(req: Request, res: Response): Promise<Response> {
        const UserData = req.body as UserDTO;
        try{
            const newUser = await userModel.create(UserData)
            return res.status(201).json(newUser)
        }
        catch(error){
            console.error("Error creating user:",error)
            return res.status(500).json({message: "Erro ao criar usuário"})
        }
    }

    async getUser(req: Request, res: Response){
        const userId = parseInt(req.params.id)
        try{
            const user = await userModel.getUser(userId)
            if(!user){
                return res.status(404).json({message: "usuario nao encontrado"})
            }
            return res.status(200).json(user)
        }catch(error){
            console.error("Error fetching user:", error);
            return res.status(500).json({ message: "Erro ao buscar usuário" })
        }
    }

    async getUserAll(req:Request, res: Response){
        try{
            const users = await userModel.getUserAll()
            return res.status(200).json(users)
        }catch(error){
            console.error("erro ao buscar usuarios", error)
            return res.status(500).json({message: "Erro ao buscar usuários"})
        }
    }

    async updateUser(req:Request, res: Response){
        const userId = parseInt(req.params.id)
        try{
            const userData = req.body
            const updateUser = await userModel.updateUser(userId, userData)
            return res.status(200).json(updateUser)
        }catch(error){
            console.error("erro ao atualizar o usuário", error)
            return res.status(500).json({message: "Erro ao atualizar usuário"})
        }
    }
    async deleteUser(req: Request, res: Response){
        const userId = parseInt(req.params.id)
        try{
            await userModel.deleteUser(userId)
            return res.status(204).send()
        }catch(error){
            console.error("erro ao deletar o usuário", error)
            return res.status(500).json({message: "Erro ao deletar usuário"})
        }
    }

    async login(req:Request, res: Response){
        const {email, password} = req.body
        try{
            const user = await userModel.getUserByEmail(email)
            if(!user){
                return res.status(404).json({message: "Usuário não encontrado"})
            }
            if(user.password !== password){
                return res.status(401).json({message: "Senha incorreta"})
            }
            return res.status(200).json({message: "Login bem-sucedido", userId: user.id});
        }catch(error){
            console.error('Erro ao fazer login:', error);
            return res.status(500).json({message: "Erro ao fazer login"})
        }
    }
}

/*
req.body{
    id: 01,
    email: pedro@gmai.com,
    senha: 123456,
    data: 17/0602023
}
*/