import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { createEmpleadoDto } from './dto/createEmpleadoDto';

@Controller('empleados')
export class EmpleadosController {
    constructor(private empleadoService: EmpleadosService){}
    
    @UseGuards(JwtAuthGuard)
    @Post()// http://localhost/usuarios -> Post
    registroEmpleado(@Body() usuario: createEmpleadoDto){
        return this.empleadoService.createUsuario(usuario)
    }

    
    @UseGuards(JwtAuthGuard)
    @Get()// http://localhost/usuarios -> GET
    findAll(){
        return this.empleadoService.findAll();
    }
}
