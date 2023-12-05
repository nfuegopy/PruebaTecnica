import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Usuarios')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nombreCompleto: string;

    @Column({ length: 50, unique: true })
    nombreUsuario: string;

    @Column({ length: 255, unique: true })
    email: string;

    @Column({ length: 255 })
    pass: string;
}

