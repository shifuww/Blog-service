import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  like: number;

  @Column()
  dislike: number;

  @ManyToOne(() => User, (users) => users.id)
  @JoinColumn({name : 'userId'})
  users: User;

  @Column()
  userId : number;
}