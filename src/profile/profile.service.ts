import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { triggerAsyncId } from 'async_hooks';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { ChangeProfileDto } from './dto/change-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {

    constructor(@InjectRepository(Profile) private profileRepository : Repository<Profile>,
                                            private fileService: FileService){}

    async create(dto: CreateProfileDto, image : any){
        const fileName = await this.fileService.createFile(image);
        const post = await this.profileRepository.save({...dto, image : fileName});
        return post;
    }

    async getOne(id : number){
        return this.profileRepository.findOneBy({id});
    }

    async getAll(){
        return this.profileRepository.find();
    }

    async change(id : number, image : any){
        const profile = await this.getOne(id);
        const fileName = await this.fileService.createFile(image);
        const post = await this.profileRepository.save({...profile, image : fileName});
        return post;
    }

    async remove(id: number){
        return this.profileRepository.delete({id});
    }
}
