import { ApiProperty } from "@nestjs/swagger";

export class ChangeUserDto {

    @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
    login?: string;

    @ApiProperty({example: 'p23214', description: 'password'})
    password?: string;
}