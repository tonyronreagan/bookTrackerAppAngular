import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  log(message: string): void {
    const timeString: String = new Date().toLocaleTimeString();
    console.log(`${message}(${timeString})`);
  }

  error(messge: string): void {
    console.error('Error: ${message}');
}
}
