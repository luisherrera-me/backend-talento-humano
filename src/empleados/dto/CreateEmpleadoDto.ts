import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createEmpleadoDto{
    cedula: String;

    @IsNotEmpty()
    @IsString()
    primer_nombre: String;

    @IsNotEmpty()
    @IsString()
    segundo_nombre: String;

    @IsNotEmpty()
    @IsString()
    primer_apellido: String;

    @IsNotEmpty()
    @IsString()
    segundo_apellido: String;

    @IsNotEmpty()
    @IsNumber()
    tipo_documento: Number;

    @IsNotEmpty()
    @IsNumber()
    idpais: Number;

    @IsNotEmpty()
    @IsNumber()
    iddepartamentoexpedicion: Number;

    @IsNotEmpty()
    @IsNumber()
    idmunicipioexpedicion: Number;

    @IsNotEmpty()
    @IsNumber()
    idpaisnacimiento: Number;

    @IsNotEmpty()
    @IsNumber()
    iddepartamentonacimiento: Number

    @IsNotEmpty()
    @IsNumber()
    idmunicipionacimiento: Number

    @IsNotEmpty()
    @IsString()
    nacionalidad: String;

    @IsNotEmpty()
    @IsString()
    direccion: String;

    @IsNotEmpty()
    @IsString()
    telefono: String;

    @IsNotEmpty()
    @IsString()
    idsexo: String;

    @IsNotEmpty()
    @IsString()
    idestadocivil: String;
}