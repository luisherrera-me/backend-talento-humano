import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class loginAuthDto{

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message: 'la muy corta'})
    control: string;
}