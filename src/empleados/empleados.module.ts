import { Module } from '@nestjs/common';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './empleado.entity';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService, JwtStrategy]
})
export class EmpleadosModule {}
