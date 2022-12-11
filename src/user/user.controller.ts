import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ChangeUserDto } from './dto/change-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @UseGuards(JwtAuthGuards)
    @Get()
    getAll(){
        const user = this.userService.getAllUser();
        return user;
    }

    @UseGuards(JwtAuthGuards)
    @Get(':id')
    getOne(@Param('id') id : number){
        const user = this.userService.getUserById(id);
        return user;
    }

    @UseGuards(JwtAuthGuards)
    @Put(':id')
    changeOne(@Param('id') id : number, @Body() userDto : ChangeUserDto){
        const user = this.userService.changeUser(id, userDto)
        return user;
    }

    @UseGuards(JwtAuthGuards)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        const user = this.userService.remove(id)
        return user;
    }
}
