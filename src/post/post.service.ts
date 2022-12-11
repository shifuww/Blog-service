import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangePostDto } from './dto/change-post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './post.entity';

@Injectable()
export class PostService {

    constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>){}

    async create(postDto : CreatePostDto){
        return await this.postsRepository.save(postDto);
    }

    async findUserPosts(id : number){
        return await this.postsRepository.find({
            where: {
                userId : id
            }
        })
    }

    async findOnePost(id : number){
        return await this.postsRepository.findOneBy({id})
    }

    async updatePost(id : number, postDto : ChangePostDto){
        const post = await this.findOnePost(id);

        Object.assign(post, postDto);

        return await this.create(post)
    }

    async remove(id : number){
        return await this.postsRepository.delete({id});
    }
}
