import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Posts {

  @ApiProperty({example: 1, description: 'uniq number'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'some text', description: 'just info'})
  @Column()
  content: string;

  @ApiProperty({example: 100, description: 'count of likes'})
  @Column()
  like: number;

  @ApiProperty({example: 12, description: 'count of dislikes'})
  @Column()
  dislike: number;

  @ManyToOne(() => User, (users) => users.id)
  @JoinColumn({name : 'userId'})
  users: User;

  @ApiProperty({example: 1, description: 'fk of user'})
  @Column()
  userId : number;
}