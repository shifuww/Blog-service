import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ChangePostDto } from './dto/change-post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private postService: PostService){}

    @UseGuards(JwtAuthGuards)
    @Post()
    createPost(@Body() postDto : CreatePostDto){
        return this.postService.create(postDto);
    }

    @UseGuards(JwtAuthGuards)
    @Get(':id')
    getAllPostUser(@Param('id') id : number){
        return this.postService.findUserPosts(id)
    }

    @UseGuards(JwtAuthGuards)
    @Get(':id')
    getOne(@Param('id') id : number){
        return this.postService.findOnePost(id)
    }

    @UseGuards(JwtAuthGuards)
    @Put(':id')
    changeOne(@Param('id') id : number, @Body() postDto : ChangePostDto){
        return this.postService.updatePost(id, postDto);
    }

    @UseGuards(JwtAuthGuards)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        return this.postService.remove(id)
    }
}
