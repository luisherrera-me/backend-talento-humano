import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsusarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usersService: UsuariosService){}

    // GET    -> Optener
    // POST   -> Crear
    // PUT    -> Actualizar
    // DELETE -> Eliminar


    @Get()// http://localhost/usuarios -> GET
    findAll(){
        return this.usersService.findAll();
    }

    @Post() // http://localhost/usuarios -> POST
    create(@Body() usuario: CreateUsusarioDto){
        return this.usersService.create(usuario);
    }

}
