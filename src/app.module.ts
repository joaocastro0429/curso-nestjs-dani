import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { userModule } from './users/user.module';

@Module({
  imports: [userModule,AppModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
