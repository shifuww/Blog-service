import { Posts } from '../post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Profile } from 'src/profile/profile.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {

  @ApiProperty({example: 1, description: 'uniq number'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
  @Column()
  login: string;

  @ApiProperty({example: 'p23214', description: 'password'})
  @Column()
  password: string;

  @OneToMany(() => Posts, (post) => post.users)
    post : Posts[];

    @OneToMany(() => Profile, (profile) => profile.users)
    profile : Posts[];
}