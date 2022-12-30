import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaController } from './prueba/controller/prueba.controller';
import { PruebaModule } from './prueba/prueba.module';
import { PruebaService } from './prueba/prueba.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PruebaModule,
    UsersModule,
  ],
  controllers: [PruebaController],
  providers: [PruebaService]
})
export class AppModule {}
