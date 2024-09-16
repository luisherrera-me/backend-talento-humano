import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsusarioDto } from './dto/create-usuario.dto';
import { UpdateUsusarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(Usuario) private usuariosRepoaitory: Repository<Usuario>
    ){}

    create(usuario: CreateUsusarioDto){
        const newUsusario =  this.usuariosRepoaitory.create(usuario);
        return this.usuariosRepoaitory.save(newUsusario);
    }

    async actualizar(idUsuario:number, user:UpdateUsusarioDto){
        // Obtener informacion del usuario con el ID
        const UserFound = await this.usuariosRepoaitory.findOneBy({idUsuario:idUsuario}) 

        // Verficar inFomación usuario existente 
        if(!UserFound){
            return new HttpException ('El usuario no existe', HttpStatus.NOT_FOUND);
        }

        //Asignar información a actualizar a la información anterior
        const UpdateUser = Object.assign(UserFound, user)

        //Información actualizada
        return this.usuariosRepoaitory.save(UpdateUser)
    }
    

    findAll(){
        return this.usuariosRepoaitory.find()
    }
}
