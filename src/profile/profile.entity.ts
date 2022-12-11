import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Profile {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @ManyToOne(() => User, (users) => users.id)
  @JoinColumn({name : 'userId'})
  users: User;

  @Column()
  userId : number;
}