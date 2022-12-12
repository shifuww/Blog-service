import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length } from "class-validator";

export class CreatePostDto {

    @ApiProperty({example: 'some text', description: 'just info'})
    @IsString({message: "must be string"})
    @Length(9, 100)
    readonly content?: string;

    @IsNumber({}, {message: 'must be a number'})
    @ApiProperty({example: 125, description: 'count of likes'})
    readonly like? : number;

    @IsNumber({}, {message: 'must be a number'})
    @ApiProperty({example: 12, description: 'count of dislikes'})
    readonly dislike?: number;

    @IsNumber({}, {message: 'must be a number'})
    @ApiProperty({example: 1, description: 'fk of user table'})
    readonly userId: number;

}