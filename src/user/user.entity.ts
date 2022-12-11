import { Posts } from '../post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Profile } from 'src/profile/profile.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(() => Posts, (post) => post.users)
    post : Posts[];

    @OneToMany(() => Profile, (profile) => profile.users)
    profile : Posts[];
}