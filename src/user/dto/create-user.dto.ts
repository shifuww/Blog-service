import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
    readonly login: string;

    @ApiProperty({example: 'p23214', description: 'password'})
    password: string;
}