import { UserDTO } from "../dtos/user.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export class UserModel{
    async create(userData: UserDTO){
        try{
            const createUser = await prisma.user.create({
                data:{
                    ...userData
                }
            })
        }catch(error){
            console.log("erro ao criar a tabela")
            return error
        }
    }
    async getUser(userId: number){
        return await prisma.user.findUnique({
            where: {id: userId },
        })
    }
    async getUserByEmail(email: string){
        return await prisma.user.findUnique({
            where: {email: email}
        })
    }
    async getUserAll(){
        return await prisma.user.findMany()
    }
    async updateUser(userId: number, userData: Partial<UserDTO>){
        return await prisma.user.update({
            where: { id: userId },
            data: userData,
        });
    }
    async deleteUser(userId: number){
        return await prisma.user.delete({
            where:{id: userId}
        })
    }
}
