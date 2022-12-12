import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ChangeProfileDto{
    
    @ApiProperty({example: 'path', description: 'image name'})
    @IsString({message: 'Must be string'})
    image : string;
}