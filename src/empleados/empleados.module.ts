import { Module } from '@nestjs/common';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService]
})
export class EmpleadosModule {}
