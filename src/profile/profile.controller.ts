import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ChangeProfileDto } from './dto/change-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

    constructor(private profileService : ProfileService){}

    @UseGuards(JwtAuthGuards)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProfile(@Body() dto: CreateProfileDto, @UploadedFile() image){
        return this.profileService.create(dto, image);
    }

    @UseGuards(JwtAuthGuards)
    @Put(':id')
    @UseInterceptors(FileInterceptor('image'))
    changeProfile(@Param('id') id: number, @UploadedFile() image){
        return this.profileService.change(id, image);
    }

    @UseGuards(JwtAuthGuards)
    @Get()
    getAll(){
        return this.profileService.getAll()
    }

    @UseGuards(JwtAuthGuards)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        return this.profileService.remove(id)
    }
}
