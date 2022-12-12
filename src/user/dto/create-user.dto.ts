import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @IsString({message: 'must be string'})
    @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
    readonly login: string;

    @IsString({message: 'must be string'})
    @Length(4, 16)
    @ApiProperty({example: 'p23214', description: 'password'})
    password: string;
}