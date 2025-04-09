import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { createUserUserCase } from './userCases/create-userCase'
import { userModule } from './user.module'
import { CreateUserDTO } from './dto/user.dto'
type ParamUser={
    id:string
}

type QueryUser={
    p:string
    r:string
}

type BodyUser={
  name:String,
  age:number
}
@Controller("/users")
export class UserController{
  constructor(private createUserUserCase: createUserUserCase) {}    // // @Get("/helloUser")
    // // helloUser(){
    // //     return "Seja bem Vindo(a) ao curso de nestjs"
    // // }

    // // parmetros 
    
    // /**
    //  * http://localhost:3000/users/123456
    //  */
    // // @Get('/users/:id')
    // // findById(@Param() params:ParamUser){
    // //     return "Usuário do Id: "+params.id
    // // }

    // // Query params 

    // /**
    //  * http://localhost:3000/users?p=10&r=100
    //  */

    // @Get('/users/pages')
    // findByPages(@Query() queries: QueryUser) {
    //   return "Queries: " + queries.r
    // }

    // /**
    //  * http://localhost:3000/users/123456
    //  */

    // @Post("/create")
    // create(@Body()data:BodyUser){
    //   return {
    //     ...data,
    //     id:randomUUID()
    //   }
    // }

    @Post()
    create(@Body()data:CreateUserDTO){
      try{
        console.log(this.createUserUserCase.execute(data))
      return this.createUserUserCase.execute(data)

      
      }catch(err){
        throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
      }
      

    }
  }
  





