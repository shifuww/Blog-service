import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {

    @ApiProperty({example: 'some text', description: 'just info'})
    readonly content: string;

    @ApiProperty({example: 125, description: 'count of likes'})
    readonly like : number;

    @ApiProperty({example: 12, description: 'count of dislikes'})
    readonly dislike : number;

    @ApiProperty({example: 1, description: 'fk of user table'})
    readonly userId: number;

}