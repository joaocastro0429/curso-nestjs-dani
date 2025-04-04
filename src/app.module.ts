import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { userModule } from './users/user.module';
import { productsModule } from './products/products.module';

@Module({
  imports: [userModule,AppModule,productsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
