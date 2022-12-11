import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {

    constructor(private userService : UserService, private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto);
        return user;
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByLogin(userDto.login);
        if(candidate){
            throw new HttpException('User with same login already exist', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);

        const user = await this.userService.createUser({...userDto, password : hashPassword});

        return this.generateToken(user);
    }

    async generateToken(user : User){

        const payload = {login : user.login, id : user.id}

        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto : CreateUserDto){
        const user = await this.userService.getUserByLogin(userDto.login);
        const passwordEqual = await bcrypt.compare(userDto.password, user.password);

        if(user && passwordEqual){
            return this.generateToken(user);
        }

        throw new UnauthorizedException("Password or login is not correct");
    }
}
