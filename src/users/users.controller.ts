import { Controller, Get } from '@nestjs/common'

@Controller()
export class UserController{
    @Get("/helloUser")
    helloUser(){
        return "Seja bem Vindo(a) ao curso de nestjs"
    }

    

}