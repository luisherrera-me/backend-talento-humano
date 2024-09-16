
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'persona'})
export class Persona{
@Entity({name: 'persona'})
export class Persona{
    @PrimaryGeneratedColumn()
    idpersona: Number;


    @Column()
    cedula: String;


    @Column()
    primer_nombre: String;


    @Column()
    segundo_nombre: String;


    @Column()
    primer_apellido: String;


    @Column()
    segundo_apellido: String;


    @Column()
    tipo_documento: Number;


    @Column()
    idpais: Number;


    @Column()
    iddepartamentoexpedicion: Number;


    @Column()
    idmunicipioexpedicion: Number;

    @Column({ type:'datetime', default:()=>'CURRENT_TIMESTAMP'})

    @Column({ type:'datetime', default:()=>'CURRENT_TIMESTAMP'})
    fechanacimiento: Date;
    @Column()
    idpaisnacimiento: Number;
    @Column()
    iddepartamentonacimiento: Number

    @Column()
    idmunicipionacimiento: Number

    @Column()
    nacionalidad: String;

    @Column()
    direccion: String;

    @Column()
    telefono: String;

    @Column()
    idsexo: String;

    @Column()
    idestadocivil: String;

    @Column()
    idmunicipionacimiento: Number

    @Column()
    nacionalidad: String;

    @Column()
    direccion: String;

    @Column()
    telefono: String;

    @Column()
    idsexo: String;

    @Column()
    idestadocivil: String;
}