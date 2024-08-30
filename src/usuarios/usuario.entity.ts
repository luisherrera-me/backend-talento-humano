import { hash } from "bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class Usuario{
    @PrimaryGeneratedColumn()
    idUsuario: number;
    @Column()
    nombres: string;
    @Column()
    sexo: string;
    @Column()
    usuario: string;
    @Column()
    control: string;
    @Column({ unique: true })
    email: string;
    @Column()
    estado: string;
    @Column()
    tipousuario: string;

    @BeforeInsert()
    async hashPassword() {
        this.control = await hash(this.control, Number(process.env.HASH_SALT));
    }

}