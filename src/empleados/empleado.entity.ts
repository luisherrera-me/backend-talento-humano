import { Column, PrimaryGeneratedColumn } from "typeorm";

export class persona{
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
    @Column({type:'datatime', default:()=>'CURRENT_TIMESTAMP'})
    fechanacimiento: Date;
    @Column()
    idpaisnacimiento: Number;
    @Column()
    iddepartamentonacimiento: Number
}