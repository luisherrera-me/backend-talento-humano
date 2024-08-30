import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class registerAuthDto{

    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsString()
    sexo: string;

    @IsNotEmpty()
    @IsString()
    usuario: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: 'la muy corta'})
    control: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    tipousuario: string;
}