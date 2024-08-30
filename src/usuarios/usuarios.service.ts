import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsusarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario) private usuariosRepoaitory: Repository<Usuario>
    ){}

    create(usuario: CreateUsusarioDto){
        const newUsusario =  this.usuariosRepoaitory.create(usuario);
        return this.usuariosRepoaitory.save(newUsusario);
    }
}
