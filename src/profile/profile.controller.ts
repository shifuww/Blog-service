import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ValidationPipes } from 'src/pipes/validation-pipes';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {

    constructor(private profileService : ProfileService){}
    
    @ApiOperation({summary : 'Create profile'})
    @ApiResponse({status: 201, type: Profile})
    @UseGuards(JwtAuthGuards)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProfile(@Body() dto: CreateProfileDto, @UploadedFile() image){
        return this.profileService.create(dto, image);
    }

    @ApiOperation({summary : 'Change profile'})
    @ApiResponse({status: 201, type: Profile})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Put(':id')
    @UseInterceptors(FileInterceptor('image'))
    changeProfile(@Param('id') id: number, @UploadedFile() image){
        return this.profileService.change(id, image);
    }

    @ApiOperation({summary : 'Get all profiles'})
    @ApiResponse({status: 200, type: Profile})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Get()
    getAll(){
        return this.profileService.getAll()
    }

    @ApiOperation({summary : 'Get one profiles'})
    @ApiResponse({status: 200, type: Profile})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Get(':id')
    getOne(@Param('id') id : number){
        return this.profileService.getOne(id);
    }

    @ApiOperation({summary : 'delete profile'})
    @ApiResponse({status: 200, type: Profile})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        return this.profileService.remove(id)
    }
}
