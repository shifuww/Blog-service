import { ApiProperty } from "@nestjs/swagger";

export class ChangeProfileDto{
   
    @ApiProperty({example: 'path', description: 'image name'})
    image : string;
}