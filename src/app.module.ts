import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // VIDA DE MY VIDA
      //port: 3306,
      username: 'admin',
      password: 'admin009',
      database: 'talentohumanosin_posesio',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
    EmpleadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}