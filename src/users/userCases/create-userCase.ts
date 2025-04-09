import { PrismaService } from "src/infra/prisma/prisma.service"
import { CreateUserDTO } from "../dto/user.dto"
import { Injectable } from "@nestjs/common"
import {hash} from 'bcrypt'




@Injectable()
export class createUserUserCase{
    constructor(private prisma:PrismaService){}
   async execute(data:CreateUserDTO){
    const user = await this.prisma.users.findFirst({
        where: {
          OR: [{ username: data.username }, { email: data.email }],
        },

      })
      
      if (user) {
        throw new Error("User already exists")
      }
      const passwordHash = await hash(data.password,10)


        return await this.prisma.users.create({
            data:{
                ...data,
                password: passwordHash,
            },
        })
    

    }
}