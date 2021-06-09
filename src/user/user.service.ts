import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}

      create(createInputDTO: CreateUserInput): Promise<UserEntity>{
          const user : UserEntity = createInputDTO;
          return this.userRepository.save(user);
      }
    
      findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
      }
    
      findOne(id: string): Promise<UserEntity> {
        return this.userRepository.findOne(id);
      }

      findOneByUsername(username: string): Promise<UserEntity>{
        return this.userRepository.findOne({username: username})
      }
}