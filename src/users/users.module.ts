import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa el repositorio de TypeORM para la entidad User
  providers: [UsersService], // Asegúrate de que UsersService esté en los proveedores
  controllers: [UsersController],
})
export class UsersModule { }
