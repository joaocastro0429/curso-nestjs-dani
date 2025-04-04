import { Controller, Get } from "@nestjs/common";


@Controller()
export class productsController{
  
    @Get("/create")
    products(){
        return "lista de produtos"
    }

}