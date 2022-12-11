import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {ConfigModule} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { Posts } from './post/post.entity';
import { ProfileModule } from './profile/profile.module';
import { FileModule } from './file/file.module';
import { Profile } from './profile/profile.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

@Module({
  imports: [ConfigModule.forRoot({envFilePath: '.env'}),
            ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: process.env.DB_HOST,
              port: Number(process.env.DB_PORT),
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_NAME,
              entities: [User, Posts, Profile],
              synchronize: true,
              }),
            UserModule, AuthModule, PostModule, ProfileModule, FileModule], 
})
export class AppModule {}
