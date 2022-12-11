import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto{

    @ApiProperty({example: 'path', description: 'image name'})
    image : string;

    @ApiProperty({example: 1, description: 'user.id fk'})
    readonly userId: number;
}