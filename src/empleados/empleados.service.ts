import { Injectable } from '@nestjs/common';
import { createEmpleadoDto } from './dto/CreateEmpleadoDto';

@Injectable()
export class EmpleadosService {


    async create(empleado: createEmpleadoDto){

    }
}
