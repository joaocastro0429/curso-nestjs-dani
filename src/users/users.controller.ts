import { Controller, Get, Param, Query } from '@nestjs/common'
type ParamUser={
    id:string
}

type QueryUser={
    p:string
    r:string
}
@Controller()
export class UserController{
    // @Get("/helloUser")
    // helloUser(){
    //     return "Seja bem Vindo(a) ao curso de nestjs"
    // }

    // parmetros 
    
    /**
     * http://localhost:3000/users/123456
     */
    // @Get('/users/:id')
    // findById(@Param() params:ParamUser){
    //     return "Usuário do Id: "+params.id
    // }

    // Query params 

    /**
     * http://localhost:3000/users?p=10&r=100
     */

    @Get('/users/pages')
    findByPages(@Query() queries: QueryUser) {
      return "Queries: " + queries.r
    }
  }
  





