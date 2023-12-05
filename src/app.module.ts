import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'clon_twitter',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // En producción esto debería estar desactivado
    }),
    UsersModule,
    // ...otros módulos
  ],
  // ...controladores y servicios si es necesario
})
export class AppModule { }