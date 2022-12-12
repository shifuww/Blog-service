import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class ChangeUserDto {

    @IsString({message : 'Must be string'})
    @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
    login?: string;

    @IsString({message : 'Must be string'})
    @Length(4, 16, {message : 'Must be more than 4 and less then 16'})
    @ApiProperty({example: 'p23214', description: 'password'})
    password?: string;
}