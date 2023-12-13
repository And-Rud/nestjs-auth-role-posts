import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationExeption extends HttpException {
  messsages;

  constructor(response) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messsages = response;
  }
}
