import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationExeption } from '../exeptions/validation.exeption';

//пайпи мають два призн: 1 перетворювати вхідні данні, 2 валідація вхідних даних
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    //ф-я перетворює в потрібний для нас клас
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      // eslint-disable-next-line prefer-const
      let messages = errors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
      });
      throw new ValidationExeption(messages);
    }
  }
}
