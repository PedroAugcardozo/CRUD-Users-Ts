import { Request, Response } from "express";
import { UserModel } from "../model/user.model";
import { UserDTO } from "../dtos/user.dto";

const userModel = new UserModel();

export class UserController{

    async create(req: Request, res: Response){
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

    
}