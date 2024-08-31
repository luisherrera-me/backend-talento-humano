import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUsusarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usersService: UsuariosService){}

    // GET    -> Optener
    // POST   -> Crear
    // PUT    -> Actualizar
    // DELETE -> Eliminar


    @UseGuards(JwtAuthGuard)
    @Get()// http://localhost/usuarios -> GET
    findAll(){
        return this.usersService.findAll();
    }

    @Post() // http://localhost/usuarios -> POST
    create(@Body() usuario: CreateUsusarioDto){
        return this.usersService.create(usuario);
    }

}
