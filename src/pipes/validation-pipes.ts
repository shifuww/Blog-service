import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exeption/validation.exeption";


@Injectable()
export class ValidationPipes implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if(errors.length){
            let message = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(',')}`
            })
            throw new ValidationException(message)
        }
    }
    
}