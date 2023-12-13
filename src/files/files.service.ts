import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file: any): Promise<string> {
    try {
      console.log(file);

      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        //рекурсів - якщо якоїсь папки не буде, то нода її створить
        fs.mkdirSync(filePath, { recursive: true });
      }
      if (!file || !file.buffer) {
        throw new HttpException('Invalid file object', HttpStatus.BAD_REQUEST);
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Error file download',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
