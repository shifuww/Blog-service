import { ApiProperty } from "@nestjs/swagger";

export class ChangePostDto {

    @ApiProperty({example: 'some text', description: 'just info'})
    readonly content?: string;

    @ApiProperty({example: 125, description: 'count of likes'})
    readonly like? : number;

    @ApiProperty({example: 12, description: 'count of dislikes'})
    readonly dislike?: number;

}