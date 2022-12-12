import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ValidationPipes } from 'src/pipes/validation-pipes';
import { ChangePostDto } from './dto/change-post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@ApiTags('Posts')
@Controller('post')
export class PostController {

    constructor(private postService: PostService){}

    @ApiOperation({summary : 'Create post'})
    @ApiResponse({status: 201, type: Posts})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Post()
    createPost(@Body() postDto : CreatePostDto){
        return this.postService.create(postDto);
    }

    @ApiOperation({summary : 'Get user posts'})
    @ApiResponse({status: 200, type: [Posts]})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Get(':id')
    getAllPostUser(@Param('id') id : number){
        return this.postService.findUserPosts(id)
    }

    @ApiOperation({summary : 'Get one post'})
    @ApiResponse({status: 200, type: Posts})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Get(':id')
    getOne(@Param('id') id : number){
        return this.postService.findOnePost(id)
    }

    @ApiOperation({summary : 'Change one post'})
    @ApiResponse({status: 201, type: Posts})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Put(':id')
    changeOne(@Param('id') id : number, @Body() postDto : ChangePostDto){
        return this.postService.updatePost(id, postDto);
    }

    @ApiOperation({summary : 'Delete one post'})
    @ApiResponse({status: 200, type: Posts})
    @UseGuards(JwtAuthGuards)
    @UsePipes(ValidationPipes)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        return this.postService.remove(id)
    }
}
