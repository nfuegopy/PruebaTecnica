import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        console.log(createUserDto); // Log para depuración
        if (!createUserDto.nombreCompleto) {
            throw new Error('El nombre completo es requerido');
        }
        // Aquí deberías hashear la contraseña antes de guardarla
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }


    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOne({ where: { id: id } });
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        await this.usersRepository.update(id, updateUserDto);
        return this.usersRepository.findOne({ where: { id: id } });
    }


    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
