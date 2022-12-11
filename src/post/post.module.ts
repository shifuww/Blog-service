import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/user/user.entity';
import { PostController } from './post.controller';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@Module({
  controllers: [PostController], 
  providers: [PostService],
  imports: [TypeOrmModule.forFeature([User, Posts]),
            AuthModule],
  exports: [TypeOrmModule]
})
export class PostModule {}
