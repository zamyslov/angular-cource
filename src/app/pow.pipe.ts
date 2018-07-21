import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return Math.pow(value, args[0]) + args[1];
  }
}
