import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './empleado.entity';
import { Repository } from 'typeorm';
import { createEmpleadoDto } from './dto/createEmpleadoDto';
import { pid } from 'process';
import { pipe } from 'rxjs';

@Injectable()
export class EmpleadosService {
    constructor(
        @InjectRepository(Persona) private personaRepository: Repository < Persona > 
        //Indicación a bd para que cree tabla persona
    ){}

    async createUsuario (Empleado: createEmpleadoDto){
        let NewUsuario = this.personaRepository.create(Empleado)
        //Crear información del usuario
        return this.personaRepository.save(NewUsuario)
        //Guardar información del usuario
    }

    findAll(){
        return this.personaRepository.find()
    }
}


