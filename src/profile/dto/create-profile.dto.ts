import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProfileDto{

    @ApiProperty({example: 'path', description: 'image name'})
    @IsString({message: 'Must be string'})
    image : string;

    @ApiProperty({example: 1, description: 'user.id fk'})
    @IsNumber({}, {message : 'must be number'})
    readonly userId: number;
}