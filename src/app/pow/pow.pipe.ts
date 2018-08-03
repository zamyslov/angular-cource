import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'Pow'
})
export class PowPipe implements PipeTransform {
  transform(value: any, pow: number = 1): any {
    return Math.pow(value, pow);
  }

}
