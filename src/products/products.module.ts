import { Module } from "@nestjs/common";
import { productsController } from "./products.controller";


@Module({
    imports:[],
    controllers:[productsController],
    providers:[]
})
export class productsModule{

}