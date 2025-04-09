import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { createUserUserCase } from "./userCases/create-userCase";
import { PrismaService } from "src/infra/prisma/prisma.service";


@Module({
    imports:[],
    controllers:[UserController],
    providers:[createUserUserCase,PrismaService]
})

export class userModule{

}